// pages/gallery.tsx
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const gallery = [
    {
      img: "/images/wash.jpeg",
      caption: "Dog getting a gentle full-body wash",
    },
    {
      img: "/images/blowdry.jpeg",
      caption: "Blow-drying with care and fluff",
    },
    {
      img: "/images/nails.jpeg",
      caption: "Nail trim — safe, quick, and stress-free",
    },
  ];

  return (
    <section
      className="min-h-screen py-16 px-6 bg-white bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/cat-bg-final.jpg')" }}
    >
      <h1 className="text-4xl font-bold mb-8 text-black">Gallery</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow">
            <Image
              src={item.img}
              alt={item.caption}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
            <p className="text-gray-700 text-sm mt-2 px-4 pb-4">{item.caption}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
