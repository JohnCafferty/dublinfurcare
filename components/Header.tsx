export default function Header() {
  return (
    <header className="py-4 px-6 bg-white border-b border-black shadow-md sticky top-0 z-50 flex items-center justify-between">
      <h1 className="text-3xl text-black" style={{ fontFamily: 'Chewy, cursive' }}>
        🐾 Dublin Fur Care
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        <a href="#gallery" className="hover:underline">Gallery</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Mobile Burger Icon */}
      <button
        className="md:hidden text-3xl"
        aria-label="Toggle navigation"
        onClick={() => {
          const nav = document.getElementById("mobile-nav");
          if (nav) nav.classList.toggle("hidden");
        }}
      >
        ☰
      </button>

      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        className="md:hidden hidden absolute top-full left-0 w-full bg-white border-t border-black px-6 py-4 text-center"
      >
        <a href="#gallery" className="block mb-2 hover:underline">Gallery</a>
        <a href="#contact" className="block hover:underline">Contact</a>
      </nav>
    </header>
  );
}
