import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Cart from '../components/Cart';
import logoImg from '../assets/images/logo2.png'
import "../components/Nav-home.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import About from './About';
import  Menu  from './menu/Menu';


const Navbar1 = () => {
  const [cartView, setCartView] = useState(false);

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
              <Nav.Link as={Link} to="/" className='Nav-bar-anchor'>Contact Us</Nav.Link>
             
              <div>
                <div
                  className="btn bg-white text-success mx-2"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart{' '}
                  <Badge pill bg="danger">
                    2
                  </Badge>
                </div>
              </div>
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              ) : null}
              <div className='login-div'>
            <Nav.Link href="#link" className='Nav-bar-anchor'>Login</Nav.Link>
            <Nav.Link href="#link" className='Nav-bar-anchor'>Sign Up</Nav.Link>
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
  <Route path="/contact" element={<Home/>}/>
  



</Routes>


    </div>

    </>
  );
};

export default Navbar1;
