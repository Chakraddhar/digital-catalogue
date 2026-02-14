export default function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Reach out to us for dealership inquiries or product information.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>📍 India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@yourcompany.com</li>
          </ul>
        </div>

        <form className="bg-white p-6 rounded-xl shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border p-3 rounded"
          ></textarea>
          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
