import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const carts = [
  {
    id: 1,
    title: "Email",
    link: "mailto:jewelhasan.eee@outlook.com",
    description: "jewelhasan.eee@outlook.com",
    image: "./mail.png",
   
  },
  { id: 2, title: "Github", link: "link", description:"@Github", image: "./github.png" },
  { id: 3, title: "Linkedin", link: "https://www.linkedin.com/in/jewel-hasan-4508b21b1/",description:"@LinkedIn", image: "./linkedin.png" },
  {
    id: 4,
    title: "Twitter",
    link: "link",
    description:"@twitter",
    image: "./twitter.png",
  },
];

const page = () => {
  return (
    <div className="space-y-3 m-3 p-3 text-center mt-[70px]">
      <h1 className="text-2xl">Let’s Contact</h1>
      <h2 className="text-5xl font-extrabold">Get in Touch</h2>
      <p>
        Always up for new opportunities, collabs, or idea exchanges. Reach out
        through any of these channels and I'll get back to you ASAP!
      </p>
      <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
        { 
         carts.map((cart) => (
             <Link href={`${cart.link}`} key={cart.id} className="card w-[500px] bg-base-100 card-xs shadow-sm mb-7 my-5 hover:bg-gray-100 tranform hover:-translate-y-3 duration-8000">
            <div className="card-body">
               <div className="flex justify-left">
                 <figure>
                    <img
                    src={`${cart.image}`}
                    alt="Shoes"
                    className="rounded-xl w-12 h-12 mr-5"
                   
                    />
                    </figure>
              <h2 className="card-title text-left">{cart.title}</h2>
               </div>
              <p className="text-left text-[16px] ml-16">
                {cart.description}
              </p>
             
            </div>
          </Link>
          ))
        }
      </div>

      
    </div>
  );
};

export default page;
