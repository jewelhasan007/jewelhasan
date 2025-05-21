import React from 'react';
import { TbWorldWww } from "react-icons/tb";


const carts = [
    {   "id" : 1,
        "title" : "Web Apps",
        "description": "Creating responsive, user-friendly websites and web applications with modern frameworks and technologies",
        "image" : "./port-key.jpg",
        "icon" : "<TbWorldWww />"

    },
    {   "id" : 2,
        "title" : "Creative Design",
          "description": "Developing unique brand identities that communicate values and connect with target audiences effectively.",
        "image" : "./port-content.jpg"
    },
    {   "id" : 3,
        "title" : "UI/UX Design",
          "description": "Creating intuitive product designs that solve real problems and deliver exceptional user experiences",
        "image" : "./port-web.jpg"
    }
]
const Cart2 = () => {
   const menuColor = "#769656";
   const activeColor = "#d62976";
    return (
        <div >
           
{/* Web Apps */}
    <div className='grid lg:grid-cols-2 lg:place-items-center gap-10 m-3 p-3 mt-7'>
     {
      carts.map((cart) => (

         <div key={cart.id} tabIndex={0} className="collapse bg-base-100 border-base-300 border">
  <div className="collapse-title font-extrabold text-3xl">
        <h1>{cart.title}</h1>
  </div>
  <div className="collapse-content text-sm space-y-3">
    {cart.description}
    <hr />
    <h1 className='font-bold text-2xl '>
      why you will get:
    </h1>
    <ol className='list-decimal list-inside pl-5'>
      <li>Professional consultation and planning.</li>
      <li>Customized solutions tailored to your needs.</li>
      <li>Ongoing support and maintenance</li>
    </ol>
  </div>
</div>

      ))

     }
    </div>
        </div>
    );
};

export default Cart2;