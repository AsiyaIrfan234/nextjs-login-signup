"use client";
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div>     
      <nav className='bg-gray-500 text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col sm:flex-row justify-between items-center'>
        <div className='mb-4 sm:mb-0'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold'>
            <a href='#!'>Asiya Irfan</a>
          </h1>
        </div>
        <div className='w-full sm:w-auto mb-4 sm:mb-0'>
          <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5'>
            <li><Link href="/" className='hover:text-black'>Home</Link></li>
            <li><Link href="/aboutus" className='hover:text-black'>About Us</Link></li>
            <li><Link href="contactus" className='hover:text-black'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='w-full sm:w-auto'>
          <ul className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
            <li><Link href="#!"  className='hover:text-black'>Login</Link></li>
            <li><Link href="#!"  className='hover:text-black'>Signup</Link></li>
          </ul>
        </div> 
      </nav> 
    </div>    
  )
}

export default Navbar 