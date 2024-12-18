'use client'

export default function FullScreenLoadingPage() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <div className="flex flex-col items-center animate-pulse">
        <div className="w-24 h-24 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
        <p className="mt-6 text-2xl">Loading...</p>
      </div>
    </div>
  );
}
