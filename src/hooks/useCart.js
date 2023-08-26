import React, { useEffect } from 'react'
import { createContext,useState,useContext } from 'react'
import Fooddata from "../../src/components/FoodData"

const CartContext = createContext(null);

const CART_KEY='cart';
const EMPTY_CART={
items:[],
totalPrice:0,
totalCount:0,
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    Fooddata.slice(1, 3).map((food) => ({ food, quantity: 1, price: food.price }))
  );
  // console.log("Wasif",cartItems);
  const [totalPrice, setTotalPrice] = useState(40);
  const [totalCount, setTotalCount] = useState(3);
// useEffect(()=> {
// const totalPrice =sum(cartItems.map(item=>item.price));
// const totalCount=sum(cartItems.map(item=>item.quantity));
// },[cartItems])
  

const removeFromCart=foodId=>{
const filteredCartItems=cartItems.filter(item => item.food.id !==foodId);
setCartItems(filteredCartItems);

};

const changeQuantity=(cartItem,newQuantity)=>{
const {food}=cartItem;

const changedCartItem={
...cartItem,
quantity : newQuantity,
price: food.price * newQuantity,
};

setCartItems(
cartItems.map(item =>(item.food.id === food.id ? changedCartItem: item ))
);

};

const addToCart=food => {
  console.log("Hello",food)
 
const cartItem = cartItems.find(item =>
    item.food.id === food.id);

setCartItems([...cartItems,{food, quantity:1,price:food.price }])
}


;



  return (
    <CartContext.Provider value={{ cart: { items: cartItems, totalPrice, totalCount } ,removeFromCart,changeQuantity,addToCart,}}
    >
      {children}
    </CartContext.Provider>
  );

}


export const useCart = () => useContext(CartContext);
