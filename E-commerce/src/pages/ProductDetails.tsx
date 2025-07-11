import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { getProductById } from "../core/api/products";
import toast from "react-hot-toast";

const BackIcon = () => (
  <svg className="w-6 h-6 inline-block mr-1 align-middle" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const Spinner = () => (
  <div className="flex justify-center items-center py-10">
    <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
  </div>
);

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getProductById(id!)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!product) return null;

  return (
    <div className="section-box px-2 sm:px-6">
      <button
        className="mb-4 text-blue-600 hover:text-primary font-bold transition-colors flex items-center gap-1"
        onClick={() => navigate(-1)}
      >
        <BackIcon /> Back to Products
      </button>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img src={product.image} alt={product.title} className="w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-xl shadow-md bg-gradient-to-br from-primary/10 to-accent/10 mb-4 md:mb-0" />
        <div className="flex-1 w-full">
          <h2 className="section-title text-lg sm:text-2xl md:text-3xl">{product.title}</h2>
          <div className="text-accent font-extrabold text-xl sm:text-2xl mb-2">${product.price}</div>
          <p className="mb-4 text-gray-700 text-sm sm:text-base">{product.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <label htmlFor="qty" className="font-medium">Quantity:</label>
            <input
              id="qty"
              type="number"
              min={1}
              value={quantity}
              onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
              className="border rounded px-2 py-1 w-20 focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            className="gradient-btn w-full sm:w-auto text-base sm:text-lg"
            onClick={() => {
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
              }, quantity);
              toast.success("Product added to cart!");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 