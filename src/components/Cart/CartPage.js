import React,{useEffect} from 'react';
import { useCart } from '../../hooks/useCart';
import "./CartPage.css"
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, changeQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  let totalAmount = 0;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cart-container">
      <h1 className='main-cart-heading'>Your Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => {
            const itemAmount = item.price * item.quantity; // Calculate the item amount
            totalAmount += itemAmount; // Add item amount to total

            return (
              <li key={item.id} className="cart-item">
                <div>
                  <img src={item.imgsource} alt={item.fname} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.fname}</div>
                  <div className="cart-item-quantity">
                    <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, Math.max(item.quantity - 1, 1))}>-</button>
                  </div>
                </div>
                <div className="cart-item-price">Price: PKR {item.price * item.quantity}</div>
                <div>
                  <button className='remove-style' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className='empty-card-para' >Your cart is empty.</p>
      )}
      {cart.length > 0 && <div className="total-amount">Total Amount: PKR {totalAmount}</div>}
      {cart.length > 0 && (
        <button
          className="proceed-button"
          onClick={() => navigate('/Checkout')}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartPage;