import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispach =useDispatch();

    const appRouter= createBrowserRouter([
        {
            path :"/",
            element :<Login/>

        },{
            path: "/browse",
            element: <Browse/>
        },
    ]);

  useEffect(()=>{
    //It’s a listener / event subscription.
    //so using inside useEffect so that only runs once otherwise it will runs again in every render and create duplicate lisners
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in

        const {uid , email, displayName, photoURL} = user;
        
        dispach(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

      } else {
        // User is signed out
        dispach(removeUser());
      }
    });
  },[]);

  return (
    <div>
      <RouterProvider router={appRouter}/> 
    </div>
  )
}

export default Body;
