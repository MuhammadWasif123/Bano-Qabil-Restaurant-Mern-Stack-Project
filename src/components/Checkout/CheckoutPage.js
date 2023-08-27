import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';
import "./CheckoutPage.css"; // Import your CSS for Checkout styling


const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  let totalAmount = 0;
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
  const [orderMessage, setOrderMessage] = useState('');

  const handlePlaceOrder = () => {
    if (selectedPaymentMethod) {
      setOrderMessage('Your item has been ordered!');

      setTimeout(() => {
        navigate('/'); 
      }, 2000); 
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="checkout-container">
      <h1 className='checkout-heading'>Checkout</h1>
      <ul>
        {cart.map((item) => {
          const itemAmount = item.price * item.quantity;
          totalAmount += itemAmount;
  
          return (
            <li key={item.id} className="checkout-item">
          
                <div className="checkout-item-image">
                  <img src={item.imgsource} alt={item.fname} />
                </div>
                <div className="checkout-item-name">{item.fname}</div>
                <div className="checkout-item-quantity">Quantity: {item.quantity}</div>
                <div className="checkout-item-amount">Amount: PKR {itemAmount}</div>
      
            </li>
          );
        })}
      </ul>
      <div className="payment-methods">
  <h3 className='payment-heading' >Payment Methods</h3>
  <div className="payment-method-options">
    <label>
      <input
        type="radio"
        value="creditCard"
        checked={selectedPaymentMethod === "creditCard"}
        onChange={() => setSelectedPaymentMethod("creditCard")}
      />
      Credit Card
    </label>
    <label>
      <input
        type="radio"
        value="HBL"
        checked={selectedPaymentMethod === "HBL"}
        onChange={() => setSelectedPaymentMethod("HBL")}
      />
      HBL
    </label>
    <label>
      <input
        type="radio"
        value="bankTransfer"
        checked={selectedPaymentMethod === "bankTransfer"}
        onChange={() => setSelectedPaymentMethod("bankTransfer")}
      />
      Bank Transfer
    </label>
    {/* Add more payment methods as needed */}
  </div>
</div>
      <div className="checkout-total">Total Amount: PKR {totalAmount}</div>
      <button className="place-order-button" onClick={handlePlaceOrder} disabled={!selectedPaymentMethod}>
  Place Order
</button>

      <div className="order-message">{orderMessage}</div>
      <Link className='back-button' to="/cart">Back to Cart</Link>
    </div>
  );
  
};

export default CheckoutPage;