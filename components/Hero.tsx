import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FDB813] py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4">
        {/* Left: Text + Button */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-6xl lg:text-7xl font-bold mb-6 text-black tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            DUB DOGS GROOMING
          </h2>
          <p className="text-lg mb-6 font-medium text-black">
            Friendly, professional mobile grooming across South Dublin
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <Image src="/images/dog-side.png" alt="Dog" width={48} height={48} />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold shadow hover:bg-[#fff3c4] hover:scale-105 transition-all duration-200"
            >
              🐾 Book Now
            </a>
            <Image src="/images/cat-side.png" alt="Cat" width={48} height={48} />
          </div>
        </div>

        {/* Right: Welcome Video */}
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
    </section>
  );
}
