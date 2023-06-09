// import AddProduct from "./Components/ProductDetails";
// import { Login } from "./Components/Login";
// import { SignUp } from "./Components/SignUp";
// import SignUpForm from "./Components/SignUpForm";

import AddProduct from "./Components/AddProduct";
import FetchAllProducts from "./Components/FetchAllProducts";
import Home from "./Components/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import DeleteProduct from "./Components/DeleteProduct";
import UpdateDetails from "./Components/UpdateDetails";
import DeleteDetails from "./Components/DeleteDetails";


// import AddProduct from "./Components/AddProduct";
// import FetchAllProducts from "./Components/FetchAllProducts";
import UpdateProduct from "./Components/UpdateProduct";
import { Login } from "./Components/Login";
import SignUpForm from "./Components/SignUpForm";
import ForgetPassword from "./Components/ForgetPassword";
// import ProductDetails from "./Components/ProductDetails";




function App() {
  return (
    <Router>
      <Routes>

         <Route exact path = "/" element = {<Login/>}/>
         <Route exact path = "/signup" element = {<SignUpForm/>}/>
         <Route exact path = "/forgotpassword" element = {<ForgetPassword/>}/>
         <Route exact path = "/home" element = {<Home/>}/>
         <Route exact path = "/addproduct" element = {<AddProduct/>}/>
         <Route exact path = "/getproduct" element = {<FetchAllProducts/>}/>
         <Route exact path = "/updateproduct/:pId" element = {<UpdateProduct/>}/>
         <Route exact path = "/deleteproduct/:pId" element = {<DeleteProduct/>}/>
         <Route exact path="/updateproductdetails" element={<UpdateDetails/>}/>
         <Route exact path="/deleteproductdetails" element={<DeleteDetails/>}/>  

      </Routes>

    </Router>
    // <Login/>
    // <SignUp/>
    // <SignUpForm/>
    // <AddProduct/>
    // <ProductDetails/>
      //  <FetchAllProducts/>
      //  <UpdateProduct/>
      // <Home/>
    
  );
}

export default App;
