import React from 'react';
import Button from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About GenexCorp</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're on a mission to transform businesses through innovative
            technology solutions while nurturing the next generation of IT professionals.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, GenexCorp began with a simple vision: to bridge the gap between business needs and technology solutions while addressing the growing talent shortage in the IT industry.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small consulting firm has grown into a comprehensive technology partner offering product development, IT consulting, and talent solutions to businesses across multiple industries.
            </p>
            <p className="text-gray-700">
              Today, we're proud to have worked with over 200 clients ranging from startups to Fortune 500 companies, while also helping thousands of individuals launch and advance their careers in technology.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're driven by a clear purpose and ambitious goals for the future of technology and talent development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[{
              title: 'Our Mission',
              content: `To deliver innovative technology solutions that drive business growth while creating opportunities for the next generation of IT professionals through education, mentorship, and real-world experience.`,
              points: [
                'Create business value through technology',
                'Develop IT talent through practical training',
                'Build lasting partnerships with clients',
                'Foster a culture of innovation and learning',
              ],
            },
            {
              title: 'Our Vision',
              content: `To be the leading technology partner known for delivering exceptional solutions and producing the most sought-after talent in the industry, ultimately creating a positive impact on businesses and careers around the world.`,
              points: [
                'Set new standards for IT service delivery',
                'Bridge the global tech talent gap',
                'Create a diverse and inclusive tech workforce',
                'Become the most trusted technology partner',
              ],
            }].map((section, i) => (
              <Card key={i}>
                <CardBody className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#800000]">{section.title}</h3>
                  <p className="text-gray-700 mb-6">{section.content}</p>
                  <ul className="space-y-2">
                    {section.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-[#800000] rounded-full p-1 mr-3 mt-1">
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions to how we train talent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', color: 'bg-rose-100 text-rose-600', desc: 'We embrace new ideas, technologies, and approaches to solve complex problems and create better solutions.' },
              { title: 'Excellence', color: 'bg-green-100 text-green-600', desc: 'We strive for the highest quality in everything we do, constantly improving our processes and outcomes.' },
              { title: 'Integrity', color: 'bg-purple-100 text-purple-600', desc: 'We build trust through honest communication, ethical behavior, and delivering on our commitments.' },
              { title: 'Collaboration', color: 'bg-yellow-100 text-yellow-600', desc: 'We believe in the power of teamwork, partnering with clients and colleagues to achieve shared goals.' },
              { title: 'Empowerment', color: 'bg-red-100 text-red-600', desc: 'We invest in people, providing the knowledge, tools, and opportunities they need to succeed.' },
              { title: 'Adaptability', color: 'bg-teal-100 text-teal-600', desc: 'We embrace change, remaining flexible and responsive to evolving technology trends and client needs.' },
            ].map((val, i) => (
              <Card key={i} hoverable className="text-center">
                <CardBody className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`${val.color} p-4 rounded-full`}>
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our strategy and operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Chen',
                role: 'Chief Executive Officer',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
                bio: 'Michael brings over 20 years of experience in technology leadership, having previously held executive positions at major tech companies.',
              },
              {
                name: 'Sarah Johnson',
                role: 'Chief Technology Officer',
                image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
                bio: 'With a background in software architecture and AI, Sarah leads our technology strategy and innovation initiatives.',
              },
              {
                name: 'David Rodriguez',
                role: 'Chief Operating Officer',
                image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
                bio: 'David oversees business operations, ensuring efficiency, scalability, and customer satisfaction across all departments.',
              },
            ].map((person, i) => (
              <Card key={i}>
                <CardBody className="text-center p-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="text-sm text-[#800000] font-medium">{person.role}</p>
                  <p className="text-gray-600 mt-2">{person.bio}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
