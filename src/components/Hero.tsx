'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import pic from '../../public/natna.png'
import Link from 'next/link'
import nodejsIcon from '../../public/nodejs.ico'
import js from '../../public/js.ico'
import laravel from '../../public/laravel.ico'
import nextjs from '../../public/nextjs.ico'
import ts from '../../public/ts.ico'
import django from '../../public/dj.ico'
import react from '../../public/reactjs.ico'
import tw from '../../public/tailwind.ico'
import python from '../../public/python_icon.ico'
import postgre from '../../public/postgre.ico'



const icons = [
  django,laravel, python,nodejsIcon,js,ts,react,nextjs,tw, postgre
]

const textVariants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration: 0.8,
      staggerChildren: 0.1,
      delay:0.3
    }
  },
}

const sliderVariants = {
  initial:{
    x:-50,
  },
  animate:{
    opacity:0.07,
    x:'-100%',
  }
}
const Hero = () => {
  return (
    <motion.div
    className=' relative  z-10 flex items-center flex-col sm:flex-row sm:justify-between'>
        <motion.div variants={textVariants} initial={'initial'} animate={'animate'} className=' flex flex-col items-start z gap-5'>
           <motion.div  className='  flex flex-col gap-4'>
                <motion.h1 variants={textVariants}  className=' mt-20 sm:mt-0 text-center sm:text-left text-3xl text-white tracking-widest uppercase '>
                  Hi there,</motion.h1>
                <motion.h1 variants={textVariants}  className=' mt-20 sm:mt-0 text-center sm:text-left text-3xl text-cyan-500 tracking-widest uppercase '>
                  I'm Natnael Legesse</motion.h1>
                <motion.h1 variants={textVariants} className=' text-center sm:text-left text-4xl sm:text-6xl font-bold'>DEVELOPER</motion.h1>
           </motion.div>
           <motion.div variants={textVariants} className=' justify-center sm:justify-start  w-full flex gap-4 mt-10 z-40'>
                <Link href={'#Portfolio'}
                 className=' border border-white text-white font-semibold rounded-lg p-2 px-5'>My Portfolio</Link>
                 <Link href={'#Contact'}
                 className=' bg-white text-black rounded-lg p-2 px-5'>Contact</Link>
           </motion.div>
        </motion.div>
        <div className=' border-b-4 overflow-hidden border-opacity-15 border-sky-400 rounded-full relative z-30 w-[30rem] h-[25rem] lg:w-[20rem] lg:h-[30rem]'>
            <Image
                src={pic}
                fill
                alt='pic'
                className=' absolute object-cover opacity-100 z-30 '
                />
        </div>
        <motion.div variants={sliderVariants} transition={{repeat:Infinity,repeatType:'mirror', duration:15}} initial={'initial'} animate={'animate'}  
        className=' absolute bottom-20 z-0 max-w-[80rem] right-0 text-6xl sm:text-8xl opacity-20'>
           {/* javascript typescript nodejs nextjs php laravel tailwindcss javascript typescript nodejs nextjs php laravel tailwindcss */}
           <div className=' flex gap-5'>
              {
               icons.map((ic,index)=>(
                 <div key={index} className=' relative w-[5rem] h-[5rem]'>
                   <Image
                     src={ic}
                     fill
                     alt='icon'
                   />
                 </div>
               ))
              }
           </div>
        </motion.div>
    </motion.div>
  )
}

export default Hero