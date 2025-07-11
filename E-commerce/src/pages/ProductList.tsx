import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ui/ProductCard";
import { useNavigate } from "react-router-dom";

const Spinner = () => (
  <div className="flex justify-center items-center py-10">
    <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
  </div>
);

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="px-2 sm:px-4">
      <h1 className="section-title text-white">Products List</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            image={product.image}
            price={product.price}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList; 