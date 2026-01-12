"use client";
import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const FormNavbar: React.FC = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#tools', label: 'Tools' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="bg-yellow-50 border-b border-yellow-200 py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center text-yellow-800">
          <span className="mr-2">⚠️</span>
          <span className="font-medium">
            DISCLAIMER: Results may vary based on project complexity. All case studies represent actual client outcomes. Services subject to availability and terms of service.
          </span>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
              >
                <Check className="w-4 h-4 mr-1 text-blue-600" />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default FormNavbar;