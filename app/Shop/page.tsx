'use client'
import { useState } from "react";

export default function Shop() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-64 p-4 border rounded-lg">
      {/* Section image */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image du produit */}
        <img
          src="https://via.placeholder.com/300" // Remplace par l'URL de ton image
          alt="Alpha Mini"
          className="w-full"
        />

        {/* Badge "Out of Stock" */}
        <span className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded-sm">
          Out Of Stock
        </span>

        {/* Badge de réduction */}
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-sm">
          -69%
        </span>

        {/* Icônes qui apparaissent au survol */}
        <div
          className={`absolute inset-0 flex justify-center items-center gap-4 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Icone de recherche */}
          <div className="bg-white p-2 rounded-full cursor-pointer">
            🔍
          </div>

          {/* Icone de favori */}
          <div className="bg-white p-2 rounded-full cursor-pointer">
            ❤️
          </div>
        </div>

        {/* Bouton "Read More" au bas */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          READ MORE
        </div>
      </div>

      {/* Description du produit */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">ALPHA MINI (161)</h2>
        <p className="text-sm text-gray-500 line-through">₦135,000.00</p>
        <p className="text-xl text-red-500">₦42,000.00</p>
      </div>
    </div>
  );
}
