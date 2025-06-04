"use client"
import React, { useEffect, useState } from 'react';

const Technology = () => {

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
        <div className={`h-screen bg-cover bg-center ${backgroundImages[currentImage]} `}>
            <div>
                <h1 className="text-4xl lg:text-center  font-bold text-center mt-10 text-yellow-400">Technologies I Use</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mt-10 p-5'>
                {
                tech.map((item) => (
                    <div key={item.id} className="card bg-base-100 w-65 shadow-sm m-7 ">
                        <figure className=" p-10 ">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl"
                                width='100px'
                                height='100px'
                            />
                        </figure>
                       
                    </div>
                ))
            }
            </div>
        </div>
    );
};

const tech = [
    {id:1, "title":"HTML","image": './html-5.png'},
    {id:2, "title":"CSS", "image": './css-3.png' },
    {id:3, "title":"Tailwind CSS","image": './tailwind.png'},
    {id:4, "title":"JS","image": './js.png'},
    {id:5, "title":"React", "image": './react.png' },
    {id:6, "title":"NextJS","image": './nextjs.png'},
    {id:7, "title":"MongoDB","image": './mongodb.png'},
    {id:8, "title":"Postgres","image": './postgre.png'},
]

export default Technology;