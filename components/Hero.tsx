export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#fdfcfb] to-[#fdf7ec] text-center py-24 overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          DUB D
          <span className="relative inline-block w-[60px] h-[60px] align-middle">
            O
            <img
              src="/images/puppy-head.png"
              alt="Puppy peeking"
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-full object-cover rounded-full shadow-md"
              style={{ borderRadius: "50%" }}
            />
          </span>
          GS GROOMING
        </h1>
        <p className="text-xl mt-4 text-gray-700">
          Friendly, professional mobile grooming across South Dublin
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <img src="/images/dog-side.png" alt="Dog icon" className="w-8 h-8" />
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black rounded-full bg-white text-black font-semibold shadow hover:bg-[#fff3c4] transition flex items-center gap-2"
          >
            🐾 Book Now
          </a>
          <img src="/images/cat-side.png" alt="Cat icon" className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
