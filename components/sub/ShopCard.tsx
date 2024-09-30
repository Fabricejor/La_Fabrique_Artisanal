'use client'
import React from 'react'
import { useState } from "react";
import Image from 'next/image'
import { FaSearch, FaHeart } from "react-icons/fa";
import Link from 'next/link';



interface Props {
    name: string,
    image: string,
    height: number,
    width: number,
    price: number,
    sale: number,
    quantity: string,
}
export default function ShopCard({ name, image, height, width, price, sale, quantity }: Props) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative  w-full p-4 ">
            {/* Section image */}
            <div
                className="relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image du produit */}
                <Image
                    src={image} // Remplace par l'URL de ton image
                    alt={name}
                    height={height}
                    width={width}
                    className="w-full max-h-full"
                />

                {/* Badge "Out of Stock" */}
                <span className="absolute top-2 left-2 bg-white text-black text-[0.6rem] px-2 py-1 rounded-sm">
                    {quantity}
                </span>

                {/* Badge de réduction */}
                <span className="absolute top-2 right-2 bg-orange-500 text-white text-[0.6rem] px-2 py-1 rounded-sm">
                    -{sale} %
                </span>

                {/* Icônes qui apparaissent au survol */}
                <div
                    className={`absolute inset-0 flex justify-center items-center gap-4 bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Icone de recherche */}
                    <div className="relative group">
            <div className="bg-white p-4 rounded-full cursor-pointer duration-700 transform hover:bg-black hover:text-white"><FaSearch/></div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
              <div className="bg-black text-white text-xs py-1 px-2 rounded-lg text-nowrap">
                Quick View
              </div>
              <div className="w-2 h-2 bg-black transform rotate-45 absolute -translate-y-1 top-full left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

                    {/* Icone de favori */}
                    <div className="relative group">
            <div className="bg-white p-4 rounded-full cursor-pointer duration-700 transform hover:bg-black hover:text-white"><FaHeart/></div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
              <div className="bg-black text-white text-xs py-1 px-2 rounded-lg">
                Wishlist
              </div>
              <div className="w-2 h-2 bg-black transform rotate-45 absolute -translate-y-1 top-full left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
                </div>

                {/* Bouton "Read More" au bas */}
                <Link href={'#'}
                    className={`absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transition-opacity duration-300 max-sm:p-4 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    READ MORE
                </Link>
            </div>

            {/* Description du produit */}
            <div className="mt-2 text-left max-sm:text-center">
                <h2 className="text-lg  font-semibold max-sm:text-xl">{name}</h2>
                <p className="text-sm text-gray-500 line-through">25,000xof</p> 
                <p className="text-[1rem] text-orange-400 max-sm:text-[1.2rem]">{price} XOF FCFA</p>
            </div>
        </div>
    )
}
