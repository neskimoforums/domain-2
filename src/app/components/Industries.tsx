"use client";
import React from 'react';
import {
  Store,
  Utensils,
  HardHat,
  Briefcase,
  Truck,
  Heart,
  Home,
  Factory,
  ShoppingCart,
  ClipboardList,
  Wrench,
  Package,
} from 'lucide-react';

interface Industry {
  id: number;
  icon: React.ReactNode;
  name: string;
  iconColor: string;
}

const IndustriesWeServe: React.FC = () => {
  const industries: Industry[] = [
    {
      id: 1,
      icon: <Store className="w-8 h-8" />,
      name: 'Retail',
      iconColor: 'text-green-600',
    },
    {
      id: 2,
      icon: <Utensils className="w-8 h-8" />,
      name: 'Restaurant',
      iconColor: 'text-red-600',
    },
    {
      id: 3,
      icon: <HardHat className="w-8 h-8" />,
      name: 'Construction',
      iconColor: 'text-yellow-600',
    },
    {
      id: 4,
      icon: <Briefcase className="w-8 h-8" />,
      name: 'Professional Services',
      iconColor: 'text-blue-600',
    },
    {
      id: 5,
      icon: <Truck className="w-8 h-8" />,
      name: 'Transportation',
      iconColor: 'text-purple-600',
    },
    {
      id: 6,
      icon: <Heart className="w-8 h-8" />,
      name: 'Healthcare',
      iconColor: 'text-pink-600',
    },
    {
      id: 7,
      icon: <Home className="w-8 h-8" />,
      name: 'Real Estate',
      iconColor: 'text-indigo-600',
    },
    {
      id: 8,
      icon: <Factory className="w-8 h-8" />,
      name: 'Manufacturing',
      iconColor: 'text-gray-600',
    },
    {
      id: 9,
      icon: <ShoppingCart className="w-8 h-8" />,
      name: 'E-commerce',
      iconColor: 'text-teal-600',
    },
    {
      id: 10,
      icon: <ClipboardList className="w-8 h-8" />,
      name: 'Non-Profit',
      iconColor: 'text-orange-600',
    },
    {
      id: 11,
      icon: <Wrench className="w-8 h-8" />,
      name: 'Field Services',
      iconColor: 'text-red-500',
    },
    {
      id: 12,
      icon: <Package className="w-8 h-8" />,
      name: 'Wholesale',
      iconColor: 'text-green-500',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white p-6 rounded-lg text-center shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`${industry.iconColor} mb-3 flex justify-center`}>
                {industry.icon}
              </div>

              {/* Name */}
              <p className="font-semibold text-gray-900">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
