import React from 'react';
import  "./CartPage.css";
import {useCart} from "../../hooks/useCart";
import FoodData from "../FoodData"
import { Link } from 'react-router-dom';


export default function CartPage() {  
  const {cart,removeFromCart,changeQuantity} = useCart();
  // console.log('CART PAGE:', addToCart);
 
   
  // console.log('Cart:', cart)
  return (
  <>
    {cart && cart.items.length > 0 && 
    <div className="container3">
    <ul className="list3">
    {cart.items.map(item => <li key={item.food.id}>
    <div>
      <img src={`${item.food.imgsource}`} alt={item.food.fname}/>
    </div>
    <div>
   {item.food.fname}
    </div>
   
  <div>
  <select value={item.quantity} onChange={(e) => changeQuantity(item , Number(e.target.value))}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
  </select>
<div>
<div>



</div>

 price={item.food.price} 

</div>
<div>
<button className="remove_button" onClick={() => removeFromCart(item.food.id)}>Remove</button>
</div>
   </div>
    </li>)}
    </ul>
<div className="checkout">
<div>

<div className="foods_count">
  {cart.totalCount} </div>
  <div className="total_price"
>  price:{cart.totalPrice}  </div>

</div>


<Link to="/checkout">Proceed To Checkout</Link>
</div>

    </div>


    }
  
    
    
  </>



  )
    
}
