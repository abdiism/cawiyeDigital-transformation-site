import React from 'react';

/**
 * PageLoader
 * 
 * A centered loading indicator used during route transitions or data fetching.
 * Uses the brand green color for consistency.
 */
export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-brand-green rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="text-sm font-medium text-gray-400 animate-pulse tracking-widest uppercase">Loading Cawiye...</span>
    </div>
  );
};