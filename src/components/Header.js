import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate =useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <img 
        className='w-44'
        src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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
