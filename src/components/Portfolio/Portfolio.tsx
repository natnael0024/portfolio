'use client'
import React,{useRef} from 'react'
import p1 from '../../../public/p1.png'
import p2 from '../../../public/tew.png'
import Item from './Item'
import {motion, useScroll, useSpring} from 'framer-motion'

const portfolios = [
    {
      id:1,
      title:'Traveler',
      desc:'A travel assistant web platform that provides users with a range of features and services to enhance their travel experiences. It serves as a digital companion that offers valuable information, personalized recommendations, and convenient tools to assist travelers in planning and organizing their trips.',
      image:p1,
      url:'https://traveler-ten.vercel.app/',
      techStack:['Next.JS','TailwindCSS']
    },
    {
      id:2,
      title:'EtBolo',
      desc:'Vehicle Test Result Dashboard is a user-friendly web platform for vehicle test companies and government officials. It streamlines the vehicle authorization process by securely storing and accessing test results. With features such as data management, analytics, workflow automation, and collaboration tools, the dashboard promotes efficiency and accuracy in evaluating vehicle compliance with regulations.',
      image:p2,
      url:'https://stg.tewostechsolutions.com',
      techStack:['Laravel','JavaScript']
    },
    // {
    //   id:3,
    //   title:'Traveler',
    //   desc:'A travel assistant web platform that provides users with a range of features and services to enhance their travel experiences. It serves as a digital companion that offers valuable information, personalized recommendations, and convenient tools to assist travelers in planning and organizing their trips.',
    //   image:p1,
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
    <div ref={ref} className=' h-full relative '>
      <div className=' sticky sm:top-2 z-30'>
        <h1 className=' text-center text-6xl font-bold text-sky-400'>Portfolio</h1>
        <motion.div style={{scaleX}} className=' min-h-[0.2rem] w-full bg-sky-400'></motion.div>
      </div>
      {portfolios.map(portfolio=>(
        <Item key={portfolio.id} title={portfolio.title} desc={portfolio.desc} image={portfolio.image.src} url={portfolio.url} techStack={portfolio.techStack} />
      ))}
    </div>
  )
}

export default Portfolio