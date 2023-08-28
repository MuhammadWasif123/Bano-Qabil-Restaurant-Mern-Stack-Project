import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
// import Modal from '../components/Modal';
// import Cart from '../components/Cart';
import logoImg from '../assets/images/1212.png'
import "../components/Nav-home.css"
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import About from './About';
import Contact from './Contact/Contact';
import CartPage from './Cart/CartPage';
import Checkout from './Checkout/CheckoutPage'
import LoginPage from './login/loginPage';
import SignupPage from './signup/signupPage';
// import { faL } from '@fortawesome/free-solid-svg-icons';

const Navbar1 = () => {

  // const [localuser, setLocaluser] = useState(null);
  // // setLocaluser(localStorage.getItem("loggeduser") ? true : false);
  console.log(JSON.parse(localStorage.getItem("User")));
  const name = JSON.parse(localStorage.getItem("User"))
  console.log("i am running");
  // useEffect(() => {
  //   setLocaluser(localStorage.getItem("loggedUser") ? false : true); 
  // }, [localuser]);


  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:"#fff1f1d1"}}>
        <Container>
          <Navbar.Brand href="#home">
          <a href="/">
          <img src={logoImg} style={{width:"4.4rem",position:"relative",right:"3rem",bottom:"0.21rem"}} alt="Error Loading Images" />

          </a>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Navbar-parent">
              <Nav.Link as={Link} to="/"  className='Nav-bar-anchor'>Home</Nav.Link>
              <Nav.Link as={Link} to="/products" className='Nav-bar-anchor'>Menu</Nav.Link>
              <Nav.Link as={Link} to="/about" className='Nav-bar-anchor'>About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='Nav-bar-anchor'>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/cart" className='Nav-bar-anchor'>Cart</Nav.Link>

              
              <div className='login-div'>
            <Nav.Link as={Link} to="/login" className='Nav-bar-anchor'>Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" className='Nav-bar-anchor'>Sign Up</Nav.Link>
            </div>
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div>
<Routes>


  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Search/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/cart" element={<CartPage/>}/>
  <Route path="/Checkout" element={<Checkout/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/signup" element={<SignupPage/>}/>



  
 


  



</Routes>


    </div>

    </>
  );
};

export default Navbar1;