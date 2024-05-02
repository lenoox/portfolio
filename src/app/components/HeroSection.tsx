"use client";
import React from "react";
import Image from "next/image"
import {TypeAnimation} from "react-type-animation";
const HeroSection = ()=> {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
            <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
            <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                <div className="text-transparent bg-clip-text  bg-gradient-to-r from-sky-400  to-blue-600">Hello, I'm{" "}</div>
                <div>
                    <TypeAnimation
                        sequence={[
                            'Adam',
                            2000,
                            'Fullstack Developer',
                            2000,
                            'Frontend Developer',
                        ]}
                        wrapper="span"
                        speed={70}
                        repeat={Infinity}
                    />
                </div>
            </h1>
            <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div>
                <button className="px-1 py-1 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-800  via-blue-500 to-sky-300 hover:bg-slate-200 text-white">Contact</button>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
                    <Image src="/images/image.jpg" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300} alt="avatar image"/>
                </div>
            </div>
        </section>
    )
}
export default HeroSection