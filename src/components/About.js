import React from 'react'
import AboutImg from '../assets/images/321.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck,faHeadset,faDollarSign} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faWhatsapp,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import "../components/about.css"

const About = () => {
  return (
    <>
    <section className='about' id='about'>
    <h3 className="sub-heading" style={{textAlign:"center"}}>
    <span className='span-style'>About</span> Us
    </h3>
    <h1 className='heading' style={{textAlign:"center"}}>Why <span className='span-style'> Choose </span> Us?</h1>
    <div className="row align-items-center justify-content-between">
    <div className="image col-sm-12 col-md-6">
        <img src={AboutImg} alt="Error Loading Image" className='img-fluid' />
    </div>
    <div className="content col-sm-12 col-md-6 mt-2">
    <h3 className='h-secondary'>What makes our <span className='span-style'>Food So Special </span> </h3>
    <p className='content-para'>Our food is truly special, encompassing a symphony of flavors, cultures, and experiences on every plate. What sets our cuisine apart is the meticulous selection of fresh, locally sourced ingredients, combined with centuries-old recipes and innovative culinary techniques.</p>  
    <p className='content-para'>But it's not just about the ingredients; it's about the passion and expertise that our chefs infuse into every creation. Their dedication transforms mere food into artistry, as they balance tradition with innovation, creating harmonious blends that delight the palate and engage the senses</p>
    <div className="icons-container d-flex align-items-center justify-content-around">
    <div className="icons">
    <FontAwesomeIcon icon={faTruck} className="Truck" />
    <span>Free Delivery</span>
    </div>
    <div className="icons">
    <FontAwesomeIcon icon={faHeadset} className="Headset" /> 
    <span>24/7 Service</span>
    </div>
    <div className="icons">
    <FontAwesomeIcon icon={faDollarSign} className="Dollar" />
    <span>Easy Payments</span>
    </div>


    </div>

   <a href="#" className='about-btn'>Learn More</a>
   <div className="social-icons">
    <a href="www.facebook.com" target={"_blank"} className='anchor'><FontAwesomeIcon icon={faFacebook} /></a>
    <a href="www.whatsapp.com" target={"_blank"}  className='anchor'><FontAwesomeIcon icon={faWhatsapp} /></a>
    <a href="www.instagram.com" target={"_blank"}  className='anchor'><FontAwesomeIcon icon={faInstagram} /></a>
    <a href="www.twitter.com" target={"_blank"}  className='anchor'><FontAwesomeIcon icon={faXTwitter} /></a>
    </div>

    </div>




    </div>






    </section>
    
    </>
  )
}

export default About
