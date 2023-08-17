import React, { useState } from 'react'
import Fooddata from './FoodData'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import "./style.css"
import Cards from './Cards'

const Search = () => {

    const [fdata,setFdata]=useState(Fooddata);

  return (
    <>
    <div className='container d-flex justify-content-center align-items-center'>
      
      
    <h2 style={{color:"#1b1464",cursor:"pointer"}} className="mt-3 justify-self-right">Search Filter App</h2>
    
    </div> 
    <Form className="d-flex justify-content-center align-items-center mt-3 mb-2">
    <Form.Group className="mx-3 col-lg-5" controlId="formBasicEmail">
      
      <Form.Control type="text" placeholder="Search Restaurant" className="inputSearch"/>
    
    </Form.Group>
    <button className='btn btn-color col-lg-1' style={{borderRadius:"3rem"}}>Search</button>
    </Form>

    <section className='item-section mt-4 container'>
    <h2 className='px-4 mb-3' style={{fontWeight:400,cursor:"pointer",fontFamily:"Roboto",color:"#6b4949"}}>Available Items Order Now!</h2>
   
    <div className="row mt-2 d-flex justify-content-around align-items-center">
    <Cards data={fdata}/> 


    </div>
    </section>

    </>

  )
}

export default Search
