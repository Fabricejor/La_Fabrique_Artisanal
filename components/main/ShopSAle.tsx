import React from 'react'
import { lastshop } from '../constants'
import ShopCard from '../sub/ShopCard'

export default function ShopSAle() {
  return (
    <div className='w-full h-full mt-4 p-4  flex flex-col'>
      <div className='w-full h-full'>
        <h1 className='text-black text-2xl w-full'>News Stocks shop</h1>
      </div>
      <div className='SHOPCONTAINER justify-around items-center  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-0 max-sm:justify-items-center'>
        {
            lastshop.map((item, index)=>(
                <ShopCard 
                key={index}
                image={item.image}
                height={item.height}
                width={item.width}
                name={item.name} 
                price={item.price}
                sale={item.sale} 
                quantity={item.quantity}
                />
            )

            )
        }

      </div>
    </div>
  )
}
