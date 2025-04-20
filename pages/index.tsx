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
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="font-inter bg-[#fdfcfb] text-gray-900 scroll-smooth">
        <Header />
        <Hero />

        {/* About Us */}
        <section id="about" className="py-16 px-6 bg-gradient-to-b from-white to-[#f7f6f4]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Dublin Fur Care is run by Bahar. She is a gentle and experienced groomer with a lifelong love of animals.
              She has a calm and patient approach that comes from years of caring for nervous and stray cats.
              <br /><br />
              Bahar holds both national and international certification in pet grooming, and brings professional care to every appointment.
              <br /><br />
              Every session is one to one. There are no cages. There is no rushing. There is no noisy salon.
              Whether it’s a quick tidy-up or a full groom, your pet gets her full attention in a quiet and familiar setting.
            </p>
          </div>
        </section>

        {/* Embedded Video */}
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

        {/* Services */}
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
