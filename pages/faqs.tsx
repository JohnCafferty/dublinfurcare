export default function Faqs() {
    return (
      <main className="relative px-6 py-16 min-h-screen bg-white overflow-hidden">
        {/* Background Image — same for all screens */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-10 z-0"
          style={{
            backgroundImage: "url('/images/cropped.jpg')",
            backgroundPosition: "center center",
          }}
        />
  
        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-gray-800 z-10 text-center">
          <h1 className="text-3xl font-bold mb-6">What to Expect</h1>
  
          <div className="space-y-6 text-left text-lg">
            <div>
              <h2 className="font-semibold">Where do you cover?</h2>
              <p>We’re based around Stepaside and usually cover Carrickmines, Sandyford, Kilternan, Ballyogan, Leopardstown, Glencullen, Belarmine and Dundrum. If you're nearby and not sure, just ask.</p>
            </div>
            <div>
              <h2 className="font-semibold">How long does it take?</h2>
              <p>Most grooms take between 1 and 1.5 hours. We don’t rush.</p>
            </div>
            <div>
              <h2 className="font-semibold">Do you use cages?</h2>
              <p>No. Ever.</p>
            </div>
            <div>
              <h2 className="font-semibold">Do you groom big dogs?</h2>
              <p>Usually yes, but it depends on the dog and your setup. Just message us and we’ll let you know.</p>
            </div>
            <div>
              <h2 className="font-semibold">Can I stay with my dog?</h2>
              <p>You’re welcome to, or you can leave us to it. Whatever suits your dog best.</p>
            </div>
          </div>
  
          {/* Back to Home Button */}
          <a
            href="/"
            className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            ← Back to Home
          </a>
        </div>
      </main>
    );
  }
  