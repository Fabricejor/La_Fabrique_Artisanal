'use client'
import React from 'react'
import Image from 'next/image'

interface Props {
    name: string,
    image: string,
    height: number,
    width: number,
    price: number,
    sale: number,
    quantity: string,
}
export default function ShopCard({name,image,height,width,price,sale,quantity}:Props) {
    return (
        <div className='CARDSHOP flex flex-col mb-4'>
            <Image src={image} height={height} width={width} className="h-full w-full rounded-lg" alt={name}/>
            <h3 className='text-black text-2xl'>{name}</h3>
            <h4 className='text-amber-500 text-1xl'>{price} XOF</h4>
            <h5>{quantity}</h5>
            <h5>{sale}%</h5>
        </div>
    )
}
