import React from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = ({ cart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default ShoppingCart;
