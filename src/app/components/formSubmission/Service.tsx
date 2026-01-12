import React from 'react';
import { 
  FileText, 
  Zap, 
  Lock, 
  Link2, 
  BarChart3, 
  Shield 
} from 'lucide-react';

interface Service {
  id: number;
  emoji: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const FormServices: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      emoji: '📋',
      icon: <FileText className="w-8 h-8" />,
      title: 'Form Design & Development',
      description: 'Custom form creation with intuitive UI/UX, responsive design, and seamless functionality across all devices and platforms.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 2,
      emoji: '⚡',
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Form Processing',
      description: 'Real-time data validation, automated routing, instant notifications, and intelligent error handling for smooth operations.',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
    },
    {
      id: 3,
      emoji: '🔒',
      icon: <Lock className="w-8 h-8" />,
      title: 'Secure Data Management',
      description: 'End-to-end encryption, GDPR/HIPAA compliance, secure storage solutions, and comprehensive audit trails.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      id: 4,
      emoji: '🔗',
      icon: <Link2 className="w-8 h-8" />,
      title: 'API Integration',
      description: 'Seamless connection with CRM systems, databases, email platforms, payment gateways, and third-party services.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 5,
      emoji: '📊',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Analytics & Reporting',
      description: 'Advanced analytics dashboards, submission tracking, conversion optimization insights, and custom reporting.',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      id: 6,
      emoji: '🛡️',
      icon: <Shield className="w-8 h-8" />,
      title: 'Spam Prevention',
      description: 'CAPTCHA implementation, bot detection, IP filtering, honeypot fields, and advanced fraud prevention measures.',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2`}
            >          
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{service.emoji}</span>
                <div className={service.iconColor}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormServices;