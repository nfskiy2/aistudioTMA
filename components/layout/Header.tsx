import React from 'react';
import { ChevronDown, Clock } from 'lucide-react';

/**
 * Header component displaying cafe status and location.
 * Matches the dark aesthetic of the design.
 */
export const Header: React.FC = () => {
  return (
    <header className="relative bg-tma-card rounded-b-2xl p-4 pt-8 shadow-xl z-10">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white leading-tight">
              Коммунистический <br /> 50
            </h1>
            <ChevronDown size={20} className="text-gray-400" />
          </div>
          <p className="text-sm text-gray-400 mt-1">Только кофе и десерты</p>
        </div>
      </div>

      {/* Status Section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Clock size={16} />
          <span>пн - вс: 08:00 - 22:00</span>
        </div>
        <div className="bg-tma-primary text-black text-xs font-bold px-3 py-1.5 rounded-lg">
          Открыто
        </div>
      </div>
      
      {/* Background decoration hint (optional) */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50"></div>
    </header>
  );
};