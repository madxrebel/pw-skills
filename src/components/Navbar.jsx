import { navLinks } from '@/constants'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='bg-indigo-200 flex justify-between items-center px-4 h-14 w-full md:px-4'>
            <a href="/" className='text-2xl text-indigo-700 font-bold'>PWSkills</a>
            <ul className='md:flex hidden font-semibold'>
                {
                    navLinks.map(link => (
                        <li key={link.label} className='mx-[10px]'>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer'>
                <a href="/">Login/Signup</a>
            </div>
            <div className='md:hidden'>
                <a href="#" className='text-4xl'>&#8801;</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
