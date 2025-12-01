import React from 'react';

/**
 * Static promo banner for business lunches.
 * Uses a flexible layout to allow text overlay on image background.
 */
export const PromoBanner: React.FC = () => {
  return (
    <div className="relative w-full h-32 rounded-2xl overflow-hidden my-6 group cursor-pointer">
      <img 
        src="https://picsum.photos/600/200?random=10" 
        alt="Business Lunch" 
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center p-4">
        <h2 className="text-xl font-bold text-white mb-1">Бизнес - <br/> ланч</h2>
        <p className="text-xs text-gray-200">Каждый понедельник</p>
        <p className="text-xs text-gray-200">с 22.00 до 23.00</p>
      </div>
    </div>
  );
};