import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <Link href="/" className="text-2xl font-bold text-black" style={{ fontFamily: "'Chewy', cursive" }}>
        DUB DOGS GROOMING
      </Link>
      <nav className="space-x-4">
        <Link href="/services" className="text-black hover:underline">Services</Link>
        <Link href="/our-story" className="text-black hover:underline">Our Story</Link>
        <Link href="/faqs" className="text-black hover:underline">FAQs</Link>
        <Link href="/gallery" className="text-black hover:underline">Gallery</Link>
        <Link href="#contact" className="text-black hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
