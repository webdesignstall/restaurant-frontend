'use client'
import { useEffect, useState } from 'react';

export default function FullScreenLoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., for data fetching)
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      {isLoading ? (
        <div className="flex flex-col items-center animate-pulse">
          <div className="w-24 h-24 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
          <p className="mt-6 text-2xl">Loading...</p>
        </div>
      ) : (
        <p className="text-center text-gray-600">Content Loaded!</p>
      )}
    </div>
  );
}
