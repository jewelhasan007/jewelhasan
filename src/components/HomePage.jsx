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
import Technology from './Technology';
import ChangeBG from './ChangeBG';

const HomePage = () => {


  
    return (
        <div className='sm:text-center md:text-left lg:text-left mt-[70px]'>
       {/* Title  */}
            <div >
               <div className='flex justify-center md:justify-start lg:justify-start'>
                 <button className='bg-gray-100 m-3 p-3 font-bold text-[12px] rounded-3xl'>Web Developer</button>
                <button className='bg-gray-100 m-3 p-3 font-bold text-[12px] rounded-3xl'>Full Stack Developer</button>
                <button className='bg-gray-100 m-3 p-3 font-bold text-[12px] rounded-3xl'>MERN Stack Developer</button>
                <button className='bg-gray-100 m-3 p-3 font-bold text-[12px] rounded-3xl'>Digital Marketer</button>
               </div>
                 <h1 className=' text-7xl px-3 mt-3 sm:text-center md:text-left lg:text-left  '><span className='font-bold'>Innovative </span> Solutions  </h1>
                 <h1 className=' text-7xl px-3 mb-3 sm:text-center md:text-left lg:text-left  '>For <span className='text-yellow-400'>Digital</span> Excellence</h1>
                                                            
                <div className='space-y-5 px-5'>    

                
                <h1 className='text-2xl mt-7' >
                    <TypeAnimation
        sequence={[
        "Hey, I'm Jewel Hasan. I'm a Web Developer",
          3000,
          "Hey, I'm Jewel Hasan. I'm a Full-Stack Web Developer",
          3000,
          "Hey, I'm Jewel Hasan. I'm a MERN Stack Developer",
          3000,
          "Hey, I'm Jewel Hasan. I'm a Front-End Developer",
          3000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1em' }}
      />
                </h1>
                <div className='flex lg:max-w-4/12 justify-center md:justify-start lg:justify-start'>
                   <Link href='/contact' className=' bg-green-200 p-2 m-3 text-[12px] text-green-800 rounded-3xl'>Book a Call <IoCallOutline className='ml-1'></IoCallOutline></Link>
                <div className='  justify-center md:justify-start lg:justify-start font-bold'>
                 
                  <p className='bg-green-200 p-3 m-3 pl-6 text-[12px] text-green-800 rounded-3xl'>
                     <svg 
        className="absolute  h-4 w-4 animate-ping" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="5" fill="none" stroke="green" strokeWidth="4" />
      </svg>
                  Available for new project</p>
                </div>
                </div>
               </div>
             <div className='lg:max-w-4/12 flex justify-center md:justify-start lg:justify-around text-2xl'>
                <RiGithubLine />
                <LuLinkedin />
                <TbBrandTwitter />
             </div>
                <WhoAmI></WhoAmI>
                <Technology></Technology>
                
            </div>
        </div>
    );
};

export default HomePage;