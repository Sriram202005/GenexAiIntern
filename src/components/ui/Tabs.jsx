// import React, { useState } from 'react';

// interface Tab {
//   id: string;
//   label: string;
//   content: React.ReactNode;
// }

// interface TabsProps {
//   tabs: Tab[];
//   defaultTab?: string;
//   className?: string;
// }

// const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, className = '' }) => {
//   const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

//   return (
//     <div className={className}>
//       <div className="border-b border-gray-200">
//         <nav className="-mb-px flex space-x-8">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === tab.id
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               } transition-colors duration-200`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </nav>
//       </div>
//       <div className="py-6">
//         {tabs.find((tab) => tab.id === activeTab)?.content}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange, className = '' }) => {
  return (
    <div className={className}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-6">
        {tabs.find((tab) => tab.id === activeTab)?.content || <p>No content available.</p>}
      </div>
    </div>
  );
};

export default Tabs;
