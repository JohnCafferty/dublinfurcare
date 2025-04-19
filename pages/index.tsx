import Head from "next/head";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DUB DOGS GROOMING</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="font-inter bg-[#fdfcfb] text-gray-900">
        <Header />

        {/* Hero */}
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-black rounded-full font-semibold shadow hover:bg-[#fff3c4] hover:scale-105 transition-all duration-200"
            >
              🐾 Book Now 🐾
            </a>
            <img src="/images/cat-side.png" alt="Cat Icon" width={48} height={48} />
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-black py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
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
        <section className="py-16 px-6 bg-gradient-to-b from-white to-[#f7f6f4] text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Dub Dogs Grooming is run by Bahar — a gentle and experienced groomer with a lifelong love of animals.
              Her calm and patient approach comes from years of caring for nervous and stray cats. Every appointment is one to one.
              No cages. No rushing. No noisy salon. Whether it’s a quick tidy-up or a full groom, your pet gets her full attention in a quiet and familiar setting.
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

        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">No cages</h3>
              <p className="text-gray-600">Calm and quiet, just one pet at a time</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">No rushing</h3>
              <p className="text-gray-600">We go at their pace, not the clock</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">We come to you</h3>
              <p className="text-gray-600">Appointments at your doorstep in South Dublin</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 bg-[#fdfcfb] border-t border-gray-200">
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

        {/* Areas We Cover */}
        <section className="py-16 px-6 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Areas We Cover</h2>
            <p className="text-lg text-gray-700">
              We’re based around Stepaside and usually cover Carrickmines, Sandyford, Kilternan, Ballyogan, Leopardstown, Glencullen, Belarmine and Dundrum.
              If you're nearby and not sure, just ask and we’ll let you know.
            </p>

            <div className="mt-10 aspect-video max-w-4xl mx-auto rounded shadow overflow-hidden">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95218.04234886414!2d-6.338928353158761!3d53.302676451092236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867094b91f57e09%3A0x260e88cb8f85c65d!2sSouth%20Dublin!5e0!3m2!1sen!2sie!4v1713440923672!5m2!1sen!2sie"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
