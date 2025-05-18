import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 bg-white">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo.png"
          alt="Dublin Pet Grooming logo"
          width={180}
          height={180}
          className="rounded-full shadow-md"
        />
      </div>

      {/* Main title */}
      <h1 className="text-5xl font-bold text-gray-900">Dublin Pet Grooming</h1>

      {/* Subtitle */}
      <p className="mt-4 text-xl text-gray-700">
        Friendly, professional mobile grooming across South Dublin
      </p>

      {/* Book Now button */}
      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 bg-white text-black border-2 border-black font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          <span className="mr-2">🐾</span> Book Now <span className="ml-2">🐾</span>
        </a>
      </div>
    </section>
  );
}
