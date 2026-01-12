import React from 'react';
import { Check } from 'lucide-react';

interface Industry {
  id: number;
  name: string;
}

const FormIndustries: React.FC = () => {
  const industriesColumn1: Industry[] = [
    { id: 1, name: 'Healthcare & Medical Services' },
    { id: 2, name: 'Financial Services & Banking' },
    { id: 3, name: 'E-commerce & Retail' },
    { id: 4, name: 'Education & E-Learning' },
    { id: 5, name: 'Real Estate' },
    { id: 6, name: 'Insurance' },
  ];

  const industriesColumn2: Industry[] = [
    { id: 7, name: 'Legal Services' },
    { id: 8, name: 'Government & Public Sector' },
    { id: 9, name: 'Hospitality & Travel' },
    { id: 10, name: 'Technology & SaaS' },
    { id: 11, name: 'Manufacturing' },
    { id: 12, name: 'Non-Profit Organizations' },
  ];

  return (

    <section id="industries" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
          {/* Column 1 */}
          <div className="space-y-6">
            {industriesColumn1.map((industry) => (
              <div
                key={industry.id}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition duration-200"
              >
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-lg font-medium">{industry.name}</span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {industriesColumn2.map((industry) => (
              <div
                key={industry.id}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition duration-200"
              >
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-lg font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>

  );
};

export default FormIndustries;