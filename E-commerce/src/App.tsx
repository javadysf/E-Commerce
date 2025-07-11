import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Finalize from "./pages/Finalize";
import './App.css'
import { CartProvider } from "./hooks/useCart";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Toaster position="top-center" toastOptions={{
          style: { background: '#22304A', color: '#FFD166', fontWeight: 700 },
        }} />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/finalize" element={<Finalize />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;
