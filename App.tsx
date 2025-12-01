import React, { useEffect, useState } from 'react';
import { Header } from './components/layout/Header';
import { PromoBanner } from './components/home/PromoBanner';
import { CategoryList } from './components/home/CategoryList';
import { ProductCard } from './components/product/ProductCard';
import { fetchProducts } from './services/productsService';
import { IProduct } from './types/product';
import { ShoppingCart } from 'lucide-react';

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data on mount (API-First approach)
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-tma-bg pb-20">
      {/* Background Image Container similar to design */}
      <div className="fixed top-0 left-0 w-full h-64 z-0 pointer-events-none">
        <div className="w-full h-full bg-[url('https://picsum.photos/600/400?grayscale')] bg-cover opacity-20 mask-image-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tma-bg"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-4">
        <Header />
        
        <PromoBanner />
        
        <CategoryList />

        <section>
          <h3 className="text-lg font-bold text-white mb-4">Популярное</h3>
          
          {isLoading ? (
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-48 bg-zinc-800 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-400 py-10">{error}</div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {products.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard 
                    product={product} 
                    onAddToCart={(id) => console.log(`Added ${id} to cart`)}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Simple Footer / Copyright */}
      <footer className="mt-10 py-6 text-center text-zinc-600 text-xs relative z-10">
        <h4 className="font-bold text-zinc-500 mb-1">TMA Cafe</h4>
        <p>© TMA Cafe 2025</p>
      </footer>
    </div>
  );
};

export default App;