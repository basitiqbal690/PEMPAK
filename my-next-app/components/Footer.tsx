'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-gray-300 pt-12 pb-6 p-10 bg-orange-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className=''>
          <h2 className="text-2xl font-bold text-white mb-4">PAMPAK</h2>
          <p className="text-sm mb-3">
           PEMPAK Group delivers innovative electric supplies, energy solutions, and solar concepts. Our goal is to power progress while protecting the environment.
          </p>
          
          <div className='flex'>
            <img src="socialMedia/phoneNo.svg" alt="" className='bg-white h-5 w-7 mr-2'/>

          <p className="text-sm mb-3">
           +92-42-111-736-725
          </p>
          </div>

          <div className='flex'>
            <img src="socialMedia/gmail.svg" alt="" className='bg-white h-5 w-7 mr-2'/>
          <p className="text-sm mb-3">
           pempak@gmail.com
          </p>
          </div>
          <div className='flex'>
            <img src="socialMedia/location-icon.svg" alt="" className='bg-white h-5 w-7 mr-2'/>
          <p className="text-sm mb-3">
           pempak@gmail.com
          </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/products" className="hover:text-white">Our Products</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/ourteam" className="hover:text-white">Our team</Link></li>
            <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Erection</Link></li>
            <li><Link href="/about" className="hover:text-white">Installation & Commissioning</Link></li>
            <li><Link href="/products" className="hover:text-white">Maintenance</Link></li>
            <li><Link href="/services" className="hover:text-white">Training</Link></li>
            <li><Link href="/ourteam" className="hover:text-white">Testing</Link></li>
            <li><Link href="/blogs" className="hover:text-white">Manufacturing</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Switchgear / Controlgear</Link></li>
            <li><Link href="/about" className="hover:text-white">Power Distribution Transformer</Link></li>
            <li><Link href="/products" className="hover:text-white">Green Energy</Link></li>
            <li><Link href="/services" className="hover:text-white">Appliances</Link></li>
          </ul>
        </div>

        <div className='absolute w-[90vw] p-3 flex justify-end mt-55'>
          <img className='m-2' src="socialMedia/facebook-icon.svg" alt="" />
          <img className='m-2 bg-white h-8 w-8 rounded-sm' src="/instagram.svg" alt="" />
          <img className='m-2' src="socialMedia/twitter-icon.svg" alt="" />
          <img className='m-2' src="socialMedia/linkedin.svg" alt="" />
          <img className='m-2' src="socialMedia/youtube.svg" alt="" />
          <img className='m-2' src="socialMedia/watsapp.svg" alt="" />
        </div>

      </div>









      <hr className='mt-10 ml-10 mr-10 mb-2'/>

        <div className='flex justify-around'>
          <p>
           © 2025 PEMPAK. All Right Reserved
          </p>
          <p>
Privacy Policy
          </p>
          <p>
Terms & Conditions
          </p>
        </div>
    </footer>
  );
}
