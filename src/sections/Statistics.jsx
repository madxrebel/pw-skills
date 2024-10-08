import Image from 'next/image'
import React from 'react'
import { statistics } from '@/constants'

const Statistics = () => {
  return (
    <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
            <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center'>❝Pure Hardwork, No Shortcuts!❞</p>
            <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
            <div className='w-full flex flex-wrap justify-evenly'>
                {
                    statistics.map(stat => (
                        <div 
                            key={stat.label}           className='w-46 flex flex-col items-center mb-12'>
                            <Image 
                                src={stat.src}
                                alt='statistics image'
                                width={44}
                                height={44}
                                className='w-44 h-44'
                            />
                            <p className='text-3xl font-bold text-white'>{stat.value}</p>
                            <p className='text-3xl font-bold text-gray-500'>{stat.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Statistics
