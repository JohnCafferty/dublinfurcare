import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#ffc107] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text and Button */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-5xl lg:text-6xl font-bold mb-4 text-black"
            style={{ fontFamily: "'Chewy', cursive" }}
          >
            Dublin Fur Care
          </h1>
          <p className="text-lg mb-6 font-medium text-black">
            Friendly, professional grooming for dogs and cats in South Dublin
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <Image src="/images/dog-side.png" alt="Dog" width={48} height={48} />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold shadow hover:bg-[#fff3c4] hover:scale-105 transition-all duration-200"
            >
              <span className="animate-bounce">🐾</span> Book Now
            </a>
            <Image src="/images/cat-side.png" alt="Cat" width={48} height={48} />
          </div>
        </div>

        {/* Right: Video or Image */}
        <div className="lg:w-1/2 w-full max-w-md mx-auto">
          <div className="rounded-xl shadow-md overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full h-auto object-cover"
            >
              <source src="/images/welcome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/353871213112"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M16 0c-8.836 0-16 7.163-16 16 0 2.773 0.725 5.381 2.104 7.713l-2.139 7.015 7.207-2.108c2.253 1.239 4.792 1.903 7.382 1.903 8.836 0 16-7.163 16-16s-7.164-16-16-16zM16 29.25c-2.221 0-4.395-0.576-6.303-1.671l-0.451-0.264-4.268 1.249 1.249-4.248-0.276-0.453c-1.267-2.072-1.936-4.446-1.936-6.863 0-7.168 5.832-13 13-13s13 5.832 13 13c0 7.168-5.832 13-13 13z" />
          <path d="M22.157 18.602c-0.339-0.17-2.008-0.992-2.32-1.107-0.311-0.115-0.538-0.17-0.765 0.17-0.226 0.339-0.877 1.107-1.076 1.332-0.199 0.226-0.396 0.254-0.735 0.085-0.339-0.17-1.434-0.528-2.73-1.684-1.009-0.899-1.689-2.011-1.885-2.351s-0.021-0.522 0.149-0.691c0.153-0.152 0.339-0.396 0.509-0.593 0.17-0.199 0.226-0.339 0.339-0.565 0.113-0.226 0.057-0.424-0.028-0.593-0.085-0.17-0.765-1.842-1.048-2.523-0.276-0.664-0.56-0.575-0.765-0.584-0.198-0.008-0.424-0.010-0.65-0.010s-0.593 0.085-0.904 0.396c-0.311 0.311-1.187 1.161-1.187 2.83s1.215 3.285 1.384 3.513c0.17 0.226 2.397 3.654 5.812 5.123 0.813 0.351 1.447 0.562 1.941 0.719 0.816 0.26 1.557 0.223 2.141 0.136 0.653-0.097 2.008-0.82 2.291-1.612 0.283-0.793 0.283-1.474 0.198-1.612-0.085-0.141-0.311-0.226-0.65-0.396z" />
        </svg>
        WhatsApp
      </a>
    </section>
  );
}
