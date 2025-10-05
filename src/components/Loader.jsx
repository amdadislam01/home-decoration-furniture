import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      {/* Spinner with emoji */}
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 w-full h-full border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex justify-center items-center text-4xl">
          🛋️
        </div>
      </div>

      {/* Brand */}
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 animate-pulse">
        HomeDecor
      </h1>

      {/* Loading text */}
      <p className="mt-2 text-gray-500 text-lg">Loading your beautiful furniture...</p>
    </div>
  );
};

export default Loader;
