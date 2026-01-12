// components/WhyChooseUs.tsx
import React from 'react';
import { Award, Clock, Shield, DollarSign } from 'lucide-react';

interface Reason {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      id: 1,
      icon: <Award className="w-12 h-12" />,
      title: 'Certified Experts',
      description: 'QuickBooks ProAdvisor certified professionals with extensive real-world experience',
    },
    {
      id: 2,
      icon: <Clock className="w-12 h-12" />,
      title: '24/7 Availability',
      description: 'Round-the-clock support ensuring your business never stops due to technical issues',
    },
    {
      id: 3,
      icon: <Shield className="w-12 h-12" />,
      title: 'Data Security',
      description: 'Enterprise-grade security protocols protecting your sensitive financial information',
    },
    {
      id: 4,
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Cost Effective',
      description: 'Affordable pricing plans with no hidden fees and flexible payment options',
    },
  ];

  return (
    <section
      id="why-us"
      className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white relative overflow-hidden"
    >
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center hover:bg-white/20 transition duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{reason.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>

              {/* Description */}
              <p className="text-white/90">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;