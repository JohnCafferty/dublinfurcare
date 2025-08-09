import Head from "next/head";
import Layout from "../components/Layout";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Dublin Pet Grooming - Dog Grooming & Pet Sitting</title>
        <meta
          name="description"
          content="Professional, one-to-one dog grooming and pet sitting in South Dublin. Gentle handling, clean styling, and flexible bookings."
        />
      </Head>

      <Layout>
        <main className="relative px-6 py-16 min-h-screen bg-white overflow-hidden text-gray-900">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover opacity-10 z-0"
            style={{ backgroundImage: "url('/images/cropped.jpg')" }}
          />

          <div className="relative max-w-5xl mx-auto z-10">
            <h1 className="text-3xl font-bold mb-10 text-center">Our Services</h1>

            <div className="grid gap-8 md:grid-cols-2">
              <section className="p-6 rounded-2xl shadow-sm border bg-white/80 backdrop-blur">
                <h2 className="text-xl font-semibold mb-2">Full Groom</h2>
                <p className="text-sm mb-4">
                  Bath & blow-dry, brush-out, nail trim, ear clean, hygiene trim, and
                  coat styling to your preference (breed standard or practical pet trim).
                </p>
              </section>

              <section className="p-6 rounded-2xl shadow-sm border bg-white/80 backdrop-blur">
                <h2 className="text-xl font-semibold mb-2">Bath & Brush</h2>
                <p className="text-sm mb-4">
                  Deep cleanse, blow-dry, full brush-out, paw tidy, and nails. Ideal
                  between full grooms to keep coats healthy and knot-free.
                </p>
              </section>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
