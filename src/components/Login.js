import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setSignInForm]=useState(true);

    const tooggleSignInForm =()=>{
        setSignInForm(!isSignInForm);
    };

  return (

    <div>
        <Header/>

        <div className='absolute'>
            <img 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg'
            />
        </div>
        
        <form className='w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {
                isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
            }

            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
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
