'use client'
import React,{useRef} from 'react'
import axios from 'axios'
import Image from 'next/image'
import {MotionValue, motion, useScroll, useTransform} from 'framer-motion'
import at from '../../public/at-dynamic-premium.png'
import mailbox from '../../public/open-mailbox-with-raised-flag.png'
import {toast} from 'react-toastify'

const Contact = () => {
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const mailData = {
       email: e.target[0].value,
       subject:e.target[1].value,
       message: e.target[2].value
    }
    try{
      const url = new URL(`/api/sendemail`, window.location.origin);
      await axios.post(url.toString(), mailData)
      .then(res=>{
        toast(res.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          e.target[0].value = ""
          e.target[1].value = ""
          e.target[2].value = ""
      })
      .catch(error=>{
        toast(error.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
     console.log('hi')
    }catch(err){
      console.log(err)
    }
  }

  const currentYear = new Date().getFullYear();

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
    }
  }

  return (
    <div className='  flex flex-col justify-center sm:flex-row gap-10 items-center border-sky-400 h-full w-full'>
      <motion.div ref={ref} className=' z-30  w-full '>
        <h1 className=' text-6xl text-center sm:text-8xl font-bold'>Contact</h1>
      </motion.div>

      <motion.div style={{y}} className=' mt-20 sm:mt-0 z-30  w-full px-3 sm:px-0'>
        <form action="#" className="space-y-8 flex flex-col" onSubmit={handleSubmit}>
          <div>
              <input type="email" id="email" className="shadow-sm  border-2    rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  bg-transparent  focus:ring-2   focus:ring-amber-300 focus:border-amber-300 shadow-sm-light" placeholder="name@email.com" required/>
          </div>
          <div>
              <input type="text" id="subject" className="block p-3 w-full    rounded-lg border-2  shadow-sm focus:ring-2 focus:ring-amber-300  bg-transparent     shadow-sm-light" placeholder="Let me know how I can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <textarea id="message" rows={6} className="block p-2.5 w-full    rounded-lg shadow-sm border-2  focus:ring-2 focus:ring-amber-300  bg-transparent    " placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5  font-semibold text-center  rounded hover:shadow-md bg-sky-400 w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </motion.div>

      <motion.div variants={iconVariants} transition={{repeat:Infinity,repeatType:'mirror', duration:20}} initial='initial' whileInView={'animate'} className='  absolute bottom-8 z-0 w-[10rem] h-[10rem] sm:w-[20rem] sm:h-[20rem]'>
          <Image
          src={mailbox}
          fill
          alt='image'
          className=' z-0'/>
        </motion.div>
        <div className=' flex gap-5 text-gray-400 absolute bottom-2'>
          <span className=' '>
            {currentYear}
          </span>
          <span>|</span>
          <span>Natnael Legesse</span>
        </div>
    </div>
  )
}

export default Contact