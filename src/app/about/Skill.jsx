"use client";

import React, { useEffect, useState } from 'react';

const Skill = () => {
    const activeColor = "#d62976";
    const secondaryColor = "#769656";
    const [frontend, setFrontend] = useState([])
    const [backend, setBackend] = useState([])
    const [db, setDB] = useState([])
    const [workflow, setWorkflow] = useState([])
    const [currently, setCurrently] = useState([false])

    useEffect(() => {
        const loadSkills = async() =>{
            // const frontEnd = await fetch('./frontend.json')
            // const backEnd = await fetch('./backend.json')
            // const db = await fetch('./db.json')
            // const workflow = await fetch('./workflow.json')
            // const currently = await fetch('./currently.json')

            // const dataFront = await frontEnd.json()
            // const dataBack = await backEnd.json()
            // const dataDb = await db.json()
            // const dataWorkflow = await workflow.json()
            // const dataCurrently = await currently.json()
            
            
           
            setFrontend(dataFront.frontend)
            setBackend(dataBack.backend)
            setDB(dataDb.db)
            setWorkflow(dataWorkflow.workflow)
            setCurrently(dataCurrently.currently)
        }
        loadSkills();
    },[])
 
    return (
        <div className=' grid grid-cols-2 gap-15 text-left space-x-2 space-y-0 '>
            
       <div className='bg-neutral-50 p-2 rounded-[5px]'>
             <h5 className=' font-semibold mb-2'>Frontend</h5>
        <div className='grid grid-cols-3 gap-3'>  
            {
                frontend.map((skill) =>(
                  <p className='bg-gray-200 text-center p-1 text-[14px] rounded-[5px]'>{skill.title}</p>
                  
                ))
            }
           
        </div> 
        </div>  
       <div className='bg-neutral-50 p-2 rounded-[5px]'>
             <h5 className=' font-semibold mb-2'>Backend</h5>
        <div className='grid grid-cols-3 gap-3'>  
            {
                backend.map((skill) =>(
                  <p className='bg-gray-200 text-center p-1 text-[14px] rounded-[5px]'>{skill.title}</p>
                  
                ))
            }
           
        </div> 
        </div>  
       <div className='bg-neutral-50 p-2 rounded-[5px]'>
             <h5 className=' font-semibold mb-2'>DB & Services</h5>
        <div className='grid grid-cols-3 gap-3'>  
            {
                db.map((skill) =>(
                  <p className='bg-gray-200 text-center p-1 text-[14px] rounded-[5px]'>{skill.title}</p>
                  
                ))
            }
           
        </div> 
        </div>  
       <div className='bg-neutral-50 p-2 rounded-[5px]'>
             <h5 className=' font-semibold mb-2'>Workflow Stack</h5>
        <div className='grid grid-cols-3 gap-3'>  
            {
                workflow.map((skill) =>(
                  <p className='bg-gray-200 text-center p-1 text-[14px] rounded-[5px]'>{skill.title}</p>
                  
                ))
            }
           
        </div> 
        </div>  
       <div className='bg-neutral-50 p-2 rounded-[5px]'>
             <div className='flex '>
             <div className='mr-5'>
                   <svg 
        className="absolute h-4 w-4 animate-ping " 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="5" fill="none" stroke="green" strokeWidth="4" />
      </svg>
             </div>
                <h5 className=' font-semibold '>
               
                Currently Learning</h5>
             </div>
        <div className='grid grid-cols-3 gap-3'>  
            {
                currently.map((skill) =>(
                  <p className='bg-gray-200 text-center p-1 text-[14px] rounded-[5px]'>{skill.title}</p>
                  
                ))
            }
           
        </div> 
        </div>  
        </div>
    );
};


const dataFront = {
    "frontend" :[
        {
        "id": 1,
        "title":"React"
    },
    {
        "id": 2,
        "title":"Next.js"
    },
    {
        "id": 3,
        "title":"Shadcn"
    },
    {
        "id": 4,
        "title":"Tailwind CSS"
    },
    {
        "id": 5,
        "title":"Framer Motion"
    },
    {
        "id": 6,
        "title":"Tanstack Query"
    }
    ]
    }
const dataBack = { 
    "backend":[
        {
        "id": 1,
        "title":"Nodejs"
    },
    {
        "id": 2,
        "title":"Express"
    },
    {
        "id": 3,
        "title":"NPM"
    }
  
    ]
    
    
    
 
}
const dataDb = 
    {
    "db" :[
        {
        "id": 1,
        "title":"Postgres"
    },
    {
        "id": 2,
        "title":"Docker"
    },
    {
        "id": 3,
        "title":"Prisma ORM"
    },
    {
        "id": 4,
        "title":"MongoDB"
    }
    ]
    }
const dataWorkflow = 
    {
    "workflow" :[
        {
        "id": 1,
        "title":"Git"
    },
    {
        "id": 2,
        "title":"Github"
    },
    {
        "id": 3,
        "title":"Figma"
    },
    {
        "id": 4,
        "title":"ChatGPT"
    }
    ]
    }
const dataCurrently =
    {
    "currently" :[
        {
        "id": 1,
        "title":"Postgres"
    }
    ]
    }

  
  

export default Skill;