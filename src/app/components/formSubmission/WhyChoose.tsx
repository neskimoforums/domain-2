import React from 'react';
import { 
  Target, 
  Zap, 
  Lock, 
  DollarSign, 
  TrendingUp, 
  Clock 
} from 'lucide-react';

interface Reason {
  id: number;
  emoji: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FormWhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      id: 1,
      emoji: '🎯',
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: '99.8% Accuracy Rate',
      description: 'Industry-leading precision in data capture and validation with multi-layer verification processes.',
    },
    {
      id: 2,
      emoji: '⚡',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Lightning Fast Processing',
      description: 'Average submission processing time under 1 second with real-time data synchronization.',
    },
    {
      id: 3,
      emoji: '🔒',
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption, compliance certifications, and regular security audits ensure your data stays protected.',
    },
    {
      id: 4,
      emoji: '💰',
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: 'Cost-Effective Solutions',
      description: 'Reduce operational costs by up to 60% with our automated form processing systems.',
    },
    {
      id: 5,
      emoji: '📈',
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Scalable Infrastructure',
      description: 'Handle from 100 to 10 million submissions monthly without performance degradation.',
    },
    {
      id: 6,
      emoji: '🌐',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with average response time under 15 minutes.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Why Choose Our Form Submission Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{reason.emoji}</span>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormWhyChooseUs;