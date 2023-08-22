import './App.css';
import Search from './components/Search';
import Home from "./components/Home"
import Navbar1 from "./components/Navbar"
import About from "./components/About"
import {Routes,Route,BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/ContextReducer';
import Cart from "./components/Cart"



const App =()=>{
  return (
    
 <>
 
 <BrowserRouter>
 <CartProvider>
 <Navbar1/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/Cart" element={<Cart/>}/>
  <Route path="/products" element={<Search/>}/>
   <Route path="/about" element={<About/>}/>
  </Routes>
  </CartProvider>
  </BrowserRouter>
 </> 
 
  );
}

export default App;
