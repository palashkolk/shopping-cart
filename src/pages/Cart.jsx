import { useOutletContext } from "react-router-dom";


function Cart() {
  const {cart, handleUpdateQuantity, handleRemoveFromCart}= useOutletContext();
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Head back to the marketplace tab to find awesome selections!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Review Your Order</h2>
      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-row">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p className="unit-price">${item.price.toFixed(2)} each</p>
              </div>
              <div className="quantity-actions">
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p className="subtotal">${(item.price * item.quantity).toFixed(2)}</p>
              <button className="delete-btn" onClick={() => handleRemoveFromCart(item.id)} aria-label="Remove item">🗑️</button>
            </div>
          ))}
        </div>
        
        <div className="order-summary">
          <h3>Summary</h3>
          <div className="summary-row">
            <span>Total Price:</span>
            <span className="final-cost">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => alert("Checkout system is not configured for mock demos.")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;