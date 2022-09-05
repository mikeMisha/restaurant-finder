import React, { useEffect, useState } from 'react';

export default function Sidebar({ isSidebarOpen, children }) {
  return (
    isSidebarOpen && (
      <div
        className={
          'flex flex-col space-y-2 > * w-full h-full overflow-scroll mt-2'
        }
      >
        {children}
      </div>
    )
  );
}
