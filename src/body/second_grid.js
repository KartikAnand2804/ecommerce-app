//import { display, margin, width } from '@mui/system';
import React from 'react';
import { Figure } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';




export default function SecondGrid(){
    return(
        <>
        <div className="carousel"  style={{margin: '0 auto',width: '50vw'}}>

        <Carousel style={{display:'inline-block', width: '50vw'}}>
        <Carousel.Item style={{display: 'inline-block', width:'50vw'}}>
            <Link to="/cart"><img className="d-block img-fluid" style={{width:'50vw'}} src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/carousel-tile/TV-U1S-l.jpg.transform/scale-50/image.jpg" alt="First slide"/></Link>
            <Carousel.Caption>
                <Link to="/cart" class="text-amber-700 no-underline text-xl mb-5 ml-3 ">Buy Now</Link>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
            <Link to="/cart"><img className="d-block img-fluid" style={{width:'50vw'}} src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/carousel-tile/Nord-Buds-Blue-L.jpg.transform/scale-50/image.jpg" alt="Second slide"/></Link>
            <Carousel.Caption>
                <Link to="/cart" class="text-lime-700 no-underline text-xl ml-4 ">Buy Now</Link>
            </Carousel.Caption>        
                
        </Carousel.Item>
        <Carousel.Item>
            <Link to="/cart"><img className="d-block img-fluid" style={{width:'50vw'}} src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/carousel-tile/op9-l.jpg" alt="Third slide"/></Link>
            <Carousel.Caption>
                <Link to="/cart" class="text-black no-underline text-xl ml-3 ">Buy Now</Link>
            </Carousel.Caption>  
        </Carousel.Item>
        </Carousel>
        </div>
        <div className ="secondgrid"style={{ margin: '0 auto',width: '50vw'}}>

            
            <div className="container4" style={{display: 'inline-block',width: '25vw'}}>
            <figure className='position-relative'>
            <Link to="/cart"><img alt="timer" style={{display: 'inline-block',width: '25vw'}} src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/tile/watch-l.jpg"/></Link>
            <figcaption>
                <Link to="/cart" class="text-white no-underline text-2xl  font-normal">Buy</Link>
                </figcaption>
            </figure>
            </div>
            
            
            <div className="container5" style={{display: 'inline-block',width: '25vw'}}>
            <figure className='position-relative'>
            <Link to="/cart"><img alt="timer" style={{display: 'inline-block',width: '25vw'}} src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/tile/Buds-pro-silver-l.jpg"/></Link>
            <figcaption>
                <Link to="/cart" class="text-black no-underline text-2xl  font-normal">Buy</Link>
                </figcaption>
            </figure>
          
            </div>
            
	    </div>

        
        </>
        
    )
}