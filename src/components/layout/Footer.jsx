import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; // Add your logo image path here

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Genexcorp Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Genexcorp Logo" className="h-8 w-8 object-contain" />
              <h3 className="text-xl font-bold">Genexcorp</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Some believe in the power of numbers. Some believe in the power of technology.
              We believe in the power of people, power of human touch which brings best out of the best
              and the impact people can have on technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/trainings" className="text-gray-400 hover:text-white transition-colors">Trainings</Link></li>
              <li><Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">Jobs</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/product-development" className="text-gray-400 hover:text-white transition-colors">Product Development</Link></li>
              <li><Link to="/it-consulting" className="text-gray-400 hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link to="/it-resourcing" className="text-gray-400 hover:text-white transition-colors">IT Resourcing</Link></li>
              <li><Link to="/real-time-internship" className="text-gray-400 hover:text-white transition-colors">Internships</Link></li>
              <li><Link to="/corporate-training" className="text-gray-400 hover:text-white transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-red-900 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  VT Plaza, 4th Floor, KPHB Colony, Road # 1,<br />
                  Kukatpally, Hyderabad - 500085, Telangana, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-red-900" />
                <span className="text-gray-400">+91-9920779995</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-red-900" />
                <span className="text-gray-400">hr@genexcorp.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Genexcorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
