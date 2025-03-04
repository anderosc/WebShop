import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import pictures from "../data/pictures.json"

function CarouselGallery() {
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    fetch("http://localhost:8090/pictures")
    .then(res => res.json())
    .then(json => setPictures(json))
    
  }, []);
  

  return (
    <div>
    <Carousel data-bs-theme="dark">
      {pictures.map(picture =>
      
         <Carousel.Item key={picture.id}>
         <img
 
           src={picture.src}
           alt={picture.alt}
         />
         <Carousel.Caption>
           <h5>{picture.header}</h5>
           <p>{picture.text}</p>
         </Carousel.Caption>
       </Carousel.Item>
      )}
     
    </Carousel>
    </div>
  );
}

export default CarouselGallery;