import React from 'react';

const Popup = ({ title, children }) => {
  return (
    <div className="-translate-y-3 absolute z-10">
      <div className="inline-block absolute  w-64 text-sm font-light text-gray-500 rounded-lg border border-gray-200 shadow-sm -translate-x-2/4 -translate-y-full  text-gray-400 border-gray-600 bg-gray-800">
        <div className="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 border-gray-600 bg-gray-700">
          <h3 className="font-semibold text-white text-center">{title}</h3>
        </div>
        {children}
        <div className="w-3 h-3 inline-block position absolute rotate-45 border-b border-r border-gray-600 translate-x-[128px] -translate-y-2/4 bg-gray-800"></div>
      </div>
    </div>
  );
};

export default Popup;
