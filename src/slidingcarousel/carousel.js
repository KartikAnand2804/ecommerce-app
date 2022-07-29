import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


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
      <h3 class="text-white font-bold">First slide label</h3>
      <p class="text-white font-semibold">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/dubai-pro/50Y1S-L.jpg.transform/scale-50/image.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 class="text-white font-bold">Second slide label</h3>
      <p class="text-white font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/10_Pro_L.jpg.transform/scale-50/image.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 class="text-white font-bold">Third slide label</h3>
      <p class="text-white font-semibold">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}