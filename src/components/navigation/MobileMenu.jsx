import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MobileMenu = ({ isOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingsOpen, setTrainingsOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  const location = useLocation();

  // Close all dropdowns when menu closes
  useEffect(() => {
    if (!isOpen) {
      setHomeOpen(false);
      setServicesOpen(false);
      setTrainingsOpen(false);
    }
  }, [isOpen]);

  // Helper function for active link styles, matching desktop #800000 maroon color
  const activeClass = 'text-[#800000] font-medium';
  const inactiveClass = 'text-gray-800';

  return (
    <div
      className={`md:hidden bg-white w-full overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[500px] shadow-lg' : 'max-h-0'
      }`}
    >
      <div className="px-4 py-2">
        {/* Home Dropdown */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => setHomeOpen(!homeOpen)}
            className="w-full py-3 flex justify-between items-center text-left text-gray-800 font-semibold"
          >
            <span>Home</span>
            {homeOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              homeOpen ? 'max-h-[180px]' : 'max-h-0'
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              Main Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/objective"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              Objective
            </NavLink>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full py-3 flex justify-between items-center text-left text-gray-800 font-semibold"
          >
            <span>Services</span>
            {servicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              servicesOpen ? 'max-h-[160px]' : 'max-h-0'
            }`}
          >
            <NavLink
              to="/product-development"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              Product Development
            </NavLink>
            <NavLink
              to="/it-consulting"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              IT Consulting
            </NavLink>
            <NavLink
              to="/it-resourcing"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              IT Resourcing
            </NavLink>
          </div>
        </div>

        {/* Trainings Dropdown */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => setTrainingsOpen(!trainingsOpen)}
            className="w-full py-3 flex justify-between items-center text-left text-gray-800 font-semibold"
          >
            <span>Trainings</span>
            {trainingsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              trainingsOpen ? 'max-h-[200px]' : 'max-h-0'
            }`}
          >
            <NavLink
              to="/trainings"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              Trainings/Internships
            </NavLink>
            <NavLink
              to="/real-time-internship"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              Real-Time Internship
            </NavLink>
            <NavLink
              to="/corporate-training"
              className={({ isActive }) =>
                `block py-2 pl-6 hover:text-[#800000] ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              Corporate Training
            </NavLink>
          </div>
        </div>

        {/* Jobs */}
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `block py-3 border-b border-gray-100 font-semibold ${
              isActive ? activeClass : inactiveClass
            }`
          }
        >
          Jobs
        </NavLink>

        {/* Support */}
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `block py-3 border-b border-gray-100 font-semibold ${
              isActive ? activeClass : inactiveClass
            }`
          }
        >
          Support
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
