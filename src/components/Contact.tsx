'use client'
import React,{useRef} from 'react'
import axios from 'axios'
import Image from 'next/image'
import {MotionValue, motion, useScroll, useTransform} from 'framer-motion'
import at from '../../public/at-dynamic-premium.png'

const Contact = () => {
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const mailData = {
       email: e.target[0].value,
       subject:e.target[1].value,
       message: e.target[2].value
    }
    try{
      const url = new URL(`/api/sendemail`,window.location.origin);
      const res = await axios.post(url,mailData)
    }catch(err){
      console.log(err)
    }
  }

  const useParallax = (value:MotionValue, distance:number)=>{
    return useTransform(value ,[0,1],[-distance,distance])
  }
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref
  })

  const y = useParallax(scrollYProgress, 100)

  const iconVariants = {
    initial:{
      x:0
    },
    animate:{
      x:'-20%',
      transition:{
        duration:20,
        repeat:Infinity,
        repeatType:'mirror'
      }
    }
  }

  return (
    <div className='  flex flex-col justify-center sm:flex-row gap-10 items-center border-sky-400 h-full w-full'>
      <motion.div ref={ref} className=' z-30  w-full '>
        <h1 className=' text-6xl text-center sm:text-8xl font-bold'>Contact</h1>
      </motion.div>

      <motion.div style={{y}} className=' z-30  w-full px-3 sm:px-0'>
        <form action="#" className="space-y-8 flex flex-col" onSubmit={handleSubmit}>
          <div>
              <input type="email" id="email" className="shadow-sm  border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  bg-transparent    dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
          </div>
          <div>
              <input type="text" id="subject" className="block p-3 w-full text-sm   rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500  bg-transparent    dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm   rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500  bg-transparent    dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-semibold text-center  rounded hover:shadow-md bg-sky-400 w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </motion.div>

      <motion.div variants={iconVariants} initial='initial' whileInView={'animate'} className='  absolute bottom-8 z-0 w-[10rem] h-[10rem] sm:w-[20rem] sm:h-[20rem]'>
          <Image
          src={at}
          fill
          alt='image'
          className=' z-0'/>
        </motion.div>
    </div>
  )
}

export default Contact