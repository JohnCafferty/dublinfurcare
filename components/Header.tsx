import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/title removed for clean top-left */}
        <div />

        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          <Link href="/services" className="hover:text-black transition">Services</Link>
          <Link href="/our-story" className="hover:text-black transition">Our Story</Link>
          <Link href="/faqs" className="hover:text-black transition">FAQs</Link>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>

        {/* Burger Icon */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 text-center text-gray-800 font-medium">
          <Link href="/services" className="block">Services</Link>
          <Link href="/our-story" className="block">Our Story</Link>
          <Link href="/faqs" className="block">FAQs</Link>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}
