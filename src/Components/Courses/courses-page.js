import React from 'react'
import Example from './top-courses'
import Navbar from '../navbar'
import Back from '../Common/back'
import CoursesCards from './courses-cards'
import Footer from '../Footer/footer'

const CoursesPage = () => {
  return (
    <>
    <Navbar/>
    <Back title={'course'} />
    <Example/>
    <CoursesCards/>
    <Footer/>
    </>
  )
}

export default CoursesPage
