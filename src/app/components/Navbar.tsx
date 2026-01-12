// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Headphones } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
  isWarning?: boolean;
}

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#disclaimer', label: 'Disclaimer', isWarning: true },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Headphones className="text-3xl text-green-600 mr-3 w-8 h-8" />
            <span className="text-xl font-bold text-gray-800">
              QuickBooks Support USA
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition ${
                  link.isWarning
                    ? 'text-yellow-700 hover:text-yellow-800 font-medium'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;