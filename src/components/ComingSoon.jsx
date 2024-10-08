// src/components/ComingSoon.js

export default function ComingSoon() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative p-10">
          <h1 className="text-6xl font-extrabold text-gray-200 relative inline-block tracking-wide">
            <span className="relative z-10 text-red-700">COMING SOON</span>
            <span className="absolute top-1 left-1 text-gray-500 transform translate-x-2 translate-y-2 blur-sm">
              COMING SOON
            </span>
          </h1>
  
          <div className="absolute inset-0 border-2 border-gray-100 transform translate-x-4 translate-y-4 -z-10"></div>
        </div>
      </div>
    );
  }
  