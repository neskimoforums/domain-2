import React from 'react';

interface StatisticsRow {
  year: string;
  activeUsers: string;
  supportRequests: string;
  topCounties: string;
  growthRate: string;
  isProjected?: boolean;
}

const StatisticsTable: React.FC = () => {
  const statisticsData: StatisticsRow[] = [
    {
      year: '2020',
      activeUsers: '4.5 Million',
      supportRequests: '1.2 Million',
      topCounties: 'Los Angeles, Cook, Harris',
      growthRate: '+8.2%',
    },
    {
      year: '2021',
      activeUsers: '5.1 Million',
      supportRequests: '1.5 Million',
      topCounties: 'Maricopa, San Diego, Orange',
      growthRate: '+13.3%',
    },
    {
      year: '2022',
      activeUsers: '6.2 Million',
      supportRequests: '1.9 Million',
      topCounties: 'Miami-Dade, Dallas, King',
      growthRate: '+21.6%',
    },
    {
      year: '2023',
      activeUsers: '7.8 Million',
      supportRequests: '2.4 Million',
      topCounties: 'Queens, Riverside, Clark',
      growthRate: '+25.8%',
    },
    {
      year: '2024',
      activeUsers: '9.5 Million',
      supportRequests: '3.1 Million',
      topCounties: 'San Bernardino, Wayne, Tarrant',
      growthRate: '+21.8%',
    },
    {
      year: '2025 (Projected)',
      activeUsers: '11.2 Million',
      supportRequests: '3.8 Million',
      topCounties: 'Bronx, Santa Clara, Alameda',
      growthRate: '+17.9%',
      isProjected: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            IT Support Demand Statistics (2020-2025)
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            QuickBooks support demand growth across USA counties and user base
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-xl rounded-xl">
          <table className="min-w-full bg-white">
            {/* Table Head */}
            <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Year</th>
                <th className="py-4 px-6 text-left font-semibold">
                  Active Users (USA)
                </th>
                <th className="py-4 px-6 text-left font-semibold">
                  Support Requests
                </th>
                <th className="py-4 px-6 text-left font-semibold">
                  Top Counties
                </th>
                <th className="py-4 px-6 text-left font-semibold">
                  Growth Rate
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {statisticsData.map((row, index) => (
                <tr
                  key={index}
                  className={`transition ${
                    row.isProjected
                      ? 'bg-green-50 hover:bg-green-100'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <td
                    className={`py-4 px-6 ${
                      row.isProjected ? 'font-bold' : 'font-semibold'
                    }`}
                  >
                    {row.year}
                  </td>
                  <td
                    className={`py-4 px-6 ${
                      row.isProjected ? 'font-bold' : ''
                    }`}
                  >
                    {row.activeUsers}
                  </td>
                  <td
                    className={`py-4 px-6 ${
                      row.isProjected ? 'font-bold' : ''
                    }`}
                  >
                    {row.supportRequests}
                  </td>
                  <td
                    className={`py-4 px-6 ${
                      row.isProjected ? 'font-bold' : ''
                    }`}
                  >
                    {row.topCounties}
                  </td>
                  <td
                    className={`py-4 px-6 text-green-600 ${
                      row.isProjected ? 'font-bold' : 'font-semibold'
                    }`}
                  >
                    {row.growthRate}
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

export default StatisticsTable;