import React from 'react';
import { FaWhatsapp, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#9C7A2D] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Brand name</h2>
          <p className="text-sm mb-4">
            Gravida massa volutpat aenean odio. Amet turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
          </p>
          <div className="flex space-x-4 text-xl mt-2">
            <FaWhatsapp className="hover:text-yellow-200 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-200 cursor-pointer" />
            <FaFacebookF className="hover:text-yellow-200 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-200 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Single item</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help & Info</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Track Your Order</a></li>
            <li><a href="#" className="hover:underline">Returns + Exchanges</a></li>
            <li><a href="#" className="hover:underline">Shipping + Delivery</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Find us easy</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">Do you have any questions or suggestions?</p>
          <p className="text-sm mb-2">
            <a href="mailto:contact@yourcompany.com" className="hover:underline">contact@yourcompany.com</a>
          </p>
          <p className="text-sm">Do you need support?<br />
            <a href="tel:+43720115278" className="hover:underline">+43 720 11 52 78</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm py-4 border-t border-white/30">
        © {new Date().getFullYear()} Shashank Chourasia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
