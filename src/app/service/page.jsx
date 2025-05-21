import React from 'react';

import Cart2 from './Cart2';



const page = () => {
       const menuColor = "#769656";
   const activeColor = "#d62976";
    return (
        <div className='mt-[70px]'>
            <h1 className="lg:text-center font-bold text-[#769656] text-4xl">How Can I Help?</h1>
            <Cart2></Cart2>
        </div>
    );
};

export default page;