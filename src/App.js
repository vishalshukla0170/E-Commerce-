import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './styles/App.css';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>A-Z Shopping Store</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </header>
      <ProductList searchQuery={searchQuery} addToCart={addToCart} />
      <ShoppingCart cart={cart} />
      <Footer></Footer>
    </div>
  );
}

export default App;

