import React from "react";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  onClick?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, onClick }) => {
  return (
    <div className="card-box transition-all duration-200 cursor-pointer flex flex-col items-center group relative overflow-hidden hover:shadow-2xl hover:-translate-y-1">
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain mb-2 rounded-xl group-hover:scale-105 transition-transform drop-shadow-lg bg-bg"
        />
        <h2 className="font-bold text-lg mb-1 text-navy group-hover:text-primary transition-colors text-center line-clamp-2 min-h-[48px] flex items-center justify-center">
          {name}
        </h2>
        <div className="text-accent font-extrabold text-xl group-hover:text-primary transition-colors mb-2">
          ${price}
        </div>
      </div>
      <button
        className="gradient-btn w-full py-2 mt-auto rounded-b-xl text-base font-bold tracking-wide opacity-90 hover:opacity-100 transition-all"
        onClick={onClick}
      >
     View Details
      </button>
      <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:ring-4 group-hover:ring-primary/30 transition-all"></div>
    </div>
  );
};

export default ProductCard; 