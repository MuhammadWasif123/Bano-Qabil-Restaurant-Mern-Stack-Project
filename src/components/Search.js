import React, { useState,useEffect } from 'react'
import Fooddata from './FoodData'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import "./style.css"
import Cards from './Cards'

// import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [fdata] = useState(Fooddata);
  const [copydata, setCopyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [food,setFood]=useState({});
  // const {addToCart} =useCart(); 
  
  // const navigate= useNavigate();

  // const handleAddToCart=()=>{
  //   addToCart(fdata);
  //   // console.log(foodItem)
  //   // navigate('./cart')
  //   // console.log(foodItem);
  // }

  const changeData = (searchTerm) => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (lowerCaseSearch === "") {
      setCopyData(fdata);
    } else {
      const filteredData = fdata.filter((item) =>
        item.fname.toLowerCase().includes(lowerCaseSearch)
      );
      setCopyData(filteredData);
    }
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    changeData(searchTerm);
  };

  useEffect(() => {
    changeData(""); // Initial loading without filtering
  }, [searchTerm]);

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center'>
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3 justify-self-right">
          Search Filter App
        </h2>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3 mb-2">
        <Form.Group className="mx-3 col-lg-5" controlId="formBasicEmail">
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Restaurant"
            className="inputSearch"
          />
        </Form.Group>
        <button className='btn btn-color col-lg-1' style={{ borderRadius: "3rem" }} onClick={handleSearchButtonClick}>Search</button>
      </Form>

      <section className='item-section mt-4 container'>
        <h2 className='px-4 mb-3' style={{ fontWeight: 400, cursor: "pointer", fontFamily: "Roboto", color: "#6b4949" }}>Available Items Order Now!</h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {copydata.length ? <Cards data={copydata}  /> : "No results found"}
        </div>
      </section>
    </>
  );
}

export default Search