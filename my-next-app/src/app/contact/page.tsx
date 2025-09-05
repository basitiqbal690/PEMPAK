// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        We'd love to hear from you! Please fill out the form below or reach us via the contact details.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p>Email: <a href="mailto:contact@yourdomain.com" className="text-blue-600 hover:underline">contact@yourdomain.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
        <p>Address: 123 Next.js St, Web City, Internet</p>
      </div>
    </section>
  );
}
