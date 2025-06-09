'use client'
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">RoamRoute</h3>
            <p className="text-gray-400">
              Find and book your perfect trip with hotels, flights, and car rentals all in one place.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/" className="hover:text-primary transition-colors">Careers</Link>
            <Link href="/" className="hover:text-primary transition-colors">Press Center</Link>
            <Link href="/" className="hover:text-primary transition-colors">Sustainability</Link>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-400">
              <Link href ="/" className="hover:text-primary transition-colors">Support Center</Link>
              <Link href ="/" className="hover:text-primary transition-colors">Cancellation Options</Link>
              <Link href ="/" className="hover:text-primary transition-colors">Safety Resource Center</Link>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@roamroute.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Travel Street, Global City</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} RoamRoute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer