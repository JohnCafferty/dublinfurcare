export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-[#fdfcfb] to-[#fdf7ec] text-center py-24 overflow-hidden"
      id="home"
    >
      {/* Watermark Background */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30 mix-blend-multiply z-0"
        style={{ backgroundImage: "url('/images/paw-hand.png')" }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Dublin Fur Care
        </h1>
        <p className="text-xl mt-4 text-gray-700">
          Friendly, professional mobile grooming across South Dublin
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <a
            href="#
