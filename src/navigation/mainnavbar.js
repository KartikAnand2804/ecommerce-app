import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import PostAddIcon from '@mui/icons-material/PostAdd';
// import logo from './logo.png';

export default function MainNavbar(){
    return(
        <div className="nav">
        <div className="logo">
        <img alt="logo" src={require('./logo.png')}></img>
        </div>
            <ul>
                <li><div style={{display:'flex'}}><Link to='/' class="text-black no-underline decoration-1 font-semibold  ">Home</Link></div></li>
                <li> <div><Link to='' class="text-black no-underline font-semibold">Order</Link></div></li>
                <li><div><Link to='/about' class="text-black no-underline font-semibold">About</Link></div></li>
                <li> <div><Link to='/contact' class="text-black no-underline font-semibold">Contact</Link></div></li>
                <li> <div><Link to='/log in' class="text-black no-underline font-semibold">Login </Link></div></li>
                <li><div><Link to='/signup' class="text-black no-underline font-semibold">SignUp</Link> </div></li>
            </ul>
            <div className="right">
            <div class="Account"><AccountCircleIcon/></div>
            <div class="cart_icon"><Link to="/cart" class="text-black no-underline"><ShoppingCartIcon/></Link></div>
            <div class="vendor_icon"><Link to="/vendor" class="text-black no-underline"><PostAddIcon/></Link></div>
            </div>

        </div>
    )
}
