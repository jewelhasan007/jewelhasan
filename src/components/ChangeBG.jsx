"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ChangeBG = () => {

    const backgroundImages = [
        'bg-[url("/bg1.jpg")]',
        'bg-[url("/bg2.jpg")]',
        'bg-[url("/bg3.jpg")]',
        'bg-[url("/bg4.jpg")]',
        'bg-[url("/bg5.jpg")]',
        'bg-[url("/bg6.jpg")]', 
        
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    },[]);

    return (
        <div>
            <div className={`flex justify-center items-center h-screen bg-cover bg-center ${backgroundImages[currentImage]} `}>
                
                <h1 className="text-4xl font-bold text-white">Change Background Example</h1>

                  {/* style={{ backgroundImage: backgroundImages[Math.floor(Math.random() * backgroundImages.length)] }} */}
                  {/* transition-all duration-500 ease-in-out */}

            </div>
        </div>
    );
};

export default ChangeBG;