// pages/gallery.tsx
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const gallery = [
    {
      img: "/images/cropped.jpg",
      caption: "Bahar’s cat, groomed and ready",
    },
    {
      img: "/images/scissors.jpg",
      caption: "Full grooming session in progress",
    },
    {
      img: "/images/scissors2.jpg",
      caption: "Tidy trim for a happy pup",
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
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
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
