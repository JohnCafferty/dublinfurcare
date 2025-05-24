'use client';

import Link from 'next/link';

export default function BookingPage() {
  return (
    <main className="bg-[#fdfcfb] text-gray-900 px-6 py-16 min-h-screen">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Booking Options</h1>
        <p className="text-lg">Choose the easiest way to book your pet's grooming appointment:</p>

        {/* Book via Email */}
        <a
          href="mailto:dublinpetgrooming@gmail.com?subject=Booking%20Request&body=Hi%20there,%20I'd%20like%20to%20book%20a%20grooming%20appointment.%20Here%20are%20my%20details:"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
        >
          Book via Email
        </a>

        {/* Book via WhatsApp */}
        <a
          href="https://wa.me/353871213112?text=Hi%20there%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment."
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
        >
          Book via WhatsApp
        </a>

        {/* Link to Contact Form */}
        <Link href="/#contact">
          <a className="inline-block border border-black text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
            Fill Out the Contact Form
          </a>
        </Link>
      </div>
    </main>
  );
}
