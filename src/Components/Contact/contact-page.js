import React from 'react'
import Back from '../Common/back'
import Navbar from '../navbar'
import Footer from '../Footer/footer'
import img from '../../Assets/bg.webp'
import ContactForm from './contact'

const ContactPage = () => {
  return (
    <>
        <Navbar/>
        {/* <Back title={'contact us'}/> */}
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default ContactPage
