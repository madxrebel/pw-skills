import { iso, logo } from '@/assets/images'
import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12'>
        <div className='mb-2 flex flex-col items-center'>
            <Image src={logo} alt='logo' className='w-40 h-16'/>
            <p className='my-4'>Email us: support@pwskills.com</p>
            <Image src={iso} alt='iso' width={32} height={32} className='w-32 h-32' />
        </div>
        {
          footerLinks.map(section => (
            <div key={section.title} className='mx-auto'>
                <h2 className='font-bold text-xl mt-4'>{section.title}</h2>
                <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
                <ul className=''>
                  {
                    section.links.map(link => (
                      <li key={link.name}>{link.name}</li>
                    ))
                  }
                </ul>
              </div>
          ))
        }
    </footer>
  )
}

export default Footer
