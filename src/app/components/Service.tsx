"use client";
import React from 'react';
import {
  Download,
  Wrench,
  Receipt,
  Database,
  Shield,
  Users,
  RefreshCw,
  FileText,
  BarChart3,
} from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <Download className="w-10 h-10" />,
      title: 'Installation & Setup',
      description: 'Complete installation support for QuickBooks Desktop, Online, and Enterprise versions with custom configuration.',
      iconColor: 'text-green-600',
    },
    {
      id: 2,
      icon: <Wrench className="w-10 h-10" />,
      title: 'Technical Troubleshooting',
      description: 'Expert resolution of errors, crashes, data corruption, and performance issues across all QuickBooks products.',
      iconColor: 'text-blue-600',
    },
    {
      id: 3,
      icon: <Receipt className="w-10 h-10" />,
      title: 'Payroll Management',
      description: 'Complete payroll setup, tax calculation, direct deposit configuration, and compliance management support.',
      iconColor: 'text-purple-600',
    },
    {
      id: 4,
      icon: <Database className="w-10 h-10" />,
      title: 'Data Migration',
      description: 'Seamless data transfer between QuickBooks versions or from other accounting systems with zero data loss.',
      iconColor: 'text-red-600',
    },
    {
      id: 5,
      icon: <Shield className="w-10 h-10" />,
      title: 'Security & Backup',
      description: 'Data protection strategies, automated backup solutions, and security audit implementation.',
      iconColor: 'text-yellow-600',
    },
    {
      id: 6,
      icon: <Users className="w-10 h-10" />,
      title: 'Training & Consulting',
      description: 'Personalized training sessions and strategic consulting to maximize QuickBooks efficiency for your team.',
      iconColor: 'text-indigo-600',
    },
    {
      id: 7,
      icon: <RefreshCw className="w-10 h-10" />,
      title: 'Integration Support',
      description: 'Third-party app integration including payment processors, CRM systems, and e-commerce platforms.',
      iconColor: 'text-teal-600',
    },
    {
      id: 8,
      icon: <FileText className="w-10 h-10" />,
      title: 'Tax Compliance',
      description: 'Tax form generation, compliance monitoring, and preparation assistance for federal and state requirements.',
      iconColor: 'text-pink-600',
    },
    {
      id: 9,
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Report Customization',
      description: 'Custom financial reports, dashboard creation, and automated reporting workflows for better insights.',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`${service.iconColor} mb-4`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
