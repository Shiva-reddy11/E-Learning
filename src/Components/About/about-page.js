import React from 'react'
// import './about.css'
import AboutCard from './about-card'
import Navbar from '../navbar'
import Back from '../Common/back'
import StudentsReviews3 from '../Testimonials/testimonial2'
import Footer from '../Footer/footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className=''>
    <Back title='About Us'/> 
    </div>
    <AboutCard />
   
    <Footer/>
    </>

  )
}

export default About
