import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar.jsx'


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
      }
      return [...prevCart, {...product, quantity}];
    });
  };

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
    <div className="app-container">
      <Navbar totalItems={totalItems}/>
      <main className="content-container">
        <Outlet context={{cart, handleAddToCart, handleUpdateQuantity, handleRemoveFromCart}} />
      </main>
    </div>
  );
}

export default App