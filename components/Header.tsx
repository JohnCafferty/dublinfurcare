import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo removed */}
        <div />

        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#services">Services</a>
          <a href="#story">Our Story</a>
          <a href="#faqs">FAQs</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Burger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-6">
          <a href="#services" className="block text-gray-800">Services</a>
          <a href="#story" className="block text-gray-800">Our Story</a>
          <a href="#faqs" className="block text-gray-800">FAQs</a>
          <a href="#gallery" className="block text-gray-800">Gallery</a>
          <a href="#contact" className="block text-gray-800">Contact</a>
        </div>
      )}
    </header>
  );
}
