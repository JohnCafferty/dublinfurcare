// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative px-6 py-16 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Dublin Fur Care</h1>
        <p className="text-lg mb-8">
          Gentle, one-to-one mobile grooming.
        </p>

        <div className="mt-8 flex justify-center items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black rounded-full"
          >
            Book Now
          </a>

          <span
            className="animate-bounce"
            role="img"
            aria-label="paws"
          >
            🐾
          </span>
        </div>
      </div>
    </section>
  );
}
