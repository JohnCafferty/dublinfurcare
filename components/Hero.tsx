import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fefefe] to-[#fef7ec] text-center py-32 px-6">
      {/* Watermark image behind */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 z-0"
        style={{
          backgroundImage: "url('/images/paw-hand.jpg')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6 tracking-tight">
          DUB DOGS GROOMING
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Friendly, professional mobile grooming across South Dublin
        </p>

        <div className="flex justify-center items-center gap-4">
          <Image src="/images/dog-side.png" alt="Dog icon" width={36} height={36} />
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold border border-black rounded-full bg-white text-black shadow hover:bg-gray-100 transition"
          >
            <span className="mr-2 animate-bounce">🐾</span> Book Now
          </a>
          <Image src="/images/cat-side.png" alt="Cat icon" width={36} height={36} />
        </div>
      </div>
    </section>
  );
}
