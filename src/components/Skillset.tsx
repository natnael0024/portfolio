'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import computer from '../../public/computer-dynamic-premium.png'
import folder from '../../public/fav-folder-dynamic-premium.png'
import picture from '../../public/picture-dynamic-premium.png'
import paint from '../../public/paint-kit-dynamic-premium.png'
import sett from '../../public/setting-dynamic-premium.png'

import nodejs from '../../public/nodejs.ico'
import js from '../../public/js.ico'
import laravel from '../../public/laravel1.png'
import nextjs from '../../public/nextjs.ico'
import ts from '../../public/ts.ico'
import django from '../../public/dj.ico'
import react from '../../public/reactjs.ico'
import tw from '../../public/tailwind.ico'
import python from '../../public/python_icon.ico'
import postgre from '../../public/postgre.ico'
import fastapi from '../../public/FastAPI.png'
import mongodb from '../../public/mongodb1.png'
import mysql from '../../public/mysql.ico'
import docker from '../../public/docker.ico'
import git from '../../public/git.ico'


const skills = [
    {
        id:1,
        title:'Python',
        // description:'As a full-stack developer, I specialize in web development using Next.js, React.js, Node.js, Laravel and Django. With expertise in Tailwind CSS and Framer Motion, I create dynamic and visually appealing websites customized to your needs.',
        icon:python
    },
    {
        id: 2,
        title:'JS',
        // description: 'I have expertise in DevOps practices and deployment automation. I can help you set up CI/CD pipelines, containerize your applications, and automate the deployment process using tools like Docker, Kubernetes, Github Action, and Azure cloud services.',
        icon:js
    },
    {
        id:3,
        title:'Django',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:django
    },
    {
        id:4,
        title:'NodeJs',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:nodejs
    },
    {
        id:3,
        title:'Laravel',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:laravel
    },
    {
        id:4,
        title:'FastAPI',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:fastapi
    },
    {
        id:5,
        title:'Postgresql',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:postgre
    },
    {
        id:6,
        title:'mysql',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:mysql
    },
    {
        id:7,
        title:'mongodb',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:mongodb
    },
    {
        id:8,
        title:'git',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:git
    },
    {
        id:9,
        title:'docker',
        // description:'I am Skilled in database design and implementation, including MySQL, MongoDB, and PostgreSQL',
        icon:docker
    },
]

const leftVariants = {
    initial:{
        x:-20,
        opacity:0.5
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
        }
    }
}

const rightVariants = {
    initial:{
        x:20,
        opacity:0.5
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
        }
    }
}

const middleVariants = {
    initial:{
        y:50,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
        }
    }
}

const Skillset = () => {
  return (
    <div className=' mt-96 sm:mt-0 px-3 sm:px-0  relative h-full flex flex-col items-center justify-center'>
        <h1 className='  absolute top-10 text-3xl sm:text-5xl  rounded-full p-2 px-4 w-full text-center font-bold'>Skill <span className=' text-sky-400'>Set</span></h1>
        <div className=' mt-96 sm:mt-0 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between gap-2 sm:gap-10'>
            {skills.map(skill=>(
                <div key={skill.id}
                className='  border-sky-400 rounded-lg p-4 px-16 hover:scale-110 duration-300'>
                    <Image
                    width={120}
                    height={120}
                     src={skill.icon}
                     alt='icon'
                   />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skillset