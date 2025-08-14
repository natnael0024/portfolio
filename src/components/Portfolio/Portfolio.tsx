'use client'
import React,{useRef} from 'react'
import p1 from '../../../public/p1.png'
import p2 from '../../../public/tew.png'
import p3 from '../../../public/yba.png'
import p4 from '../../../public/natai2.png'
import p5 from '../../../public/teamlink.png'
import p6 from '../../../public/chillncode.png'
import p7 from '../../../public/natai-tgbot.png'
import p8 from '../../../public/tti.png'
import p9 from '../../../public/mystore.png'



import Item from './Item'
import {motion, useScroll, useSpring} from 'framer-motion'

const portfolios = [
    {
      id:1,
      title:'MyStore',
      desc:'MyStore is an eCommerce platform built with Laravel (backend) and Next.js (frontend). It offers a seamless shopping experience and an intuitive admin dashboard to manage products, orders, users, roles, permissions and view analytics. Perfect for businesses of all sizes, MyStore combines performance, security, and flexibility.',
      image:p9,
      url :'https://mystore-a0s0.onrender.com', 
      techStack:['Laravel','NextJs','Postgresql']
    },
    {
      id:2,
      title:'EtBolo',
      desc:'EtBolo is a user-friendly web platform for vehicle test companies and government officials. It streamlines the vehicle authorization process by securely storing and accessing test results. With features such as data management, analytics, workflow automation, and collaboration tools, the dashboard promotes efficiency and accuracy in evaluating vehicle compliance with regulations. (Due to NDA I am not allowed to show demo)',
      image:p2,
      url:'https://stg.tewostechsolutions.com',
      techStack:['Laravel','JavaScript']
    },
    {
      id:3,
      title:'NatAI chatbot',
      desc:'Natai is an AI-powered chatbot that aims to be your friendly and knowledgeable companion. Developed using the Google Gemini Model, Natai is designed to engage in natural conversations, answer questions, and assist you with a variety of tasks.',
      image:p4,
      url :'https://nataichat.onrender.com/', 
      techStack:['Python','FastAPI','ReactJS','Postgresql','Supabase','Google Gemini Model']
    },
    {
      id:4,
      title:'NatAI Telegram chatbot',
      desc:'NataiBot is an AI-powered chatbot designed to bring the capabilities of NatAI to Telegram users. NataiBot allows you to engage in natural conversations, get answers to your questions, and receive help with various tasks within the Telegram app. ',
      image:p7,
      url :'https://t.me/nat_AI_bot', 
      techStack:['Python','Postgresql','Google Gemini Model']
    },
    {
      id:5,
      title:'Text To Image Generator',
      desc:'Text-to-Image Generator is an AI-powered platform designed to turn your words into stunning visuals. This platform allows you to create detailed, creative images from simple text descriptions, offering a seamless way to visualize your ideas.',
      image:p8,
      url :'https://text-to-image-nat-ai.onrender.com', 
      techStack:['Python','FastAPI','HuggingFace Model','ReactJs']
    },
    {
      id:6,
      title:'Yemikeray Bet Ale',
      desc:'Yemikeray Bet Ale is a rental property marketplace connecting owners/agents with renters. It offers secure user accounts, property listing, advanced search, detailed profiles and communication tools.The platform also features an admin dashboard.',
      image:p3,
      url :'https://yba.onrender.com/',
      techStack:['Django','JavaScript','TailwindCSS','Postgresql','Supabase']
    },
    {
      id:7,
      title:'chill&code',
      desc:'chill&code is a tech-focused blogging project designed to explore and share the latest trends, innovations, and insights in the world of technology. This project aims to provide valuable content for tech enthusiasts, professionals, and anyone interested in staying updated on emerging technologies, product reviews, how-to guides, and industry news. ',
      image:p6,
      url :'https://chillandcode.onrender.com/', 
      techStack:['NodeJs','ReactJS','Postgresql','Supabase']
    },
    // {
    //   id:7,
    //   title:'Traveler',
    //   desc:'A travel assistant web platform that provides users with a range of features and services to enhance their travel experiences. It serves as a digital companion that offers valuable information, personalized recommendations, and convenient tools to assist travelers in planning and organizing their trips.',
    //   image:p1,
    //   url:'https://traveler-ten.vercel.app/',
    //   techStack:['Next.JS','TailwindCSS']
    // },
]


const Portfolio = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['end end','start start']
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping:30
  })

  return (
    <div ref={ref} className=' mt-96 md:mt-10 h-full relative '>
      <div className=' sticky sm:top-2 z-30'>
        <h1 className=' text-center text-6xl font-bold text-sky-400 '>Portfolio</h1>
        <motion.div style={{scaleX}} className=' min-h-[0.2rem] w-full bg-sky-400 mb-4 sm:mb-0'></motion.div>
      </div>
      <div className=' mt-24 md:mt-2'>
      {portfolios.map(portfolio=>(
        <Item key={portfolio.id} id={portfolio.id} title={portfolio.title} desc={portfolio.desc} image={portfolio.image.src} url={portfolio.url} techStack={portfolio.techStack} />
      ))}
      </div>
    </div>
  )
}

export default Portfolio