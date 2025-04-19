import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative py-32 text-center text-black"
      style={{
        background: "linear-gradient(to right, #fde68a, #facc15)",
        backgroundImage: "url('/images/paw-hand.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="relative z-10 px-6">
        <h1
          className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          DUB DOGS GROOMING
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto font-medium">
          Friendly, professional mobile grooming across South Dublin
        </p>

        {/* Book Now Button */}
        <div className="mt-8 flex justify-center gap-3 items-center">
          <Image src="/images/dog-side.png" alt="Dog icon" width={32} height={32} />
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full font-semibold text-black shadow-md hover:bg-yellow-100 transition-all duration-300"
          >
            <span className="animate-pulse">🐾</span> Book Now
          </a>
          <Image src="/images/cat-side.png" alt="Cat icon" width={32} height={32} />
        </div>
      </div>
    </section>
  );
}
