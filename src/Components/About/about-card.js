import React from 'react'
import aboutimg from '../../Assets/images/about-us.png'
import CountUp from 'react-countup/build/'
import StudentsReviews3 from '../Testimonials/testimonial2'

const AboutCard = () => {
  return (
   <>
      <section className='bg-white'>
      <div className='aboutimg'></div>
      <div className='marginn'></div>
        <div className='flex gap-14 justify-center items-center ml-32 flex-col  sm:flex-row'>  
            <div >
              <img src={aboutimg} alt="" className="w-full rounded-lg mb-36 mt-32" />
          </div>

          
            <div className='mb-36 mt-32 '>
              <h2 className='text-6xl mb-5'>About Us</h2>
              <p className=' text-gray-600 text-xl mb-10 w-auto'>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>

                <div className=" flex gap-8  items-center text-3xl ">
                  <div >
                    <span className="font-medium">
                      <CountUp start={0} end={1500} duration={2}  />
                    </span>
                    <p className="text-xl text-gray-600">Success Stories</p>
                  </div>

                  <div >
                    <span className="font-medium">
                      <CountUp start={0} end={26} duration={2}  />
                    </span>
                    <p className="text-xl text-gray-600">Courses</p>
                  </div>
                </div>

                <div className=" flex gap-10  items-center mt-10 text-3xl  ">

                  <div >
                    <span className="font-medium">
                      <CountUp start={0} end={95} duration={2}  />
                    </span>
                    <p className="text-xl text-gray-600">Trusted Tutors</p>
                  </div>

                  <div >
                    <span className="font-medium">
                      <CountUp start={0} end={500} duration={2}  />
                    </span>
                    <p className="text-xl text-gray-600">Schedules</p>
                  </div>
                </div>
            </div>
          </div>
          <StudentsReviews3/>
      </section>
    

   </>
  )
}

export default AboutCard
