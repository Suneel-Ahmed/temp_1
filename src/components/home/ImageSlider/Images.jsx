import React from 'react'
import Image from 'next/image';
const Images = ({ src, unoptimized = false }) => {
  return (
    <div className='w-full h-full relative  rounded-3xl  overflow-hidden'>
    <div className='w-[85%] h-full mx-auto relative overflow-hidden'>
        <Image
            src={src}
            alt={src}
            fill
            sizes='22vw'
            unoptimized={unoptimized}
            className='object-contain object-center'
            priority
        />
    </div>
</div>
  )
}

export default Images