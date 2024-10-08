import { carouselOne } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-auto'>
        <Image 
            src={carouselOne}
            width={1280}
            height={720}
            className='w-[100%] '
        />
    </section>
  )
}

export default Hero
