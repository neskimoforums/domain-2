"use client";
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "MedHealth Solutions",
    avatar: "SJ",
    rating: 5,
    text: "Transformed our patient intake process completely. Processing time dropped from hours to minutes. The ROI was evident within the first month!"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "VP Operations",
    company: "RetailMax",
    avatar: "MR",
    rating: 5,
    text: "Our checkout conversion increased by 43%! The team's expertise in form optimization is unmatched. Best investment we made this year."
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Director of IT",
    company: "First National Bank",
    avatar: "EW",
    rating: 5,
    text: "Security and compliance were our top concerns. They delivered a solution that exceeded all regulatory requirements while improving user experience."
  },
  {
    id: 4,
    name: "David Kim",
    role: "Registrar",
    company: "State University",
    avatar: "DK",
    rating: 5,
    text: "Handling 10,000+ student enrollments became seamless. The automated validation saved our team countless hours and eliminated errors completely."
  },
  {
    id: 5,
    name: "Lisa Chen",
    role: "Claims Manager",
    company: "SecureLife Insurance",
    avatar: "LC",
    rating: 5,
    text: "Claims processing time reduced by 70%. Customer satisfaction is at an all-time high. The fraud detection features are incredibly sophisticated."
  },
  {
    id: 6,
    name: "James Thompson",
    role: "CEO",
    company: "Prime Properties Group",
    avatar: "JT",
    rating: 5,
    text: "Lead capture jumped from 12% to 51%! Our agents are closing deals faster than ever. This system paid for itself in the first quarter."
  },
  {
    id: 7,
    name: "Amanda Peterson",
    role: "Digital Services Director",
    company: "City Hall",
    avatar: "AP",
    rating: 5,
    text: "Citizen satisfaction increased to 96%. The multilingual support and accessibility features make government services truly inclusive."
  },
  {
    id: 8,
    name: "Robert Green",
    role: "Product Lead",
    company: "CloudTech SaaS",
    avatar: "RG",
    rating: 5,
    text: "Onboarding completion rate went from 29% to 58%. Our trial-to-paid conversion improved by 41%. These results speak for themselves."
  },
  {
    id: 9,
    name: "Nina Kumar",
    role: "Event Director",
    company: "Global Summit",
    avatar: "NK",
    rating: 5,
    text: "50,000 registrations processed flawlessly! The system handled peak traffic without a single hiccup. Absolutely reliable and professional."
  },
  {
    id: 10,
    name: "Thomas Bradley",
    role: "Executive Director",
    company: "Hope Foundation",
    avatar: "TB",
    rating: 5,
    text: "Donations increased by 275%! The streamlined form made giving effortless. We raised $12.3M and gained thousands of recurring donors."
  }
];

const TestimonialsSection: React.FC = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-12"></div>
        
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="text-yellow-400 text-4xl">
            ★★★★★
          </div>
          <div className="text-left">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              4.9/5
            </div>
            <div className="text-gray-600">Based on 2,847 reviews</div>
          </div>
        </div>

        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-rtl hover:pause">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[380px] mx-4"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100 hover:-translate-y-1">
                  {/* Client Info */}
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                 
                  <div className="text-yellow-400 text-xl mb-4">
                    {'★'.repeat(testimonial.rating)}
                  </div>

                 
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 60s linear infinite;
        }

        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;