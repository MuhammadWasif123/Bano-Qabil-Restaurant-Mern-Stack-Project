import React, { useEffect,useState } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Fooddata from './FoodData'
import { faCartShopping,faStar } from '@fortawesome/free-solid-svg-icons'
import Fooddata from './FoodData'
import { useCart } from '../hooks/useCart';
import { useNavigate } from "react-router-dom";
// import {useDispatchCart,useCart} from "./ContextReducer"
// import handleOrder frm


const Cards = ({ data}) => {

  const [food, setFood] = useState(Fooddata);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // const cart= useCart();
  // const addToCartResult = addToCart(food);
  //  console.log("addToCart Result:", addToCartResult);
 
  const handleAddToCart = () => {
    console.log("handleAddToCart function triggered");
  
    // Main logic here
    addToCart(food);
    
    console.log("Food added to cart:", food);
    navigate('/cart');
  }
//   useEffect(()=>{
// getById(id).then(setFood);


//  },[id]);
 

  // const handleAddToCart = (element) => {
  //   {console.log("Items clicked added")}
    // Check if the element is already in the cart



    // const existingCartItem = cartItems.find(item => item.id === element.id);

    // if (existingCartItem) {
    //   // Update the existing item's quantity
    //   const updatedCartItem = {
    //     ...existingCartItem,
    //   };
  //     dispatch({ type: "UPDATE", id: element.id, item: updatedCartItem });
  //   } else {
  //     // Add the new item to the cart
  //     const newItem = {
  //       id: element.id,
  //       name: element.fname
  //       price: element.price,
  //     };
  //     dispatch({ type: "ADD", item: newItem });
  //   }
  // };

  return (
    <>
      {data.map((element, k) => (
        <Card key={k} style={{ width: "22rem", border: "none" }} className="mb-4 onHover">
          <Card.Img variant="top" className="imgClass" src={element.imgsource} />
          <div className="card-body">
            <div className="upper-data d-flex justify-content-between align-items-center">
              <h4>{element.fname}</h4>
              <span>{element.rating} &nbsp;★</span>
            </div>
            <div className="lower-data d-flex justify-content-between">
              <h5>{element.description}</h5>
              <span>{element.price}</span>
            </div>
            <div className="last-data mb-2 d-flex justify-content-between align-items-center">
              <Button variant="secondary" onClick={handleAddToCart} >Order Now !</Button>
              <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
              <FontAwesomeIcon icon={faStar} className="starDesign" />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Cards;