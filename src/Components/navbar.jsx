import React, { useContext, useEffect, useRef } from "react";
import menu from "../Assets/menu.png";
import close from "../Assets/close.png";
import '../App.css'
import { Link, NavLink } from "react-router-dom";
import Profile from "./Login-Signup/profile";
import { DataShare } from "./NavigationStack/navigation-stack";

const Navbar = () => {
  const {login}=useContext(DataShare)

  const navDialogRef = useRef(null);
  useEffect(() => {
    handleMenu();
  }, []);
  
  const handleMenu = () => {
    if (navDialogRef.current) {
      navDialogRef.current.classList.toggle("hidden");
    }
  };

  return (
    <section>
    <nav id="bg-nav" className="p-5 flex justify-between items-center font-medium">
     <p className="text-3xl font-medium font-display ml-10 mb-2 items-center ">
     <Link to={'/'}> <span className="text-secondary">E</span>Learn
        <span className="text-secondary">ing</span></Link>
      </p> 

      <div id="nav-menu" className="hidden lg:flex gap-12 items-center font-normal ">
       <Link to={'/'}> 
       <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200  hover:text-3xl">
          Home
        </ul></Link>
        <Link to={'/courses'}>
        <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 hover:text-3xl">
          Courses
        </ul></Link>
        
       <Link to={'/about'}> <ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 hover:text-3xl">
          About
        </ul></Link>
        <Link to={'/contact'}><ul className="text-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 hover:text-3xl">
          Contact
        </ul></Link>  
      </div>
      {
          login ? <Profile/> : 
          <Link to={'/login'}><button className="hidden lg:flex items-center gap-1 border border-gray-800 text-2xl hover:border-gray-400 text-secondary px-6 py-2 mr-10 rounded-lg">
        Login
      </button></Link>
        }

      <button
        className="p-2 lg:hidden border-style: none width: 2rem"
        onClick={handleMenu}
      >
        <img src={menu} alt="menuimg" className="text-gray-600 border-none" />
      </button>




{/* /////////////////////////////////////////////////////////////// */}
      <div
        ref={navDialogRef}
        id="nav-dialog"
        className="hidden fixed z-10 lg:hidden bg-white inset-0 p-10"
      >
        <div id="nav-bar" className="flex justify-between items-center">
          <p className="text-3xl font-medium font-display">
          <Link to={'/'}> <span className="text-secondary">E</span>Learn
            <span className="text-secondary">ing</span></Link>
          </p>

          <button
            className="p-2 lg:hidden border-style: none width: 2rem"
            onClick={handleMenu}
          >
            <img src={close} alt="menuimg" className="text-gray-600" />
          </button>
        </div>
        <div className="mt-6 ">
        <Link to={'/'}> <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            Home
          </ul></Link>
          <Link to={'/courses'}>
            <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            Courses
          </ul>
          </Link> 
        
          <Link to={'/about'}> <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            About
          </ul></Link>
          <Link to={'/contact'}>
          <ul className="font-medium m-3 p-3 hover:bg-gray-100 rounded">
            Contact
          </ul></Link>
        </div>
        <div className="h-[1px] bg-gray-100"></div>
        
        {
          login ? <Profile/> : 
          <Link to={'/login'}>  <button className="mt-6 w-full text-2xl flex gap-2 item-center px-6 py-3 rounded-lg hover:bg-gray-100 font-size:30px text-secondary">
          Login
        </button></Link>
        }
      </div>
    </nav>
    </section>
  );
};

export default Navbar;
