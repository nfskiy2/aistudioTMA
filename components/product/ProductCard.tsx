import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { IProduct } from '../../types/product';
import { Placeholder } from '../ui/Placeholder';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface ProductCardProps {
  product: IProduct;
  onAddToCart?: (id: string) => void;
}

/**
 * Displays product information in a grid card format.
 * Features:
 * - Fluid layout (h-full)
 * - Content overflow handling (truncate)
 * - Graceful degradation for images and descriptions
 * - Persistent CTA (Cart button)
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col h-full bg-tma-card rounded-xl overflow-hidden shadow-lg border border-zinc-800/50">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden">
        {imageError ? (
          <Placeholder className="w-full h-full" />
        ) : (
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-3">
        {/* Title: Truncate after 2 lines if needed (using line-clamp logic via class) */}
        <h3 className="text-sm font-semibold text-tma-text-main line-clamp-2 mb-1" title={product.name}>
          {product.name}
        </h3>

        {/* Price & Action - Pushed to bottom */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm font-bold text-tma-text-sec">
            {product.price}{product.currency}
          </span>
          
          <Button 
            variant="icon" 
            size="icon" 
            className="w-8 h-8"
            onClick={() => onAddToCart?.(product.id)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};