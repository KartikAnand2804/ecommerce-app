import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import PostAddIcon from '@mui/icons-material/PostAdd';
// import logo from './logo.png';

export default function MainNavbar(){
    return(
        <div class="grid grid-rows-1 grid-cols-3 p-6">
            <div className="Logo" class="flex flex-row flex-nowrap flex-initial w-40 h-10 align-middle items-center">
                <img class="h-30 w-40" alt="logo" src={require('./logo.png')}></img>
            </div>

            <div className="grid grid-rows-1 grid-cols-7 gap-x-6 flex flex-row flex-nowrap flex-initial font-medium pb-0 pt-4 font-serif text-xl">

                <div style={{display:'flex'}}><a href="#" class="text-black no-underline"><Link to='/' class="text-black no-underline">Home</Link></a> </div>
                <div><a href="#" class="text-black no-underline">Order</a></div>
                <div><a href="#" class="text-black no-underline">About</a></div>
                <div><a href="#" class="text-black no-underline">Contact</a></div>
                <div><Link to='/login' class="text-black no-underline"><a href="#" class="text-black no-underline">Login</a> </Link></div>
                <div><a class="text-black no-underline"><Link to='/signup' class="text-black no-underline">SignUp</Link></a> </div>

            </div>

            <div className="inline gap-x-6 flex flex-row flex-nowrap flex-initial font-medium pb-0 pt-4 font-serif text-xl justify-end">
                <div class="mr-0"><AccountCircleIcon/></div>
                <div class="mr-0"><Link to="/cart" class="text-black-no-underline"><ShoppingCartIcon/></Link></div>
                <div class="mr-0"><Link to="/vendor" class="text-black no-underline"><PostAddIcon/></Link></div>
            </div>
        </div>
    )
}
