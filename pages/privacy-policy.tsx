import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <main className="px-6 py-16 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At Dublin Pet Grooming, we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and protect your information in accordance with GDPR.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Your name, email, and phone number when you contact us or book an appointment</li>
          <li>Any additional information you voluntarily provide</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your data solely to respond to your queries, manage bookings, and provide our services. We do not share your data with third parties unless legally required.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Storage</h2>
        <p className="mb-4">
          Your data is stored securely and retained only as long as necessary for business or legal purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or request deletion of your personal data. Contact us at dublinpetgrooming@gmail.com to make any such requests.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact Us</h2>
        <p>
          If you have any concerns about your data or this policy, please contact us at: <br />
          <strong>dublinpetgrooming@gmail.com</strong>
        </p>
      </main>
    </Layout>
  );
}
