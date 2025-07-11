import { useEffect, useState } from "react";
import { getProducts } from "../core/api/products";

// define type of product
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

// hook for getting products from API
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // get products when first loading
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
} 