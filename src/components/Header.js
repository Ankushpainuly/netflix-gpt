import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispach =useDispatch();

  const navigate =useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      

    }).catch((error) => {
      // An error happened.
      navigate("/error");
      
    });
  }


  useEffect(()=>{
    //It’s a listener / event subscription.
    //so using inside useEffect so that only runs once otherwise it will runs again in every render and create duplicate lisners
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in

        const {uid , email, displayName, photoURL} = user;
        
        dispach(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");

      } else {
        // User is signed out
        dispach(removeUser());
        navigate("/");
      }
    });

    // for cleaning
    //unsubscribe when component unmount
    return ()=> unsubscribe();
  },[]);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <img 
        className='w-44'
        src={LOGO}
        alt='logo'
      />

      {user && <div className='flex p-2 gap-2 items-center'>
          <img 
            className='w-12 h-12'
            src={user.photoURL}
            alt='user-icon'
          />

          <button onClick={handleSignOut} className='font-bold text-white bg-black py-3 px-2 rounded-lg'>(Sign Out)</button>
       </div> }

     </div>
  )
}

export default Header
