"use client";
import React from "react";
import Image from "next/image"
import {TypeAnimation} from "react-type-animation";
const HeroSection = ()=> {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
            <div className="col-span-7 place-self-center place-items-center text-center sm:text-left grid lg:place-items-start">
            <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                <span className="text-transparent bg-clip-text  bg-gradient-to-r from-amber-300 to-orange-600">Hello, I'm{" "}</span>
                <div>
                    <TypeAnimation
                        sequence={[
                            'Adam',
                            3000,
                            'Backend Developer',
                            3000,
                            'Frontend Developer',
                            3000,
                        ]}
                        wrapper="span"
                        speed={70}
                        repeat={Infinity}
                    />
                </div>
            </h1>
            <div>
                <p className="text-[#ADB7BE] text-lg  lg:text-xl">
                    “In order to be knowledgeable in these changing times, we must pursue a constant program of self-improvement, a never-ending journey into new fields of knowledge and learning.”
                </p>
                <div  className="text-[#ADB7BE] text-lg mb-6 lg:text-xl text-right">~ Og Mandino</div>
            </div>
            <div>
                <button className="px-9 py-2 w-full text-md sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-amber-500 to-orange-800 hover:bg-slate-200 text-white">Contact</button>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
                    <Image src="/images/avatar.png" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300} alt="avatar image"/>
                </div>
            </div>
        </section>
    )
}
export default HeroSection