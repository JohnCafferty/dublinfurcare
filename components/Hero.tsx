import Head from "next/head";

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section
        className="relative py-32 px-6 text-center"
        style={{
          background: "linear-gradient(to right, #fceabb, #f8b500)",
        }}
      >
        <h1
          className="text-5xl lg:text-7xl font-bold mb-6 text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          DUB DOGS GROOMING
        </h1>

        <p className="text-lg text-black uppercase tracking-wide mb-10">
          Friendly, professional mobile grooming across South Dublin
        </p>

        <a
          href="#contact"
          className="inline-block px-8 py-3 border-2 border-black text-black text-lg font-medium rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          Book Now
        </a>
      </section>
    </>
  );
}
