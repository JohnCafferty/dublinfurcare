
'use client';

import { useState } from "react";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for future email integration
    setSubmitted(true);
  };

  return (
    <main className="bg-[#fdfcfb] text-gray-900 px-6 py-16 min-h-screen">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Request</h1>

        {submitted ? (
          <div className="text-center text-lg text-green-600">
            Thank you! We'll be in touch shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Date & Time</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location (Eircode or Area)</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Extra Notes</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition"
            >
              Submit Booking Request
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
