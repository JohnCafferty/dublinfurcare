import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* Mid-text */}
      <section className="py-12 text-center text-lg max-w-3xl mx-auto px-6">
        Every pet is different, so we take things at their pace. No rush, no cages, and no other animals. Just one to one care, done properly.
      </section>

      <Gallery />

      {/* Service Area Map */}
      <section id="map" className="py-12 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">Service Area</h2>
          <p className="text-gray-700">
            We cover South Dublin and nearby areas — if you're unsure, feel free to ask!
          </p>
        </div>
        <div className="max-w-4xl mx-auto aspect-video rounded overflow-hidden shadow-lg">
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
      </section>

      <Contact />
    </main>
  );
}
