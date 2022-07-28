import React, { useState } from 'react';
import './App.css';
import MainNavbar from './navigation/mainnavbar.js'
import Footer from './footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import SignUp from './components/SignUp'
import Vendor from './vendor'
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './Category';
import MainCart from './MainCart';



function App() {
  // const adminUser ={
  //   email: "admin@gmail.com",
  //   passoword: "admin@123"
  // }
  // const [user, setUser] = useState({nmae:"", email:""});
  // const [error, setError] = useState("");

  // const Login = () => {
  //   console.log(details);
  // }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <>

      <Router>
        <MainNavbar/>
          
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/vendor' element={<Vendor/>} />
            <Route path='/cart' element={<MainCart/>}/>
            <Route path='/category' element={<Category/>}/>
          </Routes>
          
        <Footer/>
      </Router>

    </>
  );
}

export default App;
