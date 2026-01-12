
import React from 'react';
import Link from 'next/link';
import { Phone, TrendingUp, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-float">
            {/* Publication Date Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 inline-block mb-4">
              <span className="text-sm font-semibold">
                Published: January 6, 2026 | Last Updated: January 6, 2026
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How Do I Contact QuickBooks Customer Support in the USA?
            </h1>

            {/* Description */}
            <p className="text-lg mb-4 text-gray-100">
              Need immediate QuickBooks assistance? Our certified support team 
              provides comprehensive solutions for all QuickBooks products across 
              the United States. From installation troubleshooting to complex 
              accounting queries, we deliver expert guidance 24/7. With over 15 
              years of experience serving 10,000+ businesses, we ensure rapid 
              resolution of technical, payroll, and financial management challenges. 
              Contact us today for personalized support tailored to your business needs.
            </p>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-semibold">4.9/5.0</span>
              </div>
              <div className="border-l border-white/30 pl-6">
                <span className="font-bold text-2xl">8,547</span>
                <span className="text-sm block text-gray-200">Verified Reviews</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
              >
                Get Support Now
              </Link>
              <Link
                href="tel:1-800-QUICKBOOKS"
                className="bg-green-500/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <TrendingUp className="w-16 h-16 text-white mb-4 mx-auto" />
                <h3 className="text-2xl font-bold">Trusted Support</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-sm text-gray-200">Businesses Served</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-gray-200">Available</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-gray-200">Resolution Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;