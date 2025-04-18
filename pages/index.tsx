import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* About Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Dublin Fur Care is run by Bahar. She’s a gentle and experienced groomer with a lifelong love of animals. She has a calm and patient approach that comes from years of caring for nervous and stray cats.
            <br /><br />
            Every appointment is one to one. No cages. No rushing. No noisy salon. Whether it’s a quick tidy-up or a full groom, your pet gets her full attention in a quiet and familiar setting.
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

      {/* What We Offer */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-gray-700">
            Full grooms, bath and brush, tidy-ups, nail trimming, and cat grooms.  
            If you’re not sure what your pet needs, just ask.
          </p>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Areas We Cover</h2>
          <p className="text-lg text-gray-700">
            We’re based around Stepaside and usually cover Carrickmines, Sandyford, Kilternan, Ballyogan, Leopardstown, Glencullen, Belarmine, and Dundrum.  
            If you're nearby and not sure, just ask and we’ll let you know.
          </p>
        </div>
      </section>

      <Gallery />
      <Contact />
    </main>
  );
}
