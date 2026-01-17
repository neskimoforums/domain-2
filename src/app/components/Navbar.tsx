/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Headphones, Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  isWarning?: boolean;
}

type ServiceItem = {
  href: string;
  title: string;
  desc?: string;
};

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { href: "#why-us", label: "Why Us" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#faqs", label: "FAQs" },
    { href: "#disclaimer", label: "Disclaimer", isWarning: true },
  ];

  const services: ServiceItem[] = [
    { href: "/formSubmission", title: "Form Submission", },
  ];

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // When mobile menu closes, close mobile services too
  useEffect(() => {
    if (!isMobileOpen) setIsMobileServicesOpen(false);
  }, [isMobileOpen]);

  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={closeAllMenus}>
            <Headphones className="text-green-600 w-8 h-8" />
            <span className="text-lg sm:text-xl font-bold text-gray-800">
              QuickBooks Support USA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown (desktop) */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  {services.map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="block px-4 py-3 hover:bg-green-50 transition"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-semibold text-gray-900">{s.title}</div>
                      {s.desc ? <div className="text-sm text-gray-600">{s.desc}</div> : null}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition ${
                  link.isWarning
                    ? "text-yellow-700 hover:text-yellow-800 font-medium"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact button */}
            <Link
              href="/formSubmission"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/formSubmission"
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition text-sm"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileOpen((v) => !v)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-gray-100 pb-4 pt-3">
            {/* Services accordion (mobile) */}
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between px-2 py-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileServicesOpen && (
              <div className="mt-1 space-y-1">
                {services.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="block px-4 py-3 rounded-lg hover:bg-green-50 transition"
                    onClick={closeAllMenus}
                  >
                    <div className="font-semibold text-gray-900">{s.title}</div>
                    {s.desc ? <div className="text-sm text-gray-600">{s.desc}</div> : null}
                  </Link>
                ))}
              </div>
            )}

            {/* Other links (mobile) */}
            <div className="mt-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-2 py-3 rounded-lg transition hover:bg-gray-50 ${
                    link.isWarning
                      ? "text-yellow-700 font-medium"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  onClick={closeAllMenus}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Full width CTA (mobile) */}
            <Link
              href="/formSubmission"
              className="mt-3 block text-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              onClick={closeAllMenus}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
