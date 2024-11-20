import React from 'react';

export const SimpleCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

export const SimpleCardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 py-4 border-b border-gray-200">
    {children}
  </div>
);

export const SimpleCardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold">
    {children}
  </h3>
);

export const SimpleCardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);