import React, { useEffect } from 'react';

export default function Sidebar({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/flowbite@1.5.2/dist/flowbite.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="flex flex-col space-y-2 > * w-full h-full overflow-scroll mt-2">
      {children}
    </div>
  );
}
