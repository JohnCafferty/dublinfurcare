import Head from "next/head";
import Layout from "../components/Layout";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Dublin Pet Grooming - Dog Grooming & Pet Sitting</title>
        <meta
          name="description"
          content="Dog grooming and pet sitting services including full groom, bath & brush, nail trim, puppy intro, and reliable in-home pet care."
        />
      </Head>

      <Layout>
        <main className="px-4 py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Full Groom</h2>
            <p className="text-gray-700">
              Includes wash, dry, brush, full body trim, ear cleaning and nail clipping.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Bath &amp; Brush</h2>
            <p className="text-gray-700">Ideal for maintenance between full grooms.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Nail Trim</h2>
            <p className="text-gray-700">Quick and stress-free nail clipping.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Puppy Intro</h2>
            <p className="text-gray-700">
              A short, positive first grooming experience.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Cat &amp; Dog Sitting</h2>
            <p className="text-gray-700">
              Reliable in-home care for your pets when you're away. Includes feeding,
              fresh water, playtime, and companionship to keep your pets happy and relaxed
              in their own environment. Perfect when you’re on holiday or busy for the day.
            </p>
          </section>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-block px-6 py-2 text-lg font-medium border rounded-lg hover:bg-gray-100"
            >
              ← Back to Home
            </a>
          </div>
        </main>
      </Layout>
    </>
  );
}
