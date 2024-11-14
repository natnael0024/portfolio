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

  const textY = useParallax(scrollYProgress, 300)
  return (
    <motion.section id='Portfolio'  className='  flex flex-col gap-3 '>
        <div  className='  h-full lg:w-[60rem] mx-auto flex flex-col lg:flex-row gap-7 justify-center items-center'>
            <motion.div ref={ref} className=' relative hidden sm:block w-[10rem] min-h-[10rem] lg:w-[30rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem]'>
                <Image
                src={image}
                fill
                alt='image'
                className=' object-cover rounded-md'/>
            </motion.div>
            <motion.div style={{y:textY}} className=' pt-64 sm:pt-0 flex items-center sm:items-start flex-col gap-5 flex-1'>
                <h1 className=' text-6xl font-bold'>{title}</h1>
                <h3 className=' text-gray-300 px-3 sm:px-0'>{desc}</h3>
                <div className=' flex gap-2 text-amber-300'>
                    {techStack.map((tech,index)=>(
                        <h3 key={index}>{tech}</h3>
                    ))}
                </div>
                {id !== 5 &&
                <Link href={url} target="_blank" rel="noopener noreferrer"
                className=' bg-sky-400 p-2 px-10 rounded'>See demo</Link>
                }
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Item