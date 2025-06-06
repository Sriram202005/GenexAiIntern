import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
// import Enrollment from "./Enrollment";
import { FunctionalConsulting,TechnicalConsulting } from '../components/Consulting';

const CorporateTrainingPage = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/enrollment");
  };

  return (
    <div className="mt-16">
      {/* Header Sectiosn */}
      <section className="bg-red-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Training Programs</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Develop your skills or upskill your team with our comprehensive training programs designed to meet the evolving demands of the IT industry.
        </p>
      </section>

      {/* Upcoming Batches */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">Upcoming Batches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              date: "16th Jan, 2024 - 24th Jan, 2024",
              type: "Virtual Class",
              seats: "10 seats available",
            },
            {
              date: "02nd Mar, 2024 - 10th Mar, 2024",
              type: "Virtual Class",
              seats: "8 seats available",
            },
            {
              date: "25th Mar, 2024 - 30th Mar, 2024",
              type: "Classroom Training",
              seats: "15 seats available",
            },
            {
              date: "01st June, 2024 - 05th June, 2024",
              type: "Classroom Training",
              seats: "12 seats available",
            },
          ].map((batch, index) => (
            <div
              key={index}
              className="p-5 rounded-xl shadow hover:shadow-lg border border-red-200 flex flex-col justify-between relative"
            >
              <div className="absolute top-4 right-4 text-sm font-semibold text-green-600">
                Open
              </div>
              <div className="space-y-1 pt-4">
                <p className="text-gray-700">{batch.date}</p>
                <p className="text-sm text-gray-600">{batch.type}</p>
                <p className="text-sm text-gray-600">{batch.seats}</p>
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  className="bg-red-900 text-white hover:bg-red-800"
                  onClick={handleEnrollClick}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Packages */}
      <section className="space-y-8 px-6 py-10">
        <h2 className="text-2xl font-semibold text-red-800">Training Packages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Web Class */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-red-700">Web Class</h3>
            <p className="text-2xl font-bold text-red-800">$800 / person</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Live online sessions</li>
              <li>Course materials included</li>
              <li>24/7 support</li>
            </ul>
            <Button className="bg-red-900 text-white hover:bg-red-800 mt-4">
              Get Started
            </Button>
          </div>

          {/* Classroom Training */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-red-700">Classroom Training</h3>
            <p className="text-gray-800">
              <span className="font-bold text-red-800">$1500</span> for batch of 5
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-red-800">$2500</span> for batch of 10
            </p>
            <p className="text-sm text-gray-600 italic">
              *To avail discount contact our sales team
            </p>
            <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-100">
              Contact Sales
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button variant="default" className="bg-red-900 text-white px-6 hover:bg-red-800">
            Request Training Consultation
          </Button>
        </div>
      </section>

      {/* Success Stories */}
      <section className="space-y-10 px-6 py-10">
        <h2 className="text-3xl font-semibold text-center text-red-800">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
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
          ].map((story, idx) => (
            <div key={idx} className="bg-amber-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg">{story.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{story.role}</p>
              <p className="text-gray-700 italic">"{story.quote}"</p>
            </div>
          ))}
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
          <TechnicalConsulting/>
          <FunctionalConsulting/>
    </div>
  );
};

export default CorporateTrainingPage;
