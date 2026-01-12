import React from 'react';
import { Monitor, Cloud, Smartphone, CreditCard } from 'lucide-react';

interface Tool {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bgGradient: string;
  iconColor: string;
}

const ToolsTechnologies: React.FC = () => {
  const tools: Tool[] = [
    {
      id: 1,
      icon: <Monitor className="w-12 h-12" />,
      title: 'QuickBooks Desktop',
      subtitle: 'Pro, Premier, Enterprise',
      bgGradient: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 2,
      icon: <Cloud className="w-12 h-12" />,
      title: 'QuickBooks Online',
      subtitle: 'Simple, Essentials, Plus, Advanced',
      bgGradient: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 3,
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Apps',
      subtitle: 'iOS & Android Support',
      bgGradient: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 4,
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Payment Solutions',
      subtitle: 'QuickBooks Payments Integration',
      bgGradient: 'from-red-50 to-red-100',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tools &amp; Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`text-center p-6 bg-gradient-to-br ${tool.bgGradient} rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Icon */}
              <div className={`${tool.iconColor} mb-4 flex justify-center`}>
                {tool.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {tool.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600">{tool.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
