import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="py-4 px-6 bg-white border-b border-black shadow-md sticky top-0 z-50 flex items-center justify-between">
      <h1 className="text-3xl text-black" style={{ fontFamily: 'Chewy, cursive' }}>
        🐾 Dublin Fur Care
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        <a href="/services" className="hover:underline">Services</a>
        <a href="/our-story" className="hover:underline">Our Story</a>
        <a href="/faqs" className="hover:underline">FAQs</a>
        <a href="#gallery" className="hover:underline">Gallery</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Burger Icon */}
      <button
        className="md:hidden text-3xl"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-t border-black px-6 py-4 text-center z-40">
          <a href="/services" className="block mb-2 hover:underline" onClick={handleNavClick}>Services</a>
          <a href="/our-story" className="block mb-2 hover:underline" onClick={handleNavClick}>Our Story</a>
          <a href="/faqs" className="block mb-2 hover:underline" onClick={handleNavClick}>FAQs</a>
          <a href="#gallery" className="block mb-2 hover:underline" onClick={handleNavClick}>Gallery</a>
          <a href="#contact" className="block hover:underline" onClick={handleNavClick}>Contact</a>
        </nav>
      )}
    </header>
  );
}
