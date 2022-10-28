// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import{ useEffect, useState} from 'react'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG8_Lz9ggCm-gA1UM6TftJoSnTX7m-NWw",
  authDomain: "revelationapp-390bd.firebaseapp.com",
  databaseURL: "https://revelationapp-390bd-default-rtdb.firebaseio.com",
  projectId: "revelationapp-390bd",
  storageBucket: "revelationapp-390bd.appspot.com",
  messagingSenderId: "465444417647",
  appId: "1:465444417647:web:54b90ab71cf4b21a26dd9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
  return signInWithEmailAndPassword(auth,email,password)
}
export function logout(){
  return signOut(auth)
}
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
      const unbn =  onAuthStateChanged(auth, user=>{
         setCurrentUser(user) 
      })
  return unbn
  },[])
  return currentUser;
}