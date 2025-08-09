import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dublin Pet Grooming | Gentle, One-to-One Dog Grooming in South Dublin, Ireland</title>
        <meta
          name="description"
          content="Professional, one-to-one dog grooming in South Dublin, Ireland. Serving Stepaside, Sandyford, Dundrum & nearby areas."
        />
      </Head>

      <Layout>
        <Hero />

        {/* About Us */}
        <section
          id="about"
          className="py-16 px-6 bg-gradient-to-b from-white to-[#f7f6f4]"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Dublin Pet Grooming is run by Bahar. She is a gentle and experienced groomer with a lifelong love of animals.
              <br />
              <br />
              Bahar holds both national and international certification in pet grooming,
              and brings professional care to every appointment.
              <br />
              <br />
              Every session is one to one. There is no rushing and no noisy salon.
              Whether it’s a quick tidy-up or a full groom, your pet gets her full attention in a quiet and familiar setting.
            </p>
          </div>
        </section>

        {/* Welcome Video */}
        <section className="py-8 px-6 bg-white flex justify-center">
          <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow">
            <div className="bg-black">
              <video
                src="/video/dog-video.mp4?v=1"
                controls
                playsInline
                muted
                autoPlay
                loop
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              If the player doesn’t appear,{" "}
              <a
                className="underline"
                href="/video/dog-video.mp4?v=1"
                target="_blank"
                rel="noreferrer"
              >
                open the video directly
              </a>.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="py-16 px-6 bg-[#fdfcfb] border-t border-gray-200"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Services</h2>
            <div className="grid gap-8 md:grid-cols-2 text-left">
              <div>
                <h3 className="text-lg font-semibold mb-1">Full Groom</h3>
                <p className="text-gray-700">
                  Includes wash, dry, brush, full body trim, ear cleaning and nail clipping.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Bath &amp; Brush</h3>
                <p className="text-gray-700">
                  Ideal for maintenance between full grooms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Nail Trim</h3>
                <p className="text-gray-700">
                  Quick and stress-free nail clipping.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Puppy Intro</h3>
                <p className="text-gray-700">
                  A short, positive first grooming experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="py-16 px-6 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Areas We Cover</h2>
            <p className="text-lg text-gray-700 mb-10">
              We’re based around Stepaside and usually cover Carrickmines, Sandyford, Kilternan,
              Ballyogan, Leopardstown, Glencullen, Belarmine and Dundrum. If you're nearby and not sure,
              just ask and we’ll let you know.
            </p>
            <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95218.04234886414!2d-6.338928353158761!3d53.302676451092236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867094b91f57e09%3A0x260e88cb8f85c65d!2sSouth%20Dublin!5e0!3m2!1sen!2sie!4v1713440923672!5m2!1sen!2sie"
                width="100%"
                height="506"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <Gallery />
        <Contact />
      </Layout>
    </>
  );
}
