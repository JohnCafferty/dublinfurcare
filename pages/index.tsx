import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dub Dogs Grooming</title>
      </Head>

      <main className="font-sans">
        <Header />
        <Hero />

        {/* About Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dub Dogs Grooming is run by Bahar, a gentle and experienced groomer with a lifelong love of animals.
              Her calm and patient approach comes from years of caring for nervous and stray cats.
              <br /><br />
              Every appointment is one to one. No cages. No rushing. No noisy salon.
              Whether it’s a quick tidy-up or a full groom, your pet gets her full attention in a quiet and familiar setting.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-[#fffbe6]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">No cages</h3>
              <p>Calm and quiet, just one pet at a time</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">No rushing</h3>
              <p>We go at their pace, not the clock</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">We come to you</h3>
              <p>Appointments at your doorstep in South Dublin</p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Services</h2>
            <div className="grid gap-8 md:grid-cols-2 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-1">Full Groom</h3>
                <p className="text-gray-700">Wash, dry, full trim, nails & ears</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Bath & Brush</h3>
                <p className="text-gray-700">Ideal between grooms</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Nail Trim</h3>
                <p className="text-gray-700">Quick, calm and stress-free</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Cat Groom</h3>
                <p className="text-gray-700">Quiet and gentle handling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Areas We Cover</h2>
            <p className="text-lg text-gray-700">
              Based in Stepaside. Covering Carrickmines, Sandyford, Kilternan, Leopardstown, Glencullen, Dundrum, Belarmine & nearby.
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
      </main>
    </>
  );
}
