import React, { useState } from 'react';
import './App.css';
import MainNavbar from './navigation/mainnavbar.js'
import FirstGrid from './body/first_grid.js';
import SlidingCarousel from './slidingcarousel/carousel.js'
import Footer from './footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondGrid from './body/second_grid';
import NewsLetter from './body/newsletter';
import { getCardActionAreaUtilityClass } from '@mui/material';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import SignUp from './components/SignUp'
import Vendor from './vendor'
import 'bootstrap/dist/css/bootstrap.min.css';



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
          </Routes>
          
        <Footer/>
      </Router>

    </>
  );
}

export default App;
