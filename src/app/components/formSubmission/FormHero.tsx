"use client";
import React from 'react';
import { Star, Calendar, RefreshCw } from 'lucide-react';

const FormHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Professional Form Submission Services
        </h1>

        {/* Subtitle */}
        <p className="text-2xl mb-8 text-white/90">
          Expert Data Processing &amp; Form Management Solutions
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <span className="ml-3 text-xl font-semibold">
            4.9/5 (2,847 reviews)
          </span>
        </div>

        {/* Publication Dates */}
        <div className="flex items-center justify-center space-x-6 mb-8 text-white/90">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>📅 Published: Dec 15, 2024</span>
          </div>
          <div className="flex items-center">
            <RefreshCw className="w-5 h-5 mr-2" />
            <span>🔄 Last Updated: Jan 6, 2026</span>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-white/95">
            Transform your data workflow with our comprehensive form submission 
            services. We specialize in accurate, secure, and efficient form processing 
            across multiple platforms and industries. Our expert team handles everything 
            from simple contact forms to complex multi-step applications, ensuring 99.8% 
            accuracy and lightning-fast turnaround times while maintaining the highest 
            security standards and compliance requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormHero;