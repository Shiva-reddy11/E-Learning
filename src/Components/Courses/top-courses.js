import React from 'react'
import Title from '../Common/title'
import { topcategory } from '../../dummy-data'
import courseimg from '../../Assets/back.webp'
import Back from '../Common/back'
import { Link } from 'react-router-dom'


const Example = () => {
  return (
    <section>
     <div className='courseimg'></div>
     <div className='marginn'></div>
    <div className='flex justify-center items-center flex-col bg-white sm:flex gap-0'>
    <div className='pt-15'>
      <Title title={'Popular Courses'} subtitle={'Category'} />
    </div>
    <div  className='flex gap-10 m-12 justify-center items-center text-center shrink flex-wrap'>
    
      {topcategory.map((val)=>(
       <div id='category-box' className='flex justify-center items-center flex-col shadow-md hover:-translate-y-1 hover:scale-110 duration-200 rounded-lg border-solid border-gray-300 border-2 p-2.5 h-64 w-64' >
        <img src={val.image} className='shadow-xl rounded-full p-4 mb-5 h-32 ' id='category-img'/>
        <p className='mt-3 font-semibold text-xl'>{val.course}</p>
       <Link to={val.path}><p className='mt-5  text-teal-600 '>View Course</p></Link>
       </div>
      ))}
    </div>
    </div>
    </section >
  )
}

export default Example
