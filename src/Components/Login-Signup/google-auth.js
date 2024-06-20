import React, { useContext } from 'react'
import googleicon from '../../Assets/google-logo-icon.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../../Firebase/firebase'
import { toast } from 'react-toastify';
import { setDoc,doc } from 'firebase/firestore'
import { DataShare } from '../NavigationStack/navigation-stack';

const GoogleAuth = () => {
const {setLogin} = useContext(DataShare)
   const googlelogin = () =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider).then(async(result) =>{
        console.log(result)
        const user=result.user;
        
        if (result.user){
        //     await setDoc(doc(db, "Users", user.uid), {
        //         email: user.email,
        //         firstName: user.displayName,
        //         photo: user.photoURL
        //       });
        setLogin(!false)
            toast.success("user logged in Successfully!!", {
                position: "top-center",
              });
            window.location.href = "/"
        }
    })
    .catch(error=>(console.log(error)))
   }
   

  return (
    <button onClick={googlelogin} id='create-btn' className='shadow-xl flex justify-center items-center gap-3 '>
        <img src={googleicon}/>
      Sign in With Google
      </button>
  )
}

export default GoogleAuth
