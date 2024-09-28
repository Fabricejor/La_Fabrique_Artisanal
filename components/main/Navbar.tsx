import React from 'react'
import { FaSearch ,FaRegUser , FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='w-full h-[65px] bg-white fixed top-0 shadow-lg shadow-[#2AOE61]/50 
    flex flex-row items-center  justify-between   z-50 px-10 py-10'>
      <div className='NAVLINK  flex flex-row justify-between gap-3'>
        <Link href="/" className='text-black        customlink block relative after:absolute after:rounded-[5px] after:bg-current after:origin-bottom-right after:h-[1px] after:left-0 after:bottom-0 after:scale-x-0 after:duration-150 after:ease-out after:w-[100%] hover:after:scale-x-50 hover:after:origin-bottom-left' >Home</Link>
        <Link href="/Shop" className='text-black    customlink block relative after:absolute after:rounded-[5px] after:bg-current after:origin-bottom-right after:h-[1px] after:left-0 after:bottom-0 after:scale-x-0 after:duration-150 after:ease-out after:w-[100%] hover:after:scale-x-50 hover:after:origin-bottom-left' >Shop</Link>
        <Link href="/Contact" className='text-black customlink block relative after:absolute after:rounded-[5px] after:bg-current after:origin-bottom-right after:h-[1px] after:left-0 after:bottom-0 after:scale-x-0 after:duration-150 after:ease-out after:w-[100%] hover:after:scale-x-50 hover:after:origin-bottom-left' >Contact</Link>
      </div>
      <div className='NAVLOGO'>
            <Link href="/"><Image src='/LOGO_LFA.png' width={150} height={150} alt='logo'/></Link>
      </div>
      <div className='NAVICON flex flex-row justify-between gap-5'>
        <FaSearch  className='text-black'/>
        <FaRegUser  className='text-black'/>
        <FaRegHeart  className='text-black'/>
        <HiOutlineShoppingBag  className='text-black'/>
      </div>
    </nav>
  )
}
