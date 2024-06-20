import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import chooseImg from '../../../Assets/why-choose-us.png'
import videoicon from '../../../Assets/play-circle.png'
import Footer from '../../Footer/footer'
import Navbar from '../../navbar'
import { storage, ref, getDownloadURL, listAll } from '../../../Firebase/firebase';
import { exploreCourses, fundamentals } from '../../../dummy-data'
import BackCourseDetails from '../../Common/back-course-details'
import BuyNow from './buy-now'
import { DataShare } from '../../NavigationStack/navigation-stack'

const CoursesDetails = () => {
  const{payment}=useContext(DataShare)
  console.log('payment: ', payment);
  const { name } = useParams();
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrls, setVideoUrls] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');
  

  const data = [
    {
      id: '1',
      title: 'introduction'
    },
    {
      id: '2',
      title: 'variables'
    },
    {
      id: '3',
      title: 'loops'
    },
    {
      id: '4',
      title: 'title'
    },
    {
      id: '5',
      title: 'title'
    },
    {
      id: '6',
      title: 'title'
    },
    {
      id: '7',
      title: 'title'
    },
    {
      id: '8',
      title: 'title'
    },
    {
      id: '9',
      title: 'title'
    },
    {
      id: '10',
      title: 'title'
    },
    {
      id: '11',
      title: 'title'
    }]


  useEffect(() => {
    const fetchVideoUrls = async () => {
      try {
        const listRef = ref(storage, `Courses-videos/${name}`);
        const res = await listAll(listRef);
        const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
        setVideoUrls(urls);
        if (urls.length > 0) {
          setSelectedVideo(urls[0]);
        }
      } catch (error) {
        console.error('Error fetching video URLs:', error);
      }
    };

    fetchVideoUrls();
  }, [name]);


  const playvideo = (url) => {
    setSelectedVideo(url)
    setShowVideo(false);
  }



  return (
    <section>
      <Navbar />
      <div className='flex items-center'>
        <Link to={'/courses'}>
          <button className='p-0 m-10 border pr-5 border-gray-600 rounded-full hover:-translate-y-1 hover:scale-100 duration-200 hover:bg-slate-500 hover:text-white'>
            <i class="fa-solid fa-arrow-left p-3 "></i>
            Back
          </button>
        </Link>

        <BackCourseDetails title={name} />

      </div>

      <div className='flex justify-center items-center flex-col gap-10 m-9 shadow-sm  lg:max-[2560px]:flex lg:max-[2560px]:flex-row'>
        <div className=' rounded-lg h-auto w-auto'>
          {showVideo ? (
            
            <ReactPlayer url={selectedVideo} controls />
           
          ) : (
            <img src={chooseImg} alt="" className="h-[360px] w-[640px]  bg-contain" />
          )}

          {!showVideo && (
            <span className="relative bottom-64 right-32 flex justify-center items-center ">
              <img src={videoicon}
                className='h-16  bg-white rounded-full border-red-800 border mt-12 ml-64 bg-contain hover:-translate-y-1 hover:scale-110 duration-200'
                onClick={() => setShowVideo(!showVideo)}
              />
            </span>
          )}
        </div>

        {
          payment ?

            <div className='flex  items-start gap-1 flex-col mb-11 border p-3 rounded-md w-auto'>
              {videoUrls.map((val, index) => (
                <div key={index} onClick={() => playvideo(val)} className='h-auto w-96 shadow-md p-2  border-gray-500 rounded-md hover:cursor-pointer hover:bg-indigo-50'>
                  {
                    data.filter(each => each.id == index + 1).map(each => (
                        <div key={index} className='text-indigo-900'>
                          <p>Day -{index + 1} {each.title}</p>
                        </div> ))
                  }
                </div>
              ))}
            </div>
            :
            <BuyNow name={name} />
        }


      </div>


      <section>
        <div className='m-10'>
          <h1 className='text-3xl mb-5'>About Course</h1>
          {exploreCourses.filter((val) => val.name === name).map((val) => (
            <p className='text-gray-600 line-clamp-4 ml-10 text-lg'>
              {val.about}
            </p>
          ))}

        </div>
      </section>

      



      <Footer />
    </section>
  )
}

export default CoursesDetails
