import Link from 'next/link';
import React from 'react';

const amI = [
    {id:1, "title":"E-commerce website", "description":"Develop a scalable e-commerce platform with React/Next.js frontend, Node.js backend, and MongoDB/PostgreSQL database. Features: product catalog, cart/checkout, user auth, payment gateways (Stripe/PayPal), admin dashboard, order tracking, and SEO optimization. Supports PWA, dark mode, and multi-vendor marketplace. Built for performance, security, and mobile responsiveness.", "image": './tiktalk.jpg', "website":"https://book-review-website-roan.vercel.app/" },
    {id:2, "title":"Service Related Website", "description":"Develop a professional service website with Next.js featuring service listings, booking system, user accounts, and payment integration. Includes admin dashboard, customer reviews, and service filtering. Built with responsive design, SEO optimization, and analytics. Backend with Node.js/Express and MongoDB. Supports multi-language, dark mode, and PWA for offline access.", "image": './SEO.png', "website":"https://car-doctor-pro-copy.vercel.app/" },
    {id:3, "title":"Restaurent/ Food Business", "description":"Build a high-performance restaurant/food business website with online ordering, table reservations, and dynamic menus. Features: Next.js for SEO, Firebase for real-time orders, Stripe/PayPal payments, admin dashboard, and responsive UI. Supports multi-language, dark mode, and analytics. Scalable backend with Node.js/MongoDB. Fully customizable for any cuisine concept.", "image": './google.jpg', "website":"https://bristo-boss-client.vercel.app/" },
    {id:4, "title":"New/ Blog Portal", "description":"Build a modern blog portal with Next.js for SEO-friendly content. Features: Markdown/rich text editor, user auth, comments, tags/categories, search, and analytics. Includes dark mode, responsive design, and SSR/ISR for performance. Backend with Node.js/MongoDB or headless CMS. Supports subscriptions, newsletters, and admin dashboard for content management.", "image": './facebook-instagram.jpg', "technology":"React", "website":"https://jewelhasan.vercel.app/"},
   
    
   
]
const page = () => {
  const menuColor = "#769656";
   const activeColor = "#d62976";
    return (
      
          <div  className='mt-3 '>
           
  <h2 className="lg:text-center font-bold text-[#769656] text-4xl">
    
   Featured Projects
  </h2>
<div className='grid lg:grid-cols-1 lg:place-items-center gap-10 m-3 p-3'>
             {
            amI.map((item)=>(

                 <div key={item.id} className="flex justify-between bg-base-100 shadow-sm  min-h-[400px] shadow-indigo-500/50 ">
  <figure className=" w-3/5 px-10 pt-10">
    <iframe
  src={`${item.website}`}
  className="w-full h-screen"
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
  allow="fullscreen"
/>
    {/* <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl"
      width='550px'
      height='550px' /> */}
  </figure>
  <div className=" w-2/5 text-center p-10">
    <h2 className="card-title mb-3">{item.title}</h2>
    <p className='text-justify'>{item.description}</p>
    <button className='btn  mt-4'><Link href={`${item.website}`}>Explore Details</Link></button>
  </div>
</div>
            ))
           }
           </div>
          </div>
     
    );
};

export default page;