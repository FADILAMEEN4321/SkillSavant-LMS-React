import React, { useState } from "react";

const MyLearningTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="mt-1 pl-4 pr-4 w-full">
      <div className="flex items-center border-b border-gray-300">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-b-2 border-black rounded-t-md bg-gray-200"
                : ""
            } p-3 ml-1 text-gray-700 font-medium py-2 hover:rounded-t-md hover:bg-gray-200 flex items-center`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.icon && <i className={`${child.props.icon} mr-2`}></i>}
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children, icon }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { MyLearningTabs, Tab };
