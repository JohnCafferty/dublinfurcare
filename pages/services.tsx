import Layout from "../components/Layout";

export default function ServicesPage() {
  return (
    <Layout>
      <main className="relative px-6 py-16 min-h-screen bg-white overflow-hidden text-gray-900">
        {/* Faded Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-10 z-0"
          style={{
            backgroundImage: "url('/images/cropped.jpg')",
          }}
        />

        {/* Main Content */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl font-bold mb-8">Our Services</h1>

          <div className="grid gap-8 md:grid-cols-2 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-1">Full Groom</h3>
              <p className="text-gray-700">
                Includes wash, dry, brush, full body trim, ear cleaning and nail clipping.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Bath &amp; Brush</h3>
              <p className="text-gray-700">
                Ideal for maintenance between full grooms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Nail Trim</h3>
              <p className="text-gray-700">
                Quick and stress-free nail clipping.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Puppy Intro</h3>
              <p className="text-gray-700">
                A short, positive first grooming experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Cat &amp; Dog Sitting</h3>
              <p className="text-gray-700">
                Reliable in-home care for your pets when you're away. Includes feeding,
                fresh water, playtime, and companionship to keep your pets happy and
                relaxed in their own environment. Perfect when you’re on holiday or busy
                for the day.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12">
            <a
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-[#FDB813] text-white font-semibold shadow hover:bg-[#d99e0e] transition"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
