import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/Products';
import '../styles/ProductList.css';


const ProductList = ({ searchQuery, addToCart }) => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    );
  };
  
  export default ProductList;
  
  