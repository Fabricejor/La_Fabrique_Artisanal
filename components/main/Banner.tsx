"use client";
import React from "react";
import Image from "next/image";

export default function Banner() {
    return (
        <header className="w-full h-full mt-14 flex flex-row items-center gap-10 justify-between px-10">
            <div className="FISRTTEXT flex flex-col basis-2/6">
                <h1 className="text-black text-3xl font-normal capitalize leading-7">
                    LA Fabrique Artisanal Présentation
                </h1>
                <h3 className="text-black text-1xl text-justify font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                    praesentium, mollitia enim consequuntur autem quod. Deleniti,
                    accusamus dolor! Doloremque, quisquam! Officia, dolore quaerat magni
                    accusamus maiores magnam facilis exercitationem!
                </h3>
                <button type="button" className="bg-black text-white p-2 mt-4 w-40  transition duration-500
                hover:bg-white hover:text-black hover:ring-2 hover:ring-black "> Shop now!</button>
            </div>
            <div className="BIGIMAG w-full flex flex-row   overflow-hidden bg-cover bg-no-repeat items-center justify-between basis-2/6 ">
                <Image
                    src="/banner.jpeg"
                    width={300}
                    height={300}
                    className="w-full  img1 bg-black  rounded object-cover transition duration-1000 ease-in-out hover:scale-110"
                    alt="banner image"
                />
            </div>
            <div className="OHTERIMAGE w-full flex flex-col gap-y-7 items-center justify-evenly  overflow-hidden basis-2/6 ">
                <div className="overflow-hidden">
                    <Image
                        src="/sacrouge.jpeg"
                        width={200}
                        height={200}
                        className="w-[100%] rounded  object-cover transition duration-1000 ease-in-out hover:scale-110"
                        alt="banner image"
                    />
                </div>
                <div className="overflow-hidden">
                    <Image
                        src="/sacnoir.jpeg"
                        width={200}
                        height={200}
                        className="w-[100%] rounded object-cover transition duration-1000 ease-in-out hover:scale-110"
                        alt="banner image"
                    />
                </div>
            </div>
        </header>
    );
}
