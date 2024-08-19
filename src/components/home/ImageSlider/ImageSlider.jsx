"use client"
import React , {useRef} from 'react'
import Images from './Images'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ImageSlider = () => {
    const industryLeaders  = [
        "/images/home/logos/logo_1.png",
        "/images/home/logos/logo_2.png",
        "/images/home/logos/logo_3.png",
        "/images/home/logos/logo_4.png",
        "/images/home/logos/logo_5.png",
        "/images/home/logos/logo_6.png",
        "/images/home/logos/logo_7.png",
        "/images/home/logos/logo_8.png",
        "/images/home/logos/logo_9.png",
        "/images/home/logos/logo_10.png",
        "/images/home/logos/logo_11.png",
        "/images/home/logos/logo_12.png",
        "/images/home/logos/logo_13.png",
        "/images/home/logos/logo_14.png",
        "/images/home/logos/logo_15.jpeg",
        "/images/home/logos/logo_16.png",
        "/images/home/logos/logo_17.png",
        "/images/home/logos/logo_18.png",
        "/images/home/logos/logo_19.png",
        "/images/home/logos/logo_20.png",
        "/images/home/logos/logo_21.png",
    ]

    const containerRef = useRef();
    const listRef = useRef();


    useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'center center',
						end: `+=${
							window.innerHeight * (window.innerWidth >= 1024 ? 1 : 3)
						}`,
						scrub: 1,
						pin: true,
						pinSpacing: true,
					},
				})
				.to(listRef.current, {
					x: (listRef.current.offsetWidth - window.innerWidth) * -1,
					ease: 'none',
				});
		},
		{ scope: containerRef }
	);



  return (
    <section
    ref={containerRef}
    id='industry-leaders'
    className='w-full h-fit bg-white overflow-hidden relative'
>

<ul ref={listRef} className='w-fit p-[4vw]  flex gap-[4vw]'>
				{industryLeaders.map((src, idx) => (
					<li
						key={src + idx}
						className='w-[clamp(200px,16vw,310px)] aspect-video'
					>
						<Images src={src} unoptimized />
					</li>
				))}
				{industryLeaders.map((src, idx) => (
					<li
						key={src + idx + 'v2'}
						className='w-[clamp(200px,16vw,310px)] aspect-video'
					>
						<Images src={src} unoptimized />
					</li>
				))}
			</ul>
</section>
  )
}

export default ImageSlider