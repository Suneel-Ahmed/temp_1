import React from 'react'
import Image from 'next/image'
import logo from '/public/images/UI/logo.png'
const Nav = () => {
  return (
    <div className='w-full h-[120px]  bg-black px-[200px] fixed  text-white text-[50px] flex justify-between items-center text-center' >
      <div>
        <Image width={500} height={500} src={logo} alt='logo' className='w-[90px] h-auto' />
      </div>
      <div>
        <h1 className='text-[40px]'>

      ALEXANDRE CARTILLIER
        </h1>
      </div>
      <div className='flex justify-center items-center ' >
        <ul className='inline-flex gap-[25px]     text-[14px] ' >
          <li className=' flex items-center' >Accueil</li>
          <li>
            <div className='h-[55px] w-[2px] bg-white' ></div>
          </li>
          <li className=' flex items-center' >Services</li>
          <li>
            <div className='h-[55px] w-[2px] bg-white' ></div>
          </li>
          <li className=' flex items-center' >Références</li>
          <li>
            <div className='h-[55px] w-[2px] bg-white' ></div>
          </li>
          <li className=' flex items-center' >À propos</li>
          
        </ul>
      </div>

    </div>
  )
}

export default Nav