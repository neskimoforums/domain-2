import React from 'react';
import { Shield, ListChecks, GraduationCap } from 'lucide-react';

interface ServiceCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgGradient: string;
  iconBg: string;
}

const WhatWeDo: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: 1,
      icon: <Shield className="text-white w-7 h-7" />,
      title: 'Role',
      description: 'Certified QuickBooks support specialists providing expert guidance and solutions for all your accounting software needs nationwide.',
      bgGradient: 'from-green-50 to-green-100',
      iconBg: 'bg-green-600',
    },
    {
      id: 2,
      icon: <ListChecks className="text-white w-7 h-7" />,
      title: 'Responsibility',
      description: 'Ensuring 24/7 availability, rapid issue resolution, data security, compliance management, and continuous system optimization for your business.',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-600',
    },
    {
      id: 3,
      icon: <GraduationCap className="text-white w-7 h-7" />,
      title: 'Skills',
      description: 'Advanced accounting knowledge, technical troubleshooting, tax compliance expertise, payroll management, and exceptional customer service skills.',
      bgGradient: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-600',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our role is to serve as your dedicated QuickBooks support partner across 
            the United States. We take responsibility for resolving all technical, 
            functional, and operational challenges related to QuickBooks products. 
            Our certified professionals possess deep expertise in accounting software, 
            tax compliance, payroll processing, and financial reporting, ensuring your 
            business runs smoothly without disruption.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300`}
            >
              {/* Icon Circle */}
              <div className={`${service.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
