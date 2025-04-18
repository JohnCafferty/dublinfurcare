import Image from "next/image";

const gallery = [
  {
    img: "/images/cat-window.jpg",
    caption: "One of the regulars keeping an eye on things",
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
    <section id="gallery" className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden text-center"
            >
              <Image
                src={item.img}
                alt={item.caption}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
              <p className="p-4 text-gray-700">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
