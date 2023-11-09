import React, { useState } from 'react';

const MyLearningTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
   
    <div className="mt-1 pl-4 pr-4 w-full">
      <div className="flex items-center border-b border-gray-300">
        {children.map(child => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2 border-black' : ''
            } ml-4 text-gray-700 font-medium py-2`}
            onClick={e => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>



  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { MyLearningTabs, Tab };