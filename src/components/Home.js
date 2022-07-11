import React, { useState }from 'react';
import '../../src/App.css';
import MainNavbar from '../navigation/mainnavbar.js'
import FirstGrid from '../body/first_grid';
import SlidingCarousel from '../slidingcarousel/carousel'
import Footer from '../footer.js'
import { getCardActionAreaUtilityClass } from '@mui/material';
import LoginForm from '../components/LoginForm';

function Home() {
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
  <div>
    <div>
      <SlidingCarousel />
    </div>

    <div className='grid'>
      <FirstGrid />
    </div>

  </div>
  );
}

export default Home;
