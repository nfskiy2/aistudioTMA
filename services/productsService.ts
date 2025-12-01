import { IProduct } from '../types/product';
import productsData from '../mocks/products.json';

/**
 * Simulates fetching products from an API.
 * Currently uses local mock data with a simulated network delay.
 */
export const fetchProducts = async (): Promise<IProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData as IProduct[]);
    }, 800); // Simulate 800ms network latency
  });
};