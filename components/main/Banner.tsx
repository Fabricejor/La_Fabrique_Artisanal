'use client'
import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
        <header className='w-full h-full mt-28 bg-white flex flex-row items-center justify-between px-10'>
            <div className='FISRTTEXT flex flex-col w-[40%]'>
                <h1 className='text-black text-3xl font-normal capitalize leading-5'>LA Fabrique Artisanal Présentation</h1>
                <h3 className='text-black text-1xl text-justify font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium, mollitia enim consequuntur autem quod. Deleniti, accusamus dolor! Doloremque, quisquam! Officia, dolore quaerat magni accusamus maiores magnam facilis exercitationem!</h3>
                <button type='button'> Shop now!</button>
            </div>
            <div className='BIGIMAG w-full flex flex-row justify-between'>
                <Image src="/banner.jpeg" width={100} height={100} className='' alt='banner image' />
                <div className='OHTERIMAGE w-full flex flex-col'>
                    <Image src="/sacrouge.jpeg" width={50} height={50} alt='banner image' />
                    <Image src="/sacnoir.jpeg" width={50} height={50} alt='banner image' />
                </div>
            </div>

        </header>
    )
}
