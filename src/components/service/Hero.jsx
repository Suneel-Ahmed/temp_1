"use client"
import React , {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'




const Hero = () => {

  const serviceContainer  = useRef();
  const heading = useRef()
  const paragraph = useRef()
  useGSAP(()=>{
    gsap.timeline().fromTo( heading.current , {
      alpha : 0
    },{alpha : 1,
       duration: 1,
        ease: "power2.inOut"
    })
    .to(paragraph.current , {alpha : 1 ,  duration: 1,
      ease: "power2.inOut"} , "<")




  },{scope : serviceContainer})



  return (
    <div ref={serviceContainer} className='w-full flex relative px-[200px] max-xl:px-[100px] max-lg:px-[50px] flex-col bg-cover  bg-center bg-[url("/images/services/hero/banner.jpg")] justify-center gap-[20px] items-center h-screen' >
    <h1 ref={heading} className='text-white opacity-0 text-center z-10 text-[clamp(30px,5vw,60px)] ' >POST-PRODUCTION COMPLÈTE</h1>
    <p ref={paragraph} className='text-white opacity-0 text-center w-[60%] z-10 text-[clamp(16px,3vw,30px)]' >En tant que technicien monteur je suis capable de prendre en charge 
    toutes les étapes de la post-production.</p>

    <div className='w-full absolute top-0 left-0 h-full  bg-black/70' >

    </div>
</div>
  )
}

export default Hero