import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <>
      <div>
      {
      /* TODO: Apply conditional class to <div> above for out-of-stock items */
      }
        <div className={product.inStock ? '' : styles.outOfStockClass}>
      {/* TODO: Display product name */}
          <h2>{product.name}</h2>


      {/* TODO: Display product price */}
          <p>${product.price.toFixed(2)}</p>

      {/* TODO: Show if the product is in stock or out of stock | if out of stock use styles.outOfStock */}
          <p>{product.inStock ? 'In Stock' : 'Out of Stock' }</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
