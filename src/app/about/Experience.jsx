import Image from 'next/image';
import React from 'react';

const Experience = () => {

    const activeColor = "#d62976";
    
    const secondaryColor = "#769656";
 
    return (
        <div className='text-left space-y-4 '>
        <div className=' border-gray border-l-2'>
            <span className='mb-3 pl-2 text-gray-400'>2023-2024</span> <br />
            <span className='mb-3 pl-2 font-semibold'>MERN Stack Developer(Level-1)</span><br />
            <span className='mb-3 pl-2 text-gray-400'>Programming Hero</span> <br />
        </div>
        <div className=' border-gray border-l-2'>
            <span className='mb-3 pl-2 text-gray-400'>2023-2024</span> <br />
            <span className='mb-3 pl-2 font-semibold'>Full Stack Web Developer(Level-2)</span><br />
            <span className='mb-3 pl-2 text-gray-400'>Programming Hero</span> <br />
        </div>       
        </div>
    );
};

export default Experience;