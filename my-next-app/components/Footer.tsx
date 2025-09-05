'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">NextGen Web</h2>
          <p className="text-sm">
            Crafting powerful and modern web solutions with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: support@example.com</p>
          <p className="text-sm mb-2">Phone: +92 123 456 7890</p>
          <p className="text-sm">Location: Lahore, Pakistan</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <Link href="#" className="hover:text-white">🌐</Link>
            <Link href="#" className="hover:text-white">📘</Link>
            <Link href="#" className="hover:text-white">📸</Link>
            <Link href="#" className="hover:text-white">🐦</Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NextGen Web. All rights reserved.
      </div>
    </footer>
  );
}
