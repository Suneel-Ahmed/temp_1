"use client"
import React , {useState } from 'react'
import { AiFillSound } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";


const Hero = () => {
    const [mute_icon , setMute_icon] = useState(true);
   
  return (
    <div className='w-full relative h-fit mt-[120px]  bg-gray-950' >
        <video autoPlay muted = {mute_icon}  playsInline loop className='w-full h-auto  object-fill'>
					<source src='/images/hero/hero.mp4' type='video/mp4' />
					Video not supported
				</video>
        <button className='absolute w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white bottom-10 right-10' >
          {
            mute_icon !== false ?
            <FaVolumeMute onClick={()=>setMute_icon(!mute_icon)} className='text-[clamp(25px,3vw,35px)]' />
            :
            <AiFillSound onClick={()=>setMute_icon(!mute_icon)} className='text-[clamp(25px,3vw,35px)]' />
          }
        </button>
        </div>
  )
}

export default Hero