import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen px-6 md:px-24 absolute bottom-10 lg:bottom-40 text-white z-20'>
      <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/3 '>{overview}</p>

      <div className='my-4 md:my-0'>
        <button className='bg-white text-black px-3 py-2  md:py-3 md:px-8 text-xl rounded-lg hover:bg-opacity-80'>
           ▶️ Play
        </button>

        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white py-3 px-8 text-xl bg-opacity-50 rounded-lg'>
           More Info
        </button>
      </div>

    </div>
  )
}

export default VideoTitle;
