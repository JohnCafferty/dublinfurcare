import Image from "next/image";

const gallery = [
  {
    img: "/images/bath-brush.jpg.jpg",
    caption: "Mobile grooming van in Dublin",
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

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <div key={index} className="bg-white rounded shadow overflow-hidden">
            <Image
              src={item.img}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <p className="text-center text-sm py-2 text-gray-600">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
