import "./App.css";
import Navbar1 from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar1 />
      </BrowserRouter>
      
    </>
  );
};

export default App;
