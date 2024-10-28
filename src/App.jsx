
import React from "react";
import './styles/App.css'
import AuthLayout from './Layout/AuthLayout'
import Home1 from './Pages/home/home1'
import Home2 from './Pages/home/home2'
import Home3 from './Pages/home/home3'
import Checkout from "./Pages/Checkout";
import Invoice from "./Pages/Invoice";
import BlogDetails from "./Pages/blog/details/index";
function App() {
  return (<React.Fragment>
    {/* <AuthLayout>
       <Home1/> 
       <Home2/>
       <Home3/>
    </AuthLayout> */}
    <BlogDetails/>
     </React.Fragment>
  )
}

export default App
