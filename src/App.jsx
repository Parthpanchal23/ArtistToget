
import React from "react";
import './styles/App.css'
import AuthLayout from './Layout/AuthLayout'
import Home1 from './Pages/home/home1'
import Home2 from './Pages/home/home2'
import Home3 from './Pages/home/home3'
import Checkout from "./Pages/Checkout";
import Invoice from "./Pages/Invoice";

import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ImageUpload from "./components/Ui/ImageUpload";
import Router from "./Route";
function App() {
  
  return (<React.Fragment>
    <Router/>
     </React.Fragment>
  )
}

export default App
