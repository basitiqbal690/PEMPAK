// src/app/services/page.tsx
export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Our Services</h1>
      <p className="text-gray-700 mb-10">
        We offer a range of high-quality services to help your business grow and succeed. Explore what we can do for you:
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Web Development</h2>
          <p className="text-gray-700">
            Custom, scalable web applications built with the latest technologies including React, Next.js, and Node.js.
            We focus on performance, accessibility, and SEO to maximize your online presence.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">UI/UX Design</h2>
          <p className="text-gray-700">
            Intuitive and engaging design solutions tailored to your users’ needs. From wireframes to final prototypes,
            we create seamless experiences that drive user satisfaction and conversion.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Digital Marketing</h2>
          <p className="text-gray-700">
            Strategic marketing campaigns including SEO, social media, and content marketing to grow your brand
            awareness and reach your target audience effectively.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Consulting & Support</h2>
          <p className="text-gray-700">
            Expert advice and ongoing support to optimize your business processes, implement new technologies,
            and troubleshoot technical challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
