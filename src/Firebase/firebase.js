import { initializeApp } from 'firebase/app';
import { getStorage, ref,listAll, getDownloadURL } from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// const firebaseConfig = {
//   apiKey: "AIzaSyAk5dfz4p6yLiXtOuOycy3C7sTRTTT4XBI",
//   authDomain: "s3-e-commerce-2dd77.firebaseapp.com",
//   projectId: "s3-e-commerce-2dd77",
//   storageBucket: "s3-e-commerce-2dd77.appspot.com",
//   messagingSenderId: "416919869975",
//   appId: "1:416919869975:web:88eef9214f530a1e69da52",
//   measurementId: "G-K1KLF0M2Q5"
// };
const firebaseConfig = {
  apiKey: "AIzaSyC9_2RFGELlj414UEiNQh4aC6vzuVQGJl8",
  authDomain:"e-learning-website-d1e13.firebaseapp.com",
  databaseURL: "https://e-learning-website-d1e13-default-rtdb.firebaseio.com",
  projectId:  "e-learning-website-d1e13",
  storageBucket: "e-learning-website-d1e13.appspot.com",
  messagingSenderId: "1003517583296",
  appId: "1:1003517583296:web:21ebc0db64d8a5ccb1f225",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const auth = getAuth(app);
export const db = getFirestore(app)

export { storage, ref,listAll, getDownloadURL };

