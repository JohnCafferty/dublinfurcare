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
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Dublin Fur Care is run by Bahar. She’s a gentle and experienced groomer with a lifelong love of animals. She has a calm and patient approach that comes from years of caring for nervous and stray cats.
            <br /><br />
            Every appointment is one to one. No cages. No rushing. No noisy salon. Whether it’s a quick tidy-up or a full groom, your pet gets her full attention in a quiet and familiar setting.
          </p>
        </div>
      </section>

      {/* Mid-text */}
      <section className="py-12 text-center text-lg max-w-3xl mx-auto px-6">
        Every pet is different, so we take things at their pace. No rush, no cages, and no other animals. Just one to one care, done properly.
      </section>

      <Gallery />
      <Contact />
    </main>
  );
}
