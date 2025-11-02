"use client";
import { useState } from "react";

export default function GamificationPanel() {
  const [progress] = useState(80); // % progress toward "Master Eater"

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col justify-between">
      <h3 className="text-lg font-semibold mb-4">
        Gamification Panel / Achievements
      </h3>

      <div className="flex items-center justify-between">
        {/* Progress Circle */}
        <div className="relative w-28 h-28">
          <svg className="w-28 h-28">
            <circle
              className="text-gray-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="56"
              cy="56"
            />
            <circle
              className="text-green-500 transition-all duration-500"
              strokeWidth="8"
              strokeDasharray="314"
              strokeDashoffset={314 - (314 * progress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="56"
              cy="56"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-green-600">
            {progress}%
          </span>
        </div>

        {/* Text Info */}
        <div className="flex-1 ml-6">
          <p className="text-gray-700 font-medium">
            Progress to <span className="text-green-600">"Master Eater"</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Current Streak: <span className="font-medium">5 Days</span>
          </p>

          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}
