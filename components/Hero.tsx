export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#fdfcfb] to-[#fdf7ec] text-center py-24 overflow-hidden">
      {/* Watermark background */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain z-0"
        style={{
          backgroundImage: "url('/images/paw-hand.png')",
        }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          DUB DOGS GROOMING
        </h1>
        <p className="text-xl mt-4 text-gray-700">
          Friendly, professional mobile grooming across South Dublin
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <img src="/images/dog-side.png" alt="Dog icon" className="w-8 h-8" />
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black rounded-full bg-white text-black font-semibold shadow hover:bg-[#fff3c4] transition"
          >
            <span className="animate-pulse">🐾</span> Book Now
          </a>
          <img src="/images/cat-side.png" alt="Cat icon" className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
