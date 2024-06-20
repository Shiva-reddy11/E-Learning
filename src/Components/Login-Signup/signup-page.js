import React, { useEffect, useReducer, useState } from 'react'
import './style.css'

import img2 from '../../Assets/lms-bg-signup.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../Firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import GoogleAuth from './google-auth'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const SignupPage = () => {

  const [username,setUsername] = useState ('')
  const [email,setEmail] = useState ('')
  const [password,setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      
        await setDoc(doc(db, "Users", user.uid), {
          email: email,
          firstName: username,
          // password: password
        });
      
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
       window.location.href = "/profile"
    } catch (error) {
      console.log(error.message);
      toast.success("user already exist!!", {
        position: "top-center",
      });
    }
  };

  return (
   <>
   <section id='loginpage' className='flex bg-white'>
   <div id='login-form' className='flex flex-col justify-center items-center gap-3 '>
    <div className='mt' >
      <h1>Signup Page</h1>
      <h2 className='pb-4'>Welcome!</h2> 
      </div>
      <form className='flex flex-col' onSubmit={handleRegister}> 
        <input type='text' 
        required 
        placeholder='Enter username' 
        className='login-input'
        onChange={(e) =>setUsername (e.target.value)}
        />
        <input type='email' 
        required 
        placeholder='Enter mail id' 
        className='login-input'
        onChange={(e) =>setEmail(e.target.value)}
         />
        <input type='password'
         required 
         placeholder='Enter password'
         className='login-input'
         onChange={(e) =>setPassword (e.target.value)}
          />
        <input type='submit' value={'Sign Up '}  id='login'/>
        
      </form>
      <h2>or</h2>
      <GoogleAuth/>
      <a href='/login'><p>if you have already account <span className='click'>click here</span></p></a>
    </div>
    <div  id='login-md' className=' flex  justify-center items-center '> 
    <img src={img2} id='login-img'/> 
   </div>
   
   </section>
   </>
  )
}

export default SignupPage
