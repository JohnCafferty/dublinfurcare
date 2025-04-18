export default function Services() {
    return (
      <main className="relative px-6 py-16 min-h-screen bg-white overflow-hidden">
        {/* Faded Image Behind Content */}
        <img
          src="/images/cropped.jpg"
          alt="Faded background cat"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />
  
        {/* Main Content */}
        <div className="relative max-w-4xl mx-auto text-gray-800 z-10 text-center">
          <h1 className="text-3xl font-bold mb-6">Services</h1>
  
          <div className="space-y-6 text-left">
            <div>
              <h2 className="text-xl font-semibold">Full Groom</h2>
              <p>Includes wash, dry, brush, full body trim, ear cleaning and nail clipping.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Bath & Brush</h2>
              <p>A warm bath, gentle blow-dry and a good brush-out. Great for in between full grooms.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Nail Trim</h2>
              <p>Quick and calm nail clipping. We let them settle and take our time.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Cat Groom</h2>
              <p>Bathing, brushing and light trimming if needed. We keep things quiet and calm.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Puppy Intro</h2>
              <p>A short, gentle first groom to help puppies feel safe and relaxed.</p>
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
  