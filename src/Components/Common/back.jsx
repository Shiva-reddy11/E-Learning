import React from 'react'
import { useLocation } from 'react-router-dom'

const Back = ({title}) => {
    const location = useLocation()
  return (
    <>
    <section className='absolute bottom-10 left-1/2 lg:bottom-96  sm:max-2xl:absolute sm:max-2xl:bottom-64 sm:max-2xl:left-1/2 sm:max-2xl:text-center '>
       <h2 className='text-5xl '>Home {'>'} {location.pathname.split('/')[1]}</h2>
       <h1 className='text-5xl mt-4'>{title}</h1>
    </section>
    {/* <div className="marginn "></div> */}
    </>
  )
}

export default Back
