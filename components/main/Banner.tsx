'use client'
import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
        <header className='w-full h-full mt-14 flex flex-row items-center gap-10 justify-between px-10'>
            <div className='FISRTTEXT flex flex-col basis-2/6'>
                <h1 className='text-black text-3xl font-normal capitalize leading-7'>LA Fabrique Artisanal Présentation</h1>
                <h3 className='text-black text-1xl text-justify font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium, mollitia enim consequuntur autem quod. Deleniti, accusamus dolor! Doloremque, quisquam! Officia, dolore quaerat magni accusamus maiores magnam facilis exercitationem!</h3>
                <button type='button'> Shop now!</button>
            </div>
            <div className='BIGIMAG w-full flex flex-row   overflow-hidden bg-cover bg-no-repeat items-center justify-between basis-2/6 '>
                <Image src="/banner.jpeg" width={200} height={200} className='w-full img1 bg-black  rounded object-cover transition duration-300 ease-in-out hover:scale-110' alt='banner image' />
              
            </div>
            <div className='OHTERIMAGE w-full flex flex-col items-center justify-evenly basis-2/6 '>
                    <Image src="/sacrouge.jpeg" width={200} height={200}className='w-[100%] rounded mb-6' alt='banner image' />
                    <Image src="/sacnoir.jpeg" width={200} height={200} className='w-[100%] rounded ' alt='banner image' />
                </div>
        </header>
    )
}
