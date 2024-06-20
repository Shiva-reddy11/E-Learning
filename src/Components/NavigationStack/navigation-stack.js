import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home";
import About from "../About/about-page";
import CoursesHomePage from "../../Pages/courses-home-page";
import SignupPage from "../Login-Signup/signup-page";
import LoginPage from "../Login-Signup/login-page";
import CoursesPage from "../Courses/courses-page";
import ContactPage from "../Contact/contact-page";
import PageNotFound from "../../Pages/404";
import CoursesCards from "../Courses/courses-cards";
import CoursesDetails from "../Courses/Courses Details/courses-details";
import CoursesCardsHome from "../../Pages/courses-home-page";
import Example from "../Courses/top-courses";
import { createContext, useState } from "react";
import Profile from "../Login-Signup/profile";


export const DataShare = createContext()
 

const NavigationStack = () => {
    const [login,setLogin] =useState(true)
    const [payment,setPayment] = useState(false)
    console.log('payment: ', payment);
    console.log('login: ', login);

    const paymentfun = () => {
        setPayment(!false)
    }
   
return(

    <>
    <DataShare.Provider value={
        {setLogin,
        paymentfun,
        payment
     }}>
    <BrowserRouter>
    {
    login   ? 

     <Routes>
     <Route path="/" Component={Home}/>
     <Route path="/about" Component={About}/>
     <Route path="/contact" Component={ContactPage}/>
     <Route path="/courses" Component={CoursesPage}/>
     <Route path="/CoursesCards" Component={CoursesCards}/>
     <Route path="/courses/:name/" Component={CoursesDetails}/>
     <Route path="/profile" Component={Profile}/>
     <Route path="/example" Component={Example}/>
     <Route path="/CoursesHomePage" Component={CoursesHomePage}/> 
     <Route path="/login" Component={LoginPage}/>
     </Routes>
     :
     <Routes>
     <Route path="/" Component={LoginPage}/>
     </Routes>


    }
   

   
    </BrowserRouter>
    </DataShare.Provider>
    </>
)
};

export default NavigationStack;