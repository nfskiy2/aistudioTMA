export interface IProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  imageUrl: string;
  categoryId: string;
  isPopular?: boolean;
}