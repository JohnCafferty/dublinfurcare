export default function OurStory() {
    return (
      <main className="relative px-6 py-16 min-h-screen bg-white overflow-hidden">
        {/* Background Image - swaps between cropped and full */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-10 z-0"
          style={{
            backgroundImage:
              "url('/images/cropped.jpg')",
          }}
        />
        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-10 z-0 hidden md:block"
          style={{
            backgroundImage:
              "url('/images/bahar-cats1.png')",
          }}
        />
  
        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-gray-800 text-center z-10">
          <h1 className="text-3xl font-bold mb-6">Our Story</h1>
  
          <p className="text-lg leading-relaxed">
            Bahar has been looking after animals since she was young. Mostly strays. She’d take them in, look after them, and make sure they were alright.
          </p>
  
          <p className="text-lg leading-relaxed mt-6">
            Dublin Pet Grooming is built on that same approach. Grooming should be calm. Not noisy. Not rushed. One animal at a time, looked after properly.
          </p>
  
          <p className="text-lg leading-relaxed mt-6">
            We come to you. We go at their pace. We take the time to do it right.
          </p>
  
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
  