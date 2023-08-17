import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faStar } from '@fortawesome/free-solid-svg-icons'

const Cards = ({data}) => {    
  return (
    <>
{
data.map((element,k)=>{
   return(
    <>
    <Card style={{ width: "22rem",border:"none" } } className="mb-4 onHover">
    <Card.Img variant="top" className="imgClass" src={element.imgsource} />
<div className="card-dody">
<div className="upper-data d-flex justify-content-between align-items-center">

<h4>{element.fname}</h4>
<span>{element.rating} &nbsp;★</span>
</div>
<div className="lower-data d-flex justify-content-between">
<h5>{element.description}</h5>
<span>{element.price}</span>
</div>
<div className="extra"></div>
<div className="last-data mb-2 d-flex justify-content-between align-items-center">
<Button variant="secondary">Order Now !</Button>
<FontAwesomeIcon icon={faCartShopping}  className="cartIcon"/>
<FontAwesomeIcon icon={faStar} className="starDesign" />



</div>



</div>
  </Card>
     
    </>
   )
})
} 
    </>
  );
};

export default Cards;
