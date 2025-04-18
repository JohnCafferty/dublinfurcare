export default function Contact() {
    return (
      <section
        id="contact"
        className="bg-[#FDB813] py-12 px-4 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-6 font-medium text-lg">
          For appointments or questions, feel free to contact Bahar directly.
          <br />
          Phone / WhatsApp: <strong>(087) 121 3112</strong>
          <br />
          Instagram:{" "}
          <a
            href="https://www.instagram.com/dublinfurcare"
            target="_blank"
            className="text-black underline"
          >
            @dublinfurcare
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto:dublinfurcare@gmail.com"
            className="text-black underline"
          >
            dublinfurcare@gmail.com
          </a>
        </p>
      </section>
    );
  }
  