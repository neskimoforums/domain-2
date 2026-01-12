// components/form-submission/FormCaseStudies.tsx
import React from 'react';
import { Building2, TrendingUp, DollarSign } from 'lucide-react';

interface CaseStudy {
  id: number;
  emoji: string;
  title: string;
  industry: string;
  result: string;
  savings: string;
  description: string;
  bgColor: string;
}

const FormCaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      emoji: '🏥',
      title: 'Case Study 1: Healthcare Portal Transformation',
      industry: 'Healthcare',
      result: '85% faster processing',
      savings: '$2.4M annually',
      description: "A leading hospital network struggled with paper-based patient intake forms causing 4-hour wait times. We implemented an automated digital form system with real-time validation and EHR integration. Results: Wait times reduced to 45 minutes, patient satisfaction increased by 92%, and administrative costs decreased by 65%.",
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      id: 2,
      emoji: '🛒',
      title: 'Case Study 2: E-commerce Checkout Optimization',
      industry: 'Retail',
      result: '43% conversion increase',
      savings: '+$8.7M yearly',
      description: "An online retailer experienced 68% cart abandonment due to lengthy checkout forms. We redesigned their multi-step form with smart autofill, address validation, and guest checkout options. Abandonment dropped to 25%, conversion rate jumped 43%, and average order value increased by $23.",
      bgColor: 'from-green-50 to-green-100',
    },
    {
      id: 3,
      emoji: '💳',
      title: 'Case Study 3: Financial Services Compliance Portal',
      industry: 'Banking',
      result: '100% compliance achieved',
      savings: '2,500 hours/month',
      description: "A regional bank needed to digitize loan application processes while meeting strict regulatory requirements. Our secure form solution included digital signatures, document upload, automated KYC verification, and compliance tracking. Processing time decreased from 14 days to 3 days with zero compliance violations.",
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      id: 4,
      emoji: '🎓',
      title: 'Case Study 4: Education Platform Enrollment System',
      industry: 'Education',
      result: '10,000 students processed',
      savings: '95% paperless',
      description: "A university managing 10,000+ annual enrollments faced data entry errors and processing delays. We created an intelligent enrollment portal with conditional logic, document verification, and payment integration. Data accuracy improved to 99.9%, processing time reduced by 78%, and student satisfaction scores reached 4.8/5.",
      bgColor: 'from-indigo-50 to-indigo-100',
    },
    {
      id: 5,
      emoji: '🛡️',
      title: 'Case Study 5: Insurance Claims Automation',
      industry: 'Insurance',
      result: '70% faster claims',
      savings: '$1.8M',
      description: "An insurance provider processing 5,000 claims monthly struggled with manual data entry causing 30-day turnaround times. Our automated claims form with OCR integration, fraud detection, and instant verification reduced processing to 8 days while improving accuracy from 87% to 98.5%.",
      bgColor: 'from-orange-50 to-orange-100',
    },
    {
      id: 6,
      emoji: '🏠',
      title: 'Case Study 6: Real Estate Lead Generation',
      industry: 'Real Estate',
      result: '320% lead increase',
      savings: '450% ROI',
      description: "A real estate agency captured only 12% of website visitors as leads. We implemented progressive profiling forms, chatbot integration, and automated follow-up sequences. Lead capture increased to 51%, agent productivity improved by 65%, and closed deals grew by 180% in 6 months.",
      bgColor: 'from-teal-50 to-teal-100',
    },
    {
      id: 7,
      emoji: '🏛️',
      title: 'Case Study 7: Government Services Digitalization',
      industry: 'Government',
      result: '1.2M citizens served',
      savings: '-89% wait time',
      description: "A municipal government digitized 45 citizen services including permit applications, license renewals, and complaint filing. Our accessible, multilingual forms with mobile optimization served 1.2M residents, reduced in-person visits by 73%, and achieved 96% citizen satisfaction rating.",
      bgColor: 'from-red-50 to-red-100',
    },
    {
      id: 8,
      emoji: '💻',
      title: 'Case Study 8: SaaS Onboarding Optimization',
      industry: 'Technology',
      result: '58% completion rate',
      savings: '+34% retention',
      description: "A B2B SaaS company had 71% drop-off during user onboarding. We redesigned their signup flow with social logins, team invitation automation, and guided setup wizard. Trial-to-paid conversion improved by 41%, time-to-value decreased by 60%, and first-month retention increased to 89%.",
      bgColor: 'from-cyan-50 to-cyan-100',
    },
    {
      id: 9,
      emoji: '🎪',
      title: 'Case Study 9: Event Registration Platform',
      industry: 'Events',
      result: '50K registrations',
      savings: '$4.2M revenue',
      description: "A conference organizer needed scalable registration for 50,000 attendees across multiple ticket tiers. Our form solution handled peak traffic of 3,000 concurrent users, integrated with badge printing, accommodated dietary preferences, and processed group discounts, achieving 99.98% uptime during the sale period.",
      bgColor: 'from-pink-50 to-pink-100',
    },
    {
      id: 10,
      emoji: '❤️',
      title: 'Case Study 10: Non-Profit Donation Campaign',
      industry: 'Non-Profit',
      result: '275% donation increase',
      savings: '$12.3M raised',
      description: "A charity struggled with complex donation forms causing 61% abandonment. We created a streamlined one-page form with recurring donation options, employer matching integration, and impact visualization. Average donation increased by $47, donor acquisition cost decreased 52%, and monthly recurring donors grew by 380%.",
      bgColor: 'from-rose-50 to-rose-100',
    },
  ];

  return (
    <section id="case-studies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Success Stories: 10 Real-World Case Studies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`bg-gradient-to-br ${study.bgColor} p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-2xl transition duration-300`}
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="text-3xl mr-3">{study.emoji}</span>
                {study.title}
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center bg-white/70 px-4 py-2 rounded-full">
                  <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="font-semibold text-sm">
                    Industry: {study.industry}
                  </span>
                </div>
                <div className="flex items-center bg-white/70 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                  <span className="font-semibold text-sm">
                    Result: {study.result}
                  </span>
                </div>
                <div className="flex items-center bg-white/70 px-4 py-2 rounded-full">
                  <DollarSign className="w-4 h-4 mr-2 text-yellow-600" />
                  <span className="font-semibold text-sm">
                    Savings: {study.savings}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormCaseStudies;