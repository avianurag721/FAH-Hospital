import React from 'react';

const CircleText = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center">
        <svg className="absolute w-full h-full">
          <defs>
            <path id="circlePath" d="M 24, 24 m -24, 0 a 24,24 0 1,0 48,0 a 24,24 0 1,0 -48,0" />
          </defs>
          <text className="text-white font-bold text-center">
            <textPath href="#circlePath" startOffset="50%">
              Text around the curve
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CircleText;
