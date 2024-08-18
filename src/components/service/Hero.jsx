import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex relative px-[200px] max-xl:px-[100px] max-lg:px-[50px] flex-col bg-cover  bg-center bg-[url("/images/services/hero/banner.jpg")] justify-center gap-[20px] items-center h-screen' >
    <h1 className='text-white text-center z-10 text-[60px]' >POST-PRODUCTION COMPLÈTE</h1>
    <p className='text-white text-center w-[60%] z-10 text-[30px]' >En tant que technicien monteur je suis capable de prendre en charge 
    toutes les étapes de la post-production.</p>

    <div className='w-full absolute top-0 left-0 h-full  bg-black/70' >

    </div>
</div>
  )
}

export default Hero