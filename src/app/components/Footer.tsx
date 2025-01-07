"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing during SSR
  }
  
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              HK Essentials offers natural and handmade skincare products. Our mission is to provide the best quality for your beauty needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/returns" className="hover:underline">Return Policy</Link></li>
              <li><Link href="/shipping" className="hover:underline">Shipping Info</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: infohkmenntor@gmail.com</p>
            <p className="text-sm">Phone: +92-XXX-XXXXXXX</p>
            <p className="text-sm">Address: Karachi, Pakistan</p>
            <div className="mt-4">
              <Link href="https://www.instagram.com/hooria_codehub/" target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-gray-100 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61553411646244&ref=xav_ig_profile_web" target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-gray-100 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2024 HK Essentials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
