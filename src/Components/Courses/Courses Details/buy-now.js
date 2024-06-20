import React, { useContext } from 'react'
import { exploreCourses } from '../../../dummy-data'
import { DataShare } from '../../NavigationStack/navigation-stack'

const BuyNow = ({name}) => {
       const{paymentfun}=useContext(DataShare)
  return (
    <div className='flex flex-col gap-6 p-5 h-96 w-96 '>
    {exploreCourses.filter((val) => val.name === name).map((val) => (
        <React.Fragment key={val.id}>
          <p className='text-4xl'>{val.title}</p>
          <p>{val.duration}</p>
          <div className='rate'>
            <i className='fa fa-star' style={{ color: "#fda63a" }}></i>
            <i className='fa fa-star' style={{ color: "#fda63a" }}></i>
            <i className='fa fa-star' style={{ color: "#fda63a" }}></i>
            <i className='fa fa-star' style={{ color: "#fda63a" }}></i>
            <i className='fa fa-star' ></i>
            <label htmlFor=''>(4.0)</label>
          </div>
          <p>{val.price}</p>
          <button onClick={paymentfun} className='border rounded-lg border-gray-600 p-2 hover:-translate-y-1 hover:scale-100 duration-200 hover:bg-green-500 hover:text-white'>
            {val.button}
            </button>
        </React.Fragment>
      ))}
      

    </div>
  )
}

export default BuyNow
