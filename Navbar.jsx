// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু স্টেট

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'বইয়ের ক্যাটালগ', path: '/catalog' },
    // আপনি চাইলে আরও লিঙ্ক যোগ করতে পারেন
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* লোগো/অ্যাপের নাম */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              📘 লাইব্রেরি ম্যানেজমেন্ট
            </Link>
          </div>

          {/* ডেস্কটপ মেনু */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md font-medium transition duration-150"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login">
              <Button variant="primary" className="ml-4">
                লগইন / অ্যাডমিন
              </Button>
            </Link>
          </div>

          {/* মোবাইল মেনু বাটন */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* আইকন টগল */}
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল মেনু কন্টেন্ট (isOpen স্টেট দ্বারা নিয়ন্ত্রিত) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" className="block w-full">
                <Button variant="primary" className="mt-2 w-full">
                    লগইন / অ্যাডমিন
                </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;