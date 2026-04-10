import React from 'react';
import ProductCard from './ProductCard';
//import styles from '../styles/ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {
        products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )
      }
    </div>
  );
};

export default ProductList;
