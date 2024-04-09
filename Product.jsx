// Product.js
import React from 'react';
import './Product.css'; // Import CSS file for Product component

const Product = ({ product }) => {
  const { name, price, description, image } = product;

  return (
    <div className="product-container">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">Price: ${price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
