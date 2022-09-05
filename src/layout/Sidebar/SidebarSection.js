import React, { useState } from 'react';

function SidebarSection({ title, children }) {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  return (
    <div className="border rounded-xl bg-gray-100">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-xl  border-gray-700 dark:text-gray-500 text-gray-600 bg-gray-100"
          onClick={() => setIsSectionOpen(!isSectionOpen)}
        >
          <span className="flex items-center">{title}</span>
          <svg
            className={`w-6 h-6 shrink-0 transition duration-200  ${
              isSectionOpen && 'rotate-180'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div>{isSectionOpen && children}</div>
    </div>
  );
}

export default SidebarSection;
