import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo removed from top left — left blank */}
        <div className="text-xl font-bold text-transparent">placeholder</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#services" className="hover:text-gray-700">
            Services
          </Link>
          <Link href="#our-story" className="hover:text-gray-700">
            Our Story
          </Link>
          <Link href="#faqs" className="hover:text-gray-700">
            FAQs
          </Link>
          <Link href="#gallery" className="hover:text-gray-700">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-gray-700">
            Contact
          </Link>
        </nav>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          <Link href="#services" className="block hover:text-gray-700">
            Services
          </Link>
          <Link href="#our-story" className="block hover:text-gray-700">
            Our Story
          </Link>
          <Link href="#faqs" className="block hover:text-gray-700">
            FAQs
          </Link>
          <Link href="#gallery" className="block hover:text-gray-700">
            Gallery
          </Link>
          <Link href="#contact" className="block hover:text-gray-700">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
