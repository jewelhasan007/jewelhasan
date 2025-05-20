import Image from 'next/image';
import React from 'react';

const Education = () => {

    const activeColor = "#d62976";
    
    const secondaryColor = "#769656";
 
    return (
        <div className='text-left space-y-4 '>
        <div className=' border-gray-400 border-l-2'>
            <span className='mb-3 pl-2 text-gray-400'>2004-2009</span> <br />
            <span className='mb-3 pl-2 font-semibold'>BSc in EEE</span><br />
            <span className='mb-3 pl-2 text-gray-400'>KUET, Bangladesh.</span> <br />
        </div>
            
        </div>
    );
};

export default Education;