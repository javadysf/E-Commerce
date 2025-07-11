import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-white group-hover:text-yellow-300 transition-colors"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385m-.383-7.822L6.75 15.75A2.25 2.25 0 009 18h7.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.272zM6.75 15.75h10.5"
    />
  </svg>
);

const Header: React.FC = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between px-4 py-3 mb-6 gradient-header">
      <Link to="/" className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg hover:scale-105 transition-transform">
        E-Commerce
      </Link>
      <Link to="/cart" className="relative group">
        <CartIcon />
        {itemCount > 0 && (
          <span className="badge-qty">
            {itemCount}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header; 