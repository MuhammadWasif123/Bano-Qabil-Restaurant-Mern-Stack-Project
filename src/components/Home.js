import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import SecondSlideImage from '../assets/images/cover2.jpg'
import FirstSlideImage from '../assets/images/cover1.jpeg'
import ThirdSlideImage from '../assets/images/cover3.jpeg'
// import Navbar from './Navbar'

const Home = () => {
  return (
   <>
   <div className="container-carousel">
    <Carousel >
      <Carousel.Item>
        <img
          className="slider-img-style d-block w-100"
          src={FirstSlideImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='secondary-heading-style'>Welcome to FoodZone</h5>
          <h2 className='primary-heading-style'>Fresh & Tasty <br/> Food</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img-style d-block w-100"
          src={SecondSlideImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='secondary-heading-style'>Welcome to FoodZone</h5>
          <h2 className='primary-heading-style'>Grilled & Spicy <br/> Barbeque</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img-style d-block w-100"
          src={ThirdSlideImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='secondary-heading-style'>Welcome to FoodZone</h5>
          <h2 className='primary-heading-style'>Creamy & Saucy <br/> Pasta</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   </>
  )
}

export default Home
