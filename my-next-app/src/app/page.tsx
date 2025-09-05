import Image from "next/image";

export default function Home() {
  return (
    <div >
<main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Build Better Web Apps with <span className="text-blue-600">Next.js</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Fast, scalable, and modern solutions using React, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
            Explore Services
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Modern Stack</h3>
          <p className="text-gray-700">
            Powered by Next.js, TypeScript, and Tailwind CSS for high-performance apps with cutting-edge technology.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Clean Design</h3>
          <p className="text-gray-700">
            Sleek, user-focused UI with responsive layouts that look great on every device.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Easy to Extend</h3>
          <p className="text-gray-700">
            Modular, well-structured code that scales with your project and team.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Let's build your next big thing!</h2>
        <p className="mb-6 text-lg">
          Get in touch with us today to start your journey in building scalable, modern web apps.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </main>


    </div>
  );
}
