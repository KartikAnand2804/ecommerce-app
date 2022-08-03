import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';


export default function slidingCarousel(){
    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/nord-2t/Karen-Prelaunch-L.jpg.transform/scale-50/image.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <Link to='/cart' class="text-white no-underline hover:underline"><h3 >Buy Now</h3></Link>
      
      <p >One Plus 8t.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/dubai-pro/50Y1S-L.jpg.transform/scale-50/image.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <Link to='/cart' class="text-white no-underline hover:underline"><h3 >Buy Now</h3></Link>
      <p >One Plus Tv 55'inches</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/10_Pro_L.jpg.transform/scale-50/image.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <Link to='/cart' class="text-white no-underline hover:underline "><h3 >Buy Now</h3></Link>
      <p >One Plus 9 Pro.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}