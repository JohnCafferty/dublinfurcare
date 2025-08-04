<<<<<<< HEAD
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dub Dogs Grooming</title>
      </Head>

      <main className="font-inter bg-[#fdfcfb] text-gray-900 scroll-smooth">
        <Header />
        <Hero />

        <section id="about" className="py-16 px-6 bg-gradient-to-b from-white to-[#f7f6f4]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Dub Dogs Grooming is run by Bahar. She is a gentle and experienced groomer with a lifelong love of animals.
              She has a calm and patient approach that comes from years of caring for nervous and stray cats.

              <br /><br />
              Bahar holds both national and international certification in pet grooming,
              and brings professional care to every appointment.

              <br /><br />
              Every session is one to one. There are no cages. There is no rushing. There is no noisy salon.
              Whether it’s a quick tidy-up or a full groom, your pet gets her full attention in a quiet and familiar setting.
            </p>
          </div>
        </section>

        {/* Embedded Video Section */}
        <section className="py-8 px-6 bg-white flex justify-center">
          <div className="w-full max-w-2xl shadow-lg rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src="/images/welcome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section id="services" className="py-16 px-6 bg-[#fdfcfb] border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Services</h2>
            <div className="grid gap-8 md:grid-cols-2 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-1">Full Groom</h3>
                <p className="text-gray-700">Includes wash, dry, brush, full body trim, ear cleaning and nail clipping</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Bath & Brush</h3>
                <p className="text-gray-700">Ideal for maintenance between full grooms</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Nail Trim</h3>
                <p className="text-gray-700">Quick and stress-free nail clipping</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Cat Groom</h3>
                <p className="text-gray-700">Gentle handling with a calm and quiet approach</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Puppy Intro</h3>
                <p className="text-gray-700">A short, positive first grooming experience</p>
              </div>
            </div>
          </div>
        </section>

        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
=======
export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-[#fdfcfb] to-[#fdf7ec] text-center py-24 overflow-hidden"
      id="home"
      data-aos="fade-up"
    >
      {/* Watermark Background */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30 mix-blend-multiply z-0"
        style={{ backgroundImage: "url('/images/paw-hand.png')" }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Dublin Pet Grooming
        </h1>
        <p className="text-xl mt-4 text-gray-700">
          Gentle, one-to-one, cage-free pet grooming in <strong>South Dublin, Ireland</strong>
        </p>
        <p className="text-md mt-2 text-gray-600">
          Serving Stepaside, Sandyford, Leopardstown, Dundrum, and nearby areas
        </p>

        {/* Animated CTA Button */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black rounded-full bg-[#FDB813] text-white font-semibold shadow hover:bg-[#d99e0e] transition transform hover:scale-105 flex items-center gap-2"
          >
            <span className="animate-bounce" role="img" aria-label="paw">🐾</span> Book Now
          </a>
        </div>
      </div>
    </section>
>>>>>>> main
  );
}
