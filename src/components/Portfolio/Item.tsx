'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useRef} from 'react'
import {MotionValue, motion, useScroll, useTransform} from 'framer-motion'

const variants = {
    initial:{
        y:1,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:1
        }
    }
}

interface ItemProps {
    id: Number,
    title: string;
    desc: string;
    image: string;
    url: string;
    techStack: string[];
  }

const Item: React.FC<ItemProps> = ({id,title,desc,image,url,techStack}) => {

    const useParallax = (value: MotionValue<number>, distance:number) => {
        return useTransform(value, [0,1], [-distance, distance])
    }

    const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
  })

  const textY = useParallax(scrollYProgress, 0)
  return (
    <motion.section id='Portfolio'  className='  flex flex-col gap-3 '>
        <div  className='  h-full lg:w-[60rem] mx-auto flex flex-col lg:flex-row gap-7 justify-center items-center'>
            <motion.div ref={ref} className=' relative  sm:block w-full min-h-[10rem] sm:w-[30rem] sm:h-[20rem]'>
                {id == 2? 
                <Image
                src={image}
                fill
                alt='image'
                className='  rounded-md'/>
                :
                <Image
                src={image}
                fill
                alt='image'
                className=' object-cover rounded-md'/>
                }
                
            </motion.div>
            <motion.div style={{y:textY}} className='  sm:pt-0 flex items-center sm:items-start flex-col gap-5 flex-1'>
                <h1 className=' text-3xl sm:text-6xl font-bold'>{title}</h1>
                <h3 className=' break-words text-gray-300'>{desc}</h3>
                <div className=' grid grid-cols-3 sm:flex sm:flex-wrap gap-3  text-amber-300'>
                    {techStack.map((tech,index)=>(
                        <h3 className='border border-amber-400 border-opacity-40 px-1 rounded ' key={index}>{tech}</h3>
                    ))}
                </div>
                {id !== 8 &&
                <Link href={url} target="_blank" rel="noopener noreferrer"
                className=' bg-sky-400 p-2 px-10 rounded'>Visit</Link>
                }
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Item