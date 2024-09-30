'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FollowUs() {
    const [SwitchImage, setSwitchImage] = useState(true);

    return (
        <div className='w-full h-full mt-4 bg-[#FEF4D8] p-10 flex flex-col items-center '>
            <h1 className='text-black text-justify text-3xl mb-4 max-sm:text-nowrap max-sm:text-2xl'> Rejoignez notre réseau</h1>
            <h3 className='text-black text-1xl font-mono font-thin'> #LaFabriqueArtisanal</h3>
            <Link href='https://www.instagram.com/la_fabriq_artisanale?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
             className=' w-[300px] mt-4 '
                onMouseEnter={() => setSwitchImage(!SwitchImage)}
                onMouseLeave={()=> setSwitchImage(!SwitchImage)}>
                    {SwitchImage ? 
                <Image src='/LOGO_LFA_PP1.png' className='w-full h-[50vh] rounded-sm' style={{borderRadius:'47% 38% 33% 67% / 80% 53% 47% 20% '}} alt='Follow-us' width={500} height={500} />
                    :
                    <Image src='/LOGO_LFA_PP2.png' className='w-full h-[50vh] rounded-sm' style={{borderRadius:'54% 46% 56% 44% / 36% 34% 66% 64% '}} alt='Follow-us' width={500} height={500} />

                    }
            </Link>
        </div>
    )
}
