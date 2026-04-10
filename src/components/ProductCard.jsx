import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const removeProduct = (id) => {
    //needs to remove the product when remove button is clicked
    const productElement = document.getElementById(`product-${id}`);
    if (productElement) {
      productElement.remove();
    }
  }
  return (
    <>
      <div id="productContainer">
      {
      /* TODO: Apply conditional class to <div> above for out-of-stock items */
      }
        <div className={product.inStock ? styles.inStock : styles.outOfStockClass} id={`product-${product.id}`}>
      {/* TODO: Display product name */}
          <h3 id="productTitle">{product.name}</h3>


      {/* TODO: Display product price */}
          <p id="productPrice">{product.price}</p>

      {/* TODO: Show if the product is in stock or out of stock | if out of stock use styles.outOfStock */}
          <p id="productAvailability">{product.inStock ? 'In Stock' : 'Out of Stock' }</p>
          < button onClick={() => removeProduct(product.id)} >Remove</button>
        </div>
      </div>
    </>
  );
  
};

export default ProductCard;
