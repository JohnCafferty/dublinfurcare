import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold font-chewy">Dub Dogs Grooming</h1>

        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#about" className="hover:text-primary transition">Our Story</a>
          <a href="#faqs" className="hover:text-primary transition">FAQs</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 text-center">
          <a href="#services" className="block">Services</a>
          <a href="#about" className="block">Our Story</a>
          <a href="#faqs" className="block">FAQs</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}
