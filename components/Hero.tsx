import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-32 text-center bg-[#fdfcfb] overflow-hidden">
      {/* Background watermark image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10 z-0"
        style={{
          backgroundImage: "url('/images/paw-hand.jpg')",
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight font-serif text-gray-900">
          DUB DOGS GROOMING
        </h1>
        <p className="text-xl mt-6 text-gray-800 font-medium max-w-xl mx-auto">
          Friendly, professional mobile grooming across South Dublin
        </p>

        {/* Book Now Button */}
        <div className="mt-8 flex justify-center gap-4 items-center">
          <Image src="/images/dog-side.png" alt="Dog" width={40} height={40} />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold shadow hover:bg-black hover:text-white transition duration-300"
          >
            <span className="animate-pulse">🐾</span> Book Now
          </a>
          <Image src="/images/cat-side.png" alt="Cat" width={40} height={40} />
        </div>
      </div>
    </section>
  );
}
