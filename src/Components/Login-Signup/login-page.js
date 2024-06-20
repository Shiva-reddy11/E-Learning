import React, { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import img from '../../Assets/banner.png';
import GoogleAuth from './google-auth';
import { DataShare } from '../NavigationStack/navigation-stack';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const{setLogin}=useContext(DataShare)

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);
      setLogin(!false)
      toast.success("User Logged in Successfully!!", {
        position: "top-center",
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section id='loginpage' className='flex bg-white'>
        <div id='login-md' className='flex justify-center items-center'>
          <img src={img} id='login-img' alt="Login Banner" />
        </div>
        <div id='login-form' className='flex flex-col justify-center items-center gap-3'>
          <div>
            <h1>Login Page</h1>
            <h2 className='pb-4'>Welcome! Back, please enter your details</h2>
          </div>
          <form className='flex flex-col' onSubmit={handleLogin}>
            <input
              type='email'
              required
              placeholder='Enter mail id'
              className='login-input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              required
              placeholder='Enter password'
              className='login-input'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' id='login'>Log in</button>
          </form>
          <a href='/signup'>
            <button id='create-btn' className='shadow-xl'>Create Account</button>
          </a>
          <h2>or</h2>
          <GoogleAuth />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
