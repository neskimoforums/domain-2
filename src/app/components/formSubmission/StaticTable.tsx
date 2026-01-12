import React from 'react';

interface StatRow {
  year: string;
  totalSubmissions: string;
  growthRate: string;
  topUseCase: string;
  avgResponseTime: string;
}

const FormStatistics: React.FC = () => {
  const statistics: StatRow[] = [
    {
      year: '2021',
      totalSubmissions: '45.2M',
      growthRate: '+18%',
      topUseCase: 'Customer Support',
      avgResponseTime: '2.3 seconds',
    },
    {
      year: '2022',
      totalSubmissions: '58.7M',
      growthRate: '+30%',
      topUseCase: 'Lead Generation',
      avgResponseTime: '1.8 seconds',
    },
    {
      year: '2023',
      totalSubmissions: '76.3M',
      growthRate: '+30%',
      topUseCase: 'E-commerce Checkout',
      avgResponseTime: '1.4 seconds',
    },
    {
      year: '2024',
      totalSubmissions: '102.8M',
      growthRate: '+35%',
      topUseCase: 'Registration Forms',
      avgResponseTime: '1.1 seconds',
    },
    {
      year: '2025',
      totalSubmissions: '145.6M',
      growthRate: '+42%',
      topUseCase: 'Mobile Applications',
      avgResponseTime: '0.8 seconds',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Form Submission Demand: Last 5 Years Analysis
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

      
        <div className="overflow-x-auto shadow-2xl rounded-xl">
          <table className="min-w-full bg-white">
          
            <thead className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold text-base">
                  Year
                </th>
                <th className="py-4 px-6 text-left font-semibold text-base">
                  Total Submissions
                </th>
                <th className="py-4 px-6 text-left font-semibold text-base">
                  Growth Rate
                </th>
                <th className="py-4 px-6 text-left font-semibold text-base">
                  Top Use Case
                </th>
                <th className="py-4 px-6 text-left font-semibold text-base">
                  Average Response Time
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {statistics.map((row, index) => (
                <tr
                  key={row.year}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {row.year}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {row.totalSubmissions}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {row.growthRate}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {row.topUseCase}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {row.avgResponseTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FormStatistics;