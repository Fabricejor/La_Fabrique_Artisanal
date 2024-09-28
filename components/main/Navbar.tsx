import React from 'react'
import { FaSearch ,FaRegUser , FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='w-full h-[65px] bg-white fixed top-0 shadow-lg shadow-[#2AOE61]/50 
    flex flex-row items-center  justify-between   z-50 px-10'>
      <div className='NAVLINK  flex flex-row justify-between gap-3'>
        <Link href="/" className='text-black'>Home</Link>
        <Link href="/shop" className='text-black'>Shop</Link>
        <Link href="/contact" className='text-black'>Contact</Link>
      </div>
      <div className='NAVLOGO'>
            <Link href="/"><Image src='/LOGO_LFA.png' width={100} height={100} alt='logo'/></Link>
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
