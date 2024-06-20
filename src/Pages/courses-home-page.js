import React from 'react'
import { Link} from "react-router-dom";
import { exploreCourses } from '../dummy-data';
import Title from '../Components/Common/title';


const CoursesCardsHome = () => {
  return (
    <>
    <section >
      
      <div className='bg-white '>
        <Title title={'All Courses'} subtitle={'Category'}/>
        <div id='course-box' className='grid grid-cols-1 gap-2 ml-14 mr-14 mb-14 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4   ' >
        {exploreCourses.slice(0,4).map(val=>(
          <div  className='bg-slate-50 border rounded-lg border-gray-600 flex flex-col justify-center items-center p-5 gap-2'>
          <img src={val.image} className=' p-0 mb-0 h-44 shadow-md rounded-full'/>
          <p className=' text-lg mt-6'>{val.title}</p>
          
          <div className='rate'>
                    <i className='fa fa-star' style={{color: "#fda63a",}}></i>
                    <i className='fa fa-star' style={{color: "#fda63a",}}></i>
                    <i className='fa fa-star' style={{color: "#fda63a",}}></i>
                    <i className='fa fa-star' style={{color: "#fda63a",}}></i>
                    <i className='fa fa-star' ></i>
                    <label htmlFor=''>(4.0)</label>
                  </div>
                  
                  <hr className='border border-yellow-500'/>
                  
                  <div className='flex justify-center items-center gap-20 mt-3 '>
                  <p>₹ {val.price}</p>
                  <Link to={val.path}>
                   <button className='border rounded-lg border-gray-600 p-2 hover:-translate-y-1 hover:scale-100 duration-200 hover:bg-green-500 hover:text-white' >
                    Buy Now</button></Link>
                  </div>
                  
          </div>
          
        ))}
        </div>
        <div className='flex justify-center '>
       <Link to={'/courses'}><button className='border border-secondary-500 rounded-full m-14 p-3 bg-blue-400 text-white hover:-translate-y-1 hover:scale-100 duration-200 hover:font-semibold'>Broswe All Courses</button></Link> 
        </div>
        
      </div>
    
    </section>
    
    </>
  )
}

export default CoursesCardsHome
