"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">🐾 Dublin Fur Care</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile Burger Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-300 shadow-inner">
          <a href="#gallery" className="text-lg hover:underline" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#contact" className="text-lg hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}
