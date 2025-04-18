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
            Dublin Fur Care is a friendly, mobile grooming service run by Bahar — a lifelong animal lover with years of experience caring for dogs and cats of all kinds. We believe grooming should be stress-free and tailored to your pet’s personality.
            <br /><br />
            There are no cages, no rushing, and no noisy salons. Just 1-on-1 attention, right at your doorstep — with plenty of tail wags and gentle hands.
          </p>
        </div>
      </section>

      {/* Mid-text */}
      <section className="py-12 text-center text-lg max-w-3xl mx-auto px-6">
        Every pet is different, so we take things at their pace. No rush, no cages, and no other animals. Just one-to-one care, done properly.
      </section>

      <Gallery />
      <Contact />
    </main>
  );
}
