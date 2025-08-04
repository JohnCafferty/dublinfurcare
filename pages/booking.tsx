'use client';

import Image from "next/image";
import Layout from "../components/Layout";

export default function BookingOptions() {
  return (
    <Layout>
      <main className="bg-[#fdfcfb] text-gray-900 px-6 py-24 min-h-screen text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Booking Options</h1>

        {/* Dog Image */}
        <div className="mb-10">
          <Image
            src="/images/dog-text.png"
            alt="Dog holding WhatsApp phone"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Booking Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="mailto:dublinpetgrooming@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-800 transition"
          >
            Book via Email
          </a>

          <a
            href="https://wa.me/353871213112"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition"
          >
            Book via WhatsApp
          </a>
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
      </main>
    </Layout>
  );
}
