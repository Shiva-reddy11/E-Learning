import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";
import NavigationStack, { DataShare } from "../NavigationStack/navigation-stack";



function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  console.log('userDetails: ', userDetails);
  const{setLogin}=useContext(DataShare)
  console.log('setLogin: ', setLogin);
  
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      
      setUserDetails(user)
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLogin(!false)
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
        
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
    setLogin(!false)
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      setLogin(false)
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
<>
    <div className="flex flex-col justify-center items-center w-1/2 gap-10 m-16 border border-gray-600">

      {userDetails ? (
        <>
          <div  >
            <img
              src={userDetails.photoURL}
              className="w-32 rounded-full"
              
            />
          </div>
          <h3>Welcome {userDetails.firstName} </h3>
          <div>
            <p>Email: {userDetails.email}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}
export default Profile;