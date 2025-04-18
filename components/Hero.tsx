import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FDB813] py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4">
        {/* Left: Text + Button */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-6">Dublin Fur Care</h2>
          <p className="text-lg mb-6 font-medium">
            Friendly, professional grooming for dogs and cats in South Dublin
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <Image src="/images/dog-side.png" alt="Dog" width={48} height={48} />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold shadow hover:bg-[#fff3c4] hover:scale-105 transition-all duration-200"
            >
              <span className="animate-pulse">🐾</span> Book Now
            </a>
            <Image src="/images/cat-side.png" alt="Cat" width={48} height={48} />
          </div>
        </div>

        {/* Right: Video */}
        <div className="lg:w-1/2">
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

      {/* Wave Divider */}
      <div className="mt-10 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" className="w-full">
          <path
            fill="#fff"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,80C672,64,768,32,864,21.3C960,11,1056,21,1152,37.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
