"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WhoAmI from './WhoAmI';
import { TypeAnimation } from 'react-type-animation';
import { RiGithubLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { TbBrandTwitter } from "react-icons/tb";

const HomePage = () => {
    return (
        <div className='sm:text-center md:text-left lg:text-left'>
       {/* Title  */}
            <div >
                <button className='bg-gray-100 m-3 p-3 font-bold text-[12px] rounded-3xl'>Developer & Designer</button>
                 <h1 className=' text-7xl p-3 sm:text-center md:text-left lg:text-left text-shadow-lg/30 '>Hey, I'm Jewel Hasan</h1>
                                           
                <div className='space-y-5 px-5'>    

                
                <h1 className='text-2xl mt-7' >
                    <TypeAnimation
        sequence={[
        "I'm a Web Developer",
          3000,
          "I'm a Full-Stack Web Developer",
          3000,
          "I'm a MERN Stack Developer",
          3000,
          "I'm a Front-End Developer",
          3000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1em' }}
      />
                </h1>
                <div className='flex justify-center md:justify-start lg:justify-start'>
                   <Link href='/contact' className=' bg-green-200 p-3 m-3 text-[12px] text-green-800 rounded-3xl'>Book a Call <IoCallOutline className='ml-1'></IoCallOutline></Link>
                <button className='bg-green-200 p-3 m-3 text-[12px] text-green-800 rounded-3xl'>Available for new project</button>
                </div>
               </div>
             <div className='lg:max-w-2/12 flex justify-center md:justify-start lg:justify-around text-2xl'>
                <RiGithubLine />
                <LuLinkedin />
                <TbBrandTwitter />
             </div>
                <WhoAmI></WhoAmI>
            </div>
        </div>
    );
};

export default HomePage;