import Image from "next/image";

const gallery = [
  {
    img: "/images/wash-new.jpeg",
  },
  {
    img: "/images/blowdry-new.jpeg",
  },
  {
    img: "/images/nails-new.jpeg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden text-center flex justify-center"
            >
              <Image
                src={item.img}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
