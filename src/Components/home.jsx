import Hero from "./Hero/hero";
import Navbar from "./navbar";
import '../App.css'
import AboutCard from "./About/about-card";
import CoursesCardsHome from "../Pages/courses-home-page";
import Footer from "./Footer/footer";
import StudentsReviews3 from "./Testimonials/testimonial2";
import HomeExample from "../Pages/home-example";
import AboutPage from "../Pages/about-home-page";





const Home = () => {
    return(
 <>
 <Navbar/>
 <Hero/>
 <AboutPage/>
 <HomeExample/>
 <CoursesCardsHome/>
 <StudentsReviews3/>
<Footer/>
  
  </>
    )
}

export default Home;