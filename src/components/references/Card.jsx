import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({image , title , para , link , linkText }) => {
  return (
    <div   className="w-full h-screen max-xl:justify-center max-xl:mt-[30px]  max-xl:flex-col flex items-center justify-between">
    <div className="text-white max-sm:mt-[20px] max-xl:order-2 flex flex-col gap-[30px] justify-center max-xl:w-full items-center w-1/2 text-[20px]">
      <h1 className="text-center text-[clamp(20px,3vw,40px)]">
        {title}
      </h1>
      <p className="text-center  text-[clamp(16px,2vw,18px)] w-[80%] ">
        {para}
      </p>
      {link &&  <Link href={link} className="text-center text-[clamp(18px,2vw,24px)]">{linkText}</Link> }
    </div>
    <div  className="text-white max-xl:flex max-xl:justify-center max-xl:items-center max-xl:order-1 w-1/2 px-[40px] max-xl:w-full text-[20px]">
      <Image
        src={image}
        alt={title}
        className="w-full max-sm:w-full max-xl:w-[70%]  h-auto"
        title={title}
        width={500}
        height={500}
      />
    </div>
  </div>
  )
}

export default Card