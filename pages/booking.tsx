'use client';

export default function BookingPage() {
  return (
    <main className="bg-[#fdfcfb] text-gray-900 px-6 py-16 min-h-screen">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Request</h1>

        <form
          action="https://formsubmit.co/dublinpetgrooming@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Formsubmit settings */}
          <input type="hidden" name="_subject" value="New Booking Request" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://dublinpetgrooming.ie/thank-you" />

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Preferred Date & Time */}
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date & Time</label>
            <input
              type="text"
              name="datetime"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location (Eircode or Area)</label>
            <input
              type="text"
              name="location"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Extra Notes */}
          <div>
            <label className="block text-sm font-medium mb-1">Extra Notes</label>
            <textarea
              name="notes"
              rows={4}
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition"
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </main>
  );
}
