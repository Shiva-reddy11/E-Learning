import { Link } from 'react-router-dom';
import './hero.css'


const Hero = () => {
    return(
      <>
      <section>
     <section className='hero'> </section>
      <div className="container">
        <div className="roww ">
        <div id='heading'>
        <h1 id='title1'><span className='text-black'>Grow</span> your skills,</h1>
        <h3 id='title2'>Build <span className='text-black'>your</span> future</h3>
    </div>
           <p className='title'>We collaborate to ensure every student achieves academic, social, and emotional success by working together and providing comprehensive support.</p>
           <div className="button">
           <Link to={'/courses'}> <button className="primary-btn " id='btn-green'>GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i></button></Link>
            <Link to={'/courses'}><button className="primary-btn " >View Course<i className="fa fa-long-arrow-alt-right"></i></button></Link>

           </div>
        </div>
      </div>
      </section>
     <div className="marginn"></div>
     </>
    )
}

export default Hero;