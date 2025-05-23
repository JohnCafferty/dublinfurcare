import Link from "next/link";

export default function FAQs() {
  return (
    <section className="min-h-screen bg-[#fdfcfb] px-6 py-16 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-10">
          <div>
            <h3 className="font-semibold text-lg mb-1">What areas do you cover?</h3>
            <p className="text-gray-700">
              We’re based around Stepaside and usually cover Carrickmines, Sandyford,
              Kilternan, Ballyogan, Leopardstown, Glencullen, Belarmine and Dundrum.
              If you’re not sure whether we cover your area, just ask.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Do you use cages?</h3>
            <p className="text-gray-700">
              No. We never use cages. Every appointment is one to one, and every pet gets
              our full attention from start to finish.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Can I stay with my pet during the groom?</h3>
            <p className="text-gray-700">
              Most pets are actually calmer when their owners aren’t nearby. For safety and to help them settle,
              we usually ask owners to wait just outside but we’ll always do what’s best for your pet.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Do you groom large dogs?</h3>
            <p className="text-gray-700">
              Usually yes! Just let us know their breed and weight so we can be prepared.
              If you're unsure, feel free to message us first.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">How long does it take to groom my dog?</h3>
            <p className="text-gray-700">
              A full groom usually takes between 1–2 hours depending on the size, coat condition, and temperament.
              We don’t rush and we always work at your pet’s pace.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Do you groom cats?</h3>
            <p className="text-gray-700">
              At the moment, we only groom dogs. Cat grooming is quite different and usually requires separate handling.
              That may change in the future!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
