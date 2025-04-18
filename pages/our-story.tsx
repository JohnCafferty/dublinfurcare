export default function OurStory() {
    return (
      <main className="relative px-6 py-16 min-h-screen bg-white overflow-hidden">
        {/* Faded background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 z-0"
          style={{
            backgroundImage: "url('/images/bahar-cats1.png')",
          }}
        ></div>
  
        {/* Content overlay */}
        <div className="relative max-w-3xl mx-auto text-gray-800 text-center z-10">
          <h1 className="text-3xl font-bold mb-6">Our Story</h1>
  
          <p className="text-lg leading-relaxed">
            Bahar has been looking after animals since she was a kid. Mostly strays. She’d sit with them, wait, and eventually they’d come to her. She’s got a quiet way that puts them at ease.
          </p>
  
          <p className="text-lg leading-relaxed mt-6">
            That same approach is behind Dublin Fur Care. It started with the idea that grooming could be something calm. Not a noisy salon. Not a conveyor belt. Just one pet at a time, looked after properly.
          </p>
  
          <p className="text-lg leading-relaxed mt-6">
            We come to you. We go at their pace. We take the time to do it right.
          </p>
  
          {/* Back link */}
          <a
            href="/"
            className="inline-block mt-10 text-blue-600 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </main>
    );
  }
  