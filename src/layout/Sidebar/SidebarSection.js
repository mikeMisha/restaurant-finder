import React, { Children } from 'react';

function SidebarSection({ title, children }) {
  return (
    <div
      id="accordion-open"
      data-accordion="open"
      className="border rounded-xl bg-gray-100"
    >
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500  rounded-xl  border-gray-700 dark:text-gray-500 text-gray-600 bg-gray-100"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          <span className="flex items-center">{title}</span>
          <svg
            data-accordion-icon
            className="w-6 h-6 rotate-180 shrink-0"
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
      <div
        id="accordion-open-body-1"
        className="hidden"
        aria-labelledby="accordion-open-heading-1"
      >
        {children}
      </div>
    </div>
  );
}

export default SidebarSection;
