import { display, margin, width } from '@mui/system';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';




export default function SecondGrid(){
    return(
        <>
        <div className="carousel" style={{margin: '0 auto',width: '40vw'}}>

        <Carousel style={{display:'inline-block', width: '40vw'}}>
        <Carousel.Item style={{display: 'inline-block', width:'40vw'}}>
        <img
         className="d-block" style={{width:'40vw'}}
        src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/carousel-tile/nord-ce-l.jpg.transform/scale-50/image.jpg"
        alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block" style={{width:'40vw'}}
        src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/carousel-tile/TV-U1S-l.jpg.transform/scale-50/image.jpg"
        alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block"style={{width:'40vw'}}
        src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/carousel-tile/Nord-Buds-Blue-L.jpg.transform/scale-50/image.jpg"
        alt="Third slide"
        />
        </Carousel.Item>
        </Carousel>
        </div>
        <div className ="secondgrid"style={{ margin: '0 auto',width: '40vw'}}>

            <div className="container4" style={{display: 'inline-block',width: '20vw'}}>
            <img alt="timer" style={{display: 'inline-block',width: '20vw'}} src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/tile/watch-l.jpg"/>
            </div>
            
            
            <div className="container5" style={{display: 'inline-block',width: '20vw'}}>
            <img alt="timer" style={{display: 'inline-block',width: '20vw'}} src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/tile/BWZ2-Red-L.jpg"/>
          
            </div>
            
	    </div>

        
        </>
        
    )
}