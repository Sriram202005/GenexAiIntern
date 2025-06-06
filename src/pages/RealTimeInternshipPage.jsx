import React from "react";
import Button from '@/components/ui/Button';
import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';

// Import icons from react-icons
import { FiGlobe, FiCloud, FiSmartphone, FiSettings } from 'react-icons/fi';
import { BiBarChartAlt2, BiNetworkChart } from 'react-icons/bi';

const projectCategories = [
  { name: "Web Application Development", Icon: FiGlobe },
  { name: "Data Analytics Solutions", Icon: BiBarChartAlt2 },
  { name: "Cloud Migration Projects", Icon: FiCloud },
  { name: "Mobile Application Development", Icon: FiSmartphone },
  { name: "Enterprise Software Integration", Icon: BiNetworkChart },
  { name: "DevOps Implementation", Icon: FiSettings },
];

const RealTimeInternshipPage = () => {
  return (
    <div className="mt-16">
      {/* Header */}
      <section className="bg-red-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-5">Experience Real-World Projects</h1>
        <p className="text-lg max-w-3xl mx-auto">
         Our Real-Time Internship program places you directly on client projects under expert supervision. This unique opportunity allows you to gain valuable industry experience while contributing to actual business solutions.
        </p>
        <p className="text-lg max-w-3xl mx-auto">
         Real project experience is the most valuable credential for new IT professionals. Our program provides exactly that, with 100% of interns working on actual client deliverables.
        </p>
      </section>

      {/* Real-World Projects Section */}
      <section className="p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl  mb-6  font-semibold text-red-900">Program Benefits:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-base">
            <li>✅ Work on actual client projects with real deliverables</li>
            <li>✅ Collaborate in cross-functional teams</li>
            <li>✅ One-on-one mentorship from project leaders</li>
            <li>✅ Stipend based on performance and project contribution</li>
            <li>✅ High potential for full-time employment upon completion</li>
          </ul>
        </div>
      </section>

      {/* Project Categories */}
      <section className="mt-10 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-red-800 mb-8">Project Categories</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          {projectCategories.map(({ name, Icon }, index) => (
            <div
              key={index}
              className="flex items-center p-5 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer bg-white"
            >
              <Icon className="text-red-900 mr-4 w-10 h-10" />
              <span className="text-lg font-medium">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="mt-5 bg-white p-6 space-y-4">
        <h2 className="text-2xl  mb-6  font-semibold text-red-900">Eligibility Criteria</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Completion of basic training in relevant technology</li>
          <li>Strong problem-solving skills and aptitude</li>
          <li>Commitment to a minimum 3-month program duration</li>
          <li>Successful completion of technical assessment</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="space-y-10 px-6 py-10">
        <h2 className="text-3xl font-semibold text-center text-red-800">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, idx) => {
            const stories = [
              {
                name: "Sarah Johnson",
                role: "Software Developer, TechStream Inc.",
                quote:
                  "The Full Stack Development program completely transformed my career. Within two months of completing the internship, I received multiple job offers and am now working at my dream company.",
              },
              {
                name: "Michael Chen",
                role: "Data Analyst, Analytics Pro",
                quote:
                  "The Real-Time Internship gave me experience that no bootcamp or university course could. Working on actual client projects with senior mentors accelerated my learning curve tremendously.",
              },
              {
                name: "Jennifer Torres",
                role: "IT Director, Global Solutions Ltd.",
                quote:
                  "We invested in GenexCorp's corporate training for our entire IT department. The customized program addressed our specific needs and significantly improved our team's productivity.",
              },
            ];
            const story = stories[idx];
            return (
              <div key={idx} className="bg-amber-50 p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{story.role}</p>
                <p className="text-gray-700 italic">"{story.quote}"</p>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* CTA Buttons */}
      <section className="text-center space-y-4 py-10 rounded-lg">
        <h2 className="text-2xl font-semibold text-red-900">Ready to Get Started?</h2>
        <p className="text-gray-700">
          Whether you're looking to start a career in IT, gain real-world experience, or upskill your team, we have a program for you.
        </p>
        <div className="flex justify-center flex-col sm:flex-row gap-6 mt-4">
          <Button className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-800">
            Apply for Internship
          </Button>
          <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-200">
            Request Corporate Training
          </Button>
        </div>
      </section>

      <TechnicalConsulting />
      <FunctionalConsulting />
    </div>
  );
};

export default RealTimeInternshipPage;
