import React from 'react';

const amI = [
    {id:1, "title":"Web Developer","image": './2.png'},
    {id:2, "title":"A passionate Digital Marketer", "image": './1.png' },
    {id:3, "title":"Grow Your Business","image": './3.png'},
]

const WhoAmI = () => {


    return (
    
          <div  className='mt-3'>
           
  <h2 className="lg:text-center font-bold text-yellow-400 text-4xl">
    
    Who am I?
  </h2>
<div className='lg:grid lg:grid-cols-3 lg:place-items-center lg:gap-10 m-3 p-3 '>
             {
            amI.map((item)=>(

                 <div key={item.id} className="card bg-base-100 w-76 shadow-sm m-7 ">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl"
      width='90px'
      height='90px' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.title}</h2>
    

  </div>
</div>
            ))
           }
           </div>
          </div>
     
    );
};

export default WhoAmI;