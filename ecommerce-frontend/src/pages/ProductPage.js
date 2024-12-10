import React from 'react';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 50 },
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductPage;
