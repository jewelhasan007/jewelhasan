import Image from 'next/image';
import React from 'react';

const MyStory = () => {

    const activeColor = "#d62976";
    
    const secondaryColor = "#769656";
 
    return (
          <div className='lg:text-1xl lg:text-left text-center space-y-4'>
        <p className='mb-2'>I build web pages with clean code and creative UI. Worked as an Frontend Developer.</p> <br />
        <p className='mb-2'>My journey began in 2022 and continues through 2024 as a student at <span>Programming Hero</span>. Along the way, I've developed a passion for clean, efficient code and knowledge-sharing whether through participating in various projects.</p><br />
        <p className='mb-2'>I believe technology holds the power to transform lives and communities. My mission is to use my skills to build impactful solutions that truly make a difference.</p> <br />
        </div>
    );
};

export default MyStory;