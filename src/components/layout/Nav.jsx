"use client"
import React , {useState} from 'react'
import Image from 'next/image'
import logo from '/public/images/UI/logo.png'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation'



const Nav = () => {

  const [navToggle , setNavToggle] = useState(false)
  const pathname = usePathname()

  return (
    <>
    <div className='w-full h-[120px] z-[99] bg-black  px-[200px] max-xl:px-[100px] max-lg:px-[50px] fixed  text-white text-[50px] flex justify-between items-center text-center' >
      <div>
        <Image width={500} height={500} src={logo} alt='logo' className='w-[clamp(50px,4vw,90px)] h-auto' />
      </div>
      <div>
        <h1 className='text-[clamp(14px,2vw,40px)] raleway'>

      ALEXANDRE CARTILLIER
        </h1>
      </div>

      {/* large screen navbar  start */}
      <div className='flex max-md:hidden justify-center items-center ' >
        <ul className='inline-flex gap-[25px] max-lg:gap-[15px]     text-[14px] ' >
          <li className={` flex items-center raleway hover:text-white/80 ${pathname === "/" ? "text-white/80" : "text-white"  } `} > <Link href={'/'} > Accueil </Link></li>
          <li>
            <div className='h-[55px] w-[2px] bg-white' ></div>
          </li>
          <li className={` flex items-center raleway hover:text-white/80 ${pathname === "/services" ? "text-white/80" : "text-white"  } `} > <Link href={'/services'} > Services </Link> </li>
          <li>
            <div className='h-[55px] w-[2px] bg-white' ></div>
          </li>
          <li className={` flex items-center raleway hover:text-white/80 ${pathname === "/references" ? "text-white/80" : "text-white"  } `} > <Link href={'references'} > Références </Link> </li>
          <li>
            <div className='h-[55px] w-[2px] bg-white' ></div>
          </li>
          <li className=' flex items-center raleway ' >À propos</li>
          
        </ul>
      </div>
      {/* large screen navbar  end */}
      {/* mobile screen navbar  start */}
      <div className='max-md:flex relative hidden justify-center items-center ' >
        <FaBars onClick={()=>setNavToggle(!navToggle)} className='text-[clamp(20px,2vw,40px)]' />
      </div>
       
      {/* mobile screen navbar  end */}

    </div>
    <div 
        className={`fixed top-0 z-[999] left-0 w-full h-full bg-black transition-transform duration-1000 ease-in-out 
          ${navToggle ? 'translate-x-0' : 'translate-x-full'} 
          flex justify-center items-center  px-12 text-white z-40`}
      >         <div className=' absolute top-[50px]  text-right px-[50px] w-full flex justify-end text-white  ' >
          <RxCross2 onClick={()=>setNavToggle(false)} className='text-[clamp(20px,2vw,40px)]' />
         </div>
          <div className='w-full text-white flex justify-center items-center bg-black h-full py-[30px]' >
                <ul className='list-none text-[20px] flex items-center flex-col gap-[40px] text-center' >
                  <li className={` flex items-center raleway hover:text-white/80 ${pathname === "/" ? "text-white/80" : "text-white"  } `} ><Link onClick={()=>setNavToggle(false)} href={'/'} > Accueil </Link></li>
                  <li className='w-[62px] h-[3px] bg-white' ></li>
                  <li className={` flex items-center raleway hover:text-white/80 ${pathname === "/services" ? "text-white/80" : "text-white"  } `} > <Link onClick={()=>setNavToggle(false)} href={'/services'} > Services </Link> </li>
                  <li className='w-[62px] h-[3px] bg-white' ></li>
                  <li className={` flex items-center raleway hover:text-white/80 ${pathname === "/references" ? "text-white/80" : "text-white"  } `} > <Link onClick={()=>setNavToggle(false)} href={'references'} > Références </Link> </li>
                  <li className='w-[62px] h-[3px] bg-white' ></li>
                  <li>À propos</li>
                </ul>
          </div>
    </div>
    </>
  )
}

export default Nav