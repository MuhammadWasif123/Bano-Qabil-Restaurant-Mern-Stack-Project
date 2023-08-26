import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
// import Modal from '../components/Modal';
// import Cart from '../components/Cart';
import logoImg from '../assets/images/logo2.png'
import "../components/Nav-home.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import About from './About';
import  Menu  from './menu/Menu';
import Contact from './Contact/Contact';
import CartPage from './Cart/CartPage';
import LoginPage from './Login/LoginPage';
import { logout } from '../Services/services';

const userCheck = () =>{
  const isuser = localStorage.getItem('user') ? true : false;
  console.log(isuser);
  var localuser = JSON.parse(localStorage.getItem('user'))

  console.log(localuser.name)
}
const isuser = localStorage.getItem('user') ? true : false;



const Navbar1 = () => {
  const [cartView, setCartView] = useState(false);

  const isuser = localStorage.getItem('user') ? true : false;

  
  var localuser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null;

  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:"#fff1f1d1"}}>
        <Container>
          <Navbar.Brand href="#home">
          <a href="#">
          <img src={logoImg} style={{width:"3.1rem",position:"relative",right:"3rem"}} alt="Error Loading Images" />

          </a>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Navbar-parent">
              <Nav.Link as={Link} to="/"  className='Nav-bar-anchor'>Home</Nav.Link>
              <Nav.Link as={Link} to="/products" className='Nav-bar-anchor'>Products</Nav.Link>
              <Nav.Link as={Link} to="/Menu" className='Nav-bar-anchor'>Menu</Nav.Link>
              <Nav.Link as={Link} to="/about" className='Nav-bar-anchor'>About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='Nav-bar-anchor'>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/cart" className='Nav-bar-anchor'>Cart</Nav.Link>
              <div className='login-div'>

              { !isuser && <>
                <Nav.Link as={Link} to="/login" 
                className='Nav-bar-anchor'>Login</Nav.Link>
              <Nav.Link href="#link" className='Nav-bar-anchor'>Sign Up</Nav.Link>
              
              </>

              }
            { isuser && 
            <>
            <Nav.Link  href="#link" className='Nav-bar-anchor' onClick={logout} >Logout</Nav.Link>
            <Nav.Link  href="#link" className='Nav-bar-anchor'> {localuser.name} </Nav.Link>
            {/* <button onClick={userCheck} >click </button> */}
            </>           
              }
            
        
            
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div>
<Routes>


  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Search/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/cart" element={<CartPage/>}/>
  <Route path="/login" element={<LoginPage/>}/>


</Routes>


    </div>

    </>
  );
};

export default Navbar1;