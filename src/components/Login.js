import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkFormValidation } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const dispach =useDispatch();
    
    const [isSignInForm,setSignInForm]=useState(true);
    const [errorMessage,setErrorMessage] =useState(null);

    const tooggleSignInForm =()=>{
        setSignInForm(!isSignInForm);
    };

    //use ref hook for refrencing a element
    const name = useRef(null);
    const email =useRef(null);
    const password =useRef(null);

    const handleClick =()=>{
        
        const message =checkFormValidation(email.current.value,password.current.value);
        setErrorMessage(message);
        //agar validate me error ho to return ho jao
        if(message) return;

        if(!isSignInForm){
            //for signUp form

                //api call
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value , photoURL: USER_AVATAR,
                      }).then(() => {
                        // Profile updated!
                        const {uid , email, displayName, photoURL} = auth.currentUser;
                        dispach(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error);
                      });

                      
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+ errorMessage);
                });

        }
        else{
            //for signIn form

            //api call
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
            
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+ errorMessage);
                });
        }

    }

  return (

    <div>
        <Header/>

        <div className='absolute bg-gradient-to-b from-black'>
            <img 
            className='h-screen w-screen object-cover '
            src={BG_URL}
            alt='bg-img'
            />
        </div>
        
        <form 
        onSubmit={(e)=>e.preventDefault()}//to preventDefault action of button
        className='w-[80%] md:w-[500px]  absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {
                !isSignInForm && <input
                                    ref={name}
                                     type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
            }

            <input
                ref={email}
                type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'
            />

            <input 
                ref={password}
                type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' 
            />

            <p className='font-bold text-red-500 text-lg py-2'>{errorMessage}</p>

            <button 
                className='p-4 my-6 bg-red-700 w-full rounded-lg'
                onClick={handleClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className='py-4 cursor-pointer' onClick={tooggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."} 
            </p>

        </form>

    </div>
  )
}

export default Login
