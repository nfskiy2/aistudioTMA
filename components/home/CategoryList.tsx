import React from 'react';
import { Coffee, Cake, Croissant } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CategoryItemProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, icon, active }) => (
  <button 
    className={cn(
      "flex flex-col items-center justify-center min-w-[80px] h-20 rounded-xl transition-all",
      active ? "bg-zinc-400 text-black" : "bg-zinc-500 text-white hover:bg-zinc-600"
    )}
  >
    <div className="mb-1">{icon}</div>
    <span className="text-xs font-medium leading-none">{label}</span>
  </button>
);

export const CategoryList: React.FC = () => {
  return (
    <div className="mb-6">
      <h3 className="text-base font-bold text-white mb-3">Категории</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <CategoryItem label="Кофе" icon={<Coffee size={20} />} active />
        <CategoryItem label="Десерты" icon={<Cake size={20} />} />
        <CategoryItem label="Выпечка" icon={<Croissant size={20} />} />
        {/* Placeholder for visual consistency with screenshot */}
        <div className="min-w-[80px] h-20 bg-zinc-600 rounded-xl opacity-50"></div>
        <div className="min-w-[80px] h-20 bg-zinc-600 rounded-xl opacity-50"></div>
      </div>
    </div>
  );
};