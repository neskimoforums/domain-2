import React from 'react';
import FormNavbar from '../components/formSubmission/FormNavbar';
import FormHero from '../components/formSubmission/FormHero';
import Services from "../components/Service"
import Industry from "../components/formSubmission/FormIndustry"
import StaticTable from '../components/formSubmission/StaticTable';
import FormWhyChoose from '../components/formSubmission/WhyChoose';
import FormCaseStudies from '../components/formSubmission/CaseStudies';
import Testimonial from "../components/formSubmission/Testimonials"
interface Tool {
  id: number;
  name: string;
}

export default function FormSubmissionPage() {

      const tools: Tool[] = [
    { id: 1, name: 'HTML5 & CSS3' },
    { id: 2, name: 'JavaScript/React' },
    { id: 3, name: 'Node.js' },
    { id: 4, name: 'PHP/Laravel' },
    { id: 5, name: 'Python/Django' },
    { id: 6, name: 'MySQL/PostgreSQL' },
    { id: 7, name: 'MongoDB' },
    { id: 8, name: 'AWS/Azure' },
    { id: 9, name: 'Salesforce' },
    { id: 10, name: 'HubSpot' },
    { id: 11, name: 'Google Forms API' },
    { id: 12, name: 'Zapier' },
    { id: 13, name: 'Webhook Integration' },
    { id: 14, name: 'REST APIs' },
  ];

  return (
    <main className="min-h-screen bg-blue-950">
      <FormNavbar />
      <FormHero />
  
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            What We Do: Our Role in Form Submission
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">Role:</span> We serve as 
            your dedicated form processing partner, managing the entire lifecycle 
            of data submission from capture to storage.{' '}
            <span className="font-bold text-gray-900">Responsibility:</span> Ensuring 
            accurate data entry, validation, security compliance, and seamless 
            integration with your existing systems.{' '}
            <span className="font-bold text-gray-900">Skills:</span> Advanced data 
            validation, API integration, database management, automated workflow 
            design, security compliance, and quality assurance testing.
          </p>
        </div>
      </div>
    </section>
    <Services />
    <section id="tools" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Tools &amp; Technologies We Master
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Industry />
    <StaticTable />
    <FormWhyChoose />
    <FormCaseStudies />
    <Testimonial />

  
    </main>
  );
}



