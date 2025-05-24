'use client';

export default function BookingOptions() {
  return (
    <main className="bg-[#fdfcfb] text-gray-900 px-6 py-24 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-6">Booking Options</h1>
      <p className="text-lg mb-8">Choose the easiest way to book your pet's grooming appointment:</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="mailto:dublinpetgrooming@gmail.com"
          className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition"
        >
          Book via Email
        </a>

        <a
          href="https://wa.me/353871213112"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition"
        >
          Book via WhatsApp
        </a>
      </div>
    </main>
  );
}
