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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-
