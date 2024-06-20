import React from 'react'
import { useLocation } from 'react-router-dom'

const BackCourseDetails = ({title}) => {
    const location = useLocation()
    return (
      <>
      <section className=' flex items-center gap-3'>
         <h2 className='text-lg '>Home {'>'} {location.pathname.split('/')[1]}</h2>
         <h1 className='text-lg '> {'>'} {title}</h1>
      </section>
      {/* <div className="marginn "></div> */}
      </>
    )
}

export default BackCourseDetails
