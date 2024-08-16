import React from 'react'
import Image from 'next/image'

import mail_icon from '../../../public/images/UI/footer/mail.svg'
import call_icon from '../../../public/images/UI/footer/call.svg'


const Footer = () => {
  return (
    <footer className='mt-auto ' >
      <div className='flex  px-[200px] text-white justify-center items-center gap-[50px] h-[150px]' >
              <h1 className='text-[20px]' >Contact</h1>
              <div className='w-[3px] h-[91px] bg-white rounded-[20px]' />
              <div className='flex gap-[40px]' >
                <div className='flex items-center gap-[10px]' >
                  <Image src={mail_icon} className='w-[20px] h-auto' alt='alexctlr.pro@gmail.com' title='alexctlr.pro@gmail.com' width={500} height={500} />
                  <p>  alexctlr.pro@gmail.com</p>
                </div>
                <div className='flex items-center gap-[10px]' >
                <Image src={call_icon} className='w-[20px] h-auto' alt='07 81 51 29 09' title='07 81 51 29 09' width={500} height={500} />
                  <p>07 81 51 29 09</p>
                </div>

              </div>
      </div>
      <div className='text-center py-3 bg-white' >
      ©2024 Alexandre Cartillier - Mentions légales
      </div>

    </footer>
  )
}

export default Footer