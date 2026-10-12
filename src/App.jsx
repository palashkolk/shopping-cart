import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Shop from './pages/Shop.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'

function App() {
  const [cart, setCart]=useState([]);
  const handleAddToCart=(product, quantity)=> {
    if (quantity<=0) return;
    setCart((prevCart)=> {
      const existingItem = prevCart.find((item)=>item.id ===product.id);
      if (existingItem){
        return prevCart.map((item)=>
          item.id===product.id?{...item, quantity: item.quantity+quantity}:item
        );
        return [...prevCart, {...product, quantity}];
      }

    })
  }

  // Directly sets item quantities from within the checkout cart view
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Drops an item fully out of the cart array
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  // Calculates total number of items combined for the Navbar badge
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="app-container">
        <Navbar totalItems={totalItems}/>
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart}/>} />
            <Route path="/cart" element ={<Cart cart={cart} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveFromCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// function RoutePlaceholder({title}){
//   return <div style={{padding: "2rem"}}><h2>{title}</h2></div>;
// }

export default App