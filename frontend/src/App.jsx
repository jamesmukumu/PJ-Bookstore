import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

 import Registeruser from "./USER/registration";
 import Loginuser from "./USER/login";
    import Navigation from "./nav";
 import Fantasycategory from "./categories/fantasy";
import Religioncategory from "./categories/religion";
 import Chemistrycategory from "./categories/chemistry";
 import Actioncategory from "./categories/action";
 import Postpayment from "./payment/payment";
 import Pagenotfound from "./404";
function App(){



  return(
    <div>



      <BrowserRouter>
      <Routes>
      <Route path="*" element={<Pagenotfound/>}/>
      <Route path="/" element={<Navigation/>}/>
      <Route path="/fantasy-books" element={<Fantasycategory/>}/>
      <Route path="/religion-books" element={<Religioncategory/>}/>
      <Route path="/chemistry-books" element={<Chemistrycategory/>}/>
      <Route path="/action-books" element={<Actioncategory/>}/>
      <Route path="/payment" element={<Postpayment/>}/>
      <Route path="/registration" element={<Registeruser/>}/>
      <Route path="/login" element={<Loginuser/>}/>
      </Routes>
      
      
      
      
      
      </BrowserRouter>


    </div>
  )
}

export default App

