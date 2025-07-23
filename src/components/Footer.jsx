import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">FoodiesHub</h2>
          <p className="text-sm mb-4">
            Discover delicious recipes, order your favorite meals, and enjoy the best food experience with FoodiesHub.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="/menu" className="hover:text-yellow-400 transition-colors">Menu</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            <li><a href="/order" className="hover:text-yellow-400 transition-colors">Order Online</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-yellow-400" />
              <span className="break-words">123 Food Street, City, Country</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-yellow-400" />
              <span className="break-words">+1 234 567 890</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-yellow-400" />
              <span className="break-words">support@foodieshub.com</span>
            </li>
          </ul>
        </div>
        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Opening Hours</h3>
          <ul className="space-y-2 text-sm">
            <li>Mon - Fri: 10:00 AM - 10:00 PM</li>
            <li>Sat - Sun: 11:00 AM - 11:00 PM</li>
            <li>Public Holidays: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400 px-2">
        &copy; {new Date().getFullYear()} FoodiesHub. All rights reserved.
      </div>
    </footer>
  );
}
