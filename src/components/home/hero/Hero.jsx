import React from 'react'
const Hero = () => {
  return (
    <div className='w-full h-[89vh] mt-[120px]  bg-gray-950' >
        <video autoPlay muted loop className='w-full h-full  object-fill'>
					<source src='/images/hero/hero.mp4' type='video/mp4' />
					Video not supported
				</video>
        </div>
  )
}

export default Hero