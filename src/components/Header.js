import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispach =useDispatch();

  const navigate =useNavigate();
  const user = useSelector((store)=>store.user);
  const showGptSearch =useSelector(store=>store.gpt.showGptSearch);
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

  const handleGptSearchClick =()=>{
    dispach(toggleGptSearchView());
  }

  const handleLanguageChange =(e)=>{
    dispach(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex flex-col items-center md:flex-row md:justify-between'>
      <img 
        className='w-44'
        src={LOGO}
        alt='logo'
      />

      {user && 
        (<div className='flex flex-col md:flex-row p-2 gap-2 items-center'>
          {showGptSearch &&(
          <select className='p-2 m-2 md:mr-8 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>
              (<option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
            
          </select>)
          }

        <div className='flex gap-2 items-center'>
            <button className='py-2 px-2 my-2 md:mr-8 bg-purple-800 text-white rounded-lg'
              onClick={handleGptSearchClick}  
              >
              {showGptSearch ? "Homepage": "GPT Search"}
            </button>

              <img 
                className='w-12 h-12 hidden md:inline-block'
                src={user.photoURL}
                alt='user-icon'
              />

              <button onClick={handleSignOut} className='font-bold text-white bg-black py-2 px-2 rounded-lg'>(Sign Out)</button>
          </div>
          
       </div> 
       )}

     </div>
  )
}

export default Header
