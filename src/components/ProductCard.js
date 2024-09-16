import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <br></br>
        <br></br>
        <button onClick={() => addToCart(product)} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  
  