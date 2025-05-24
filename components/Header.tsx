import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on top-left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Dublin Pet Grooming Logo"
            width={48}
            height={48}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          <Link href="/services" className="hover:text-black transition">Services</Link>
          <Link href="/our-story" className="hover:text-black transition">Our Story</Link>
          <Link href="/faqs" className="hover:text-black transition">FAQs</Link>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <nav className="md:hidden mt-4 space-y-2">
          <Link href="/services" className="block">Services</Link>
          <Link href="/our-story" className="block">Our Story</Link>
          <Link href="/faqs" className="block">FAQs</Link>
          <a href="#contact" className="block">Contact</a>
        </nav>
      )}
    </header>
  );
}
