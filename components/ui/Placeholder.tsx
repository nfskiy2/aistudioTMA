import React from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '../../utils/cn';

interface PlaceholderProps {
  className?: string;
}

/**
 * Renders a gray placeholder box with an icon.
 * Used when an image fails to load or is missing.
 */
export const Placeholder: React.FC<PlaceholderProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center bg-zinc-800 text-zinc-600", className)}>
      <ImageOff size={24} />
    </div>
  );
};