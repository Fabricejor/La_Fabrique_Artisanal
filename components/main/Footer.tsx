import React from 'react'
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-black w-full h-full flex flex-row justify-between p-4 items-center'>
            <div className='COPYRIGHT text-white Camela font-thin w-full'>COPYRIGHT &copy; ALL RIgh Reserved </div>
            <div className='LASTAG w-full'>
                <h1 className='text-white'>La Fabrique Artisanal</h1>
            </div>
            <div className='LOGOICON flex flex-row justify-between gap-4'>
                <Link 
                target='_blank' href='https://www.instagram.com/la_fabriq_artisanale?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                    className='text-white  border-[1px] w-[35px] h-auto p-2 rounded-[100%] 
                        transition duration-1000 hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' ><FaInstagram /></Link>
                <Link 
                target='_blank' href='#'    
                    className='text-white  border-[1px] w-[35px] h-auto p-2 rounded-[100%]
                    hover:bg-white hover:text-black' ><FaXTwitter /></Link>
                <Link 
                target='_blank' href='https://www.tiktok.com/@la.fabrique.art?_t=8pvcNHhLSj8&_r=1'
                    className='text-white  border-[1px] w-[35px] h-auto p-2 rounded-[100%]
                        hover:bg-gradient-to-r from-[#ff0050] to-[#00f2ea]'><FaTiktok /></Link>
                <Link 
                target='_blank' 
                    href='https://api.whatsapp.com/send/?phone=221761419042&text&type=phone_number&app_absent=0'
                        className='text-white  border-[1px] w-[35px] h-auto p-2 rounded-[100%]
                        hover:bg-green-600'><FaWhatsapp /></Link>
            </div>
        </footer>
    )
}
