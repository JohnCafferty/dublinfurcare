import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>DUB DOGS GROOMING</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Chewy&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="font-sans">
        <Header />

        {/* Hero Section */}
        <section className="bg-[#FDB813] py-28 text-center">
          <h1
            className="text-6xl lg:text-7xl font-bold text-black tracking-wide"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            DUB DOGS GROOMING
          </h1>
          <p className="mt-6 text-xl text-black font-medium">
            Friendly, professional mobile grooming across South Dublin
          </p>
          <div className="mt-10 flex justify-center items-center gap-4">
            <img src="/images/dog-side.png" alt="Dog Icon" width={48} height={48} />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold shadow hover:bg-black hover:text-white transition duration-300"
            >
              <span className="text-xl">🐾</span> Book Now
            </a>
            <img src="/images/cat-side.png" alt="Cat Icon" width={48} height={48} />
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-black text-white py-16 text-center px-4">
          <h2 className="text-3xl font-bold mb-6">See Us in Action</h2>
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl object-cover"
            >
              <source src="/images/welcome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* About Us */}
        <section className="bg-[#fdfaf5] py-16 text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              Dub Dogs Grooming is run by Bahar — a gentle and experienced groomer
              with a lifelong love of animals. Her calm and patient approach comes from years of
              caring for nervous and stray cats. Every appointment is one to one.
              No cages. No rushing. No noisy salon. Whether it’s a quick tidy-up or a full groom,
              your pet gets her full attention in a quiet and familiar setting.
            </p>
            <div className="max-w-md mx-auto">
              <img
                src="/images/bahar-cats.png"
                alt="Bahar's cats"
                className="rounded-xl shadow-md object-contain w-full"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-[#111] py-16 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-10">Groomed & Gorgeous</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["cropped.jpg", "scissors.jpg", "scissors2.jpg"].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={`/images/${img}`}
                  alt={`Gallery image ${i + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
}
