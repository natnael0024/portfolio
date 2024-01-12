'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import computer from '../../public/computer-dynamic-premium.png'
import folder from '../../public/fav-folder-dynamic-premium.png'
import picture from '../../public/picture-dynamic-premium.png'
import paint from '../../public/paint-kit-dynamic-premium.png'

const services = [
    {
        id:1,
        title:'FullStack Web Development',
        description:'As a full-stack developer, I specialize in web development using Next.js, React.js, Node.js, and Laravel. With expertise in Tailwind CSS and Framer Motion, I create dynamic and visually appealing websites customized to your needs.',
        icon:computer
    },
    {
        id:2,
        title:'UI/UX Design',
        description:'I offer UI/UX design services using Figma and Adobe XD. I create captivating designs that align with your brand and enhance the user experience. Let me bring your ideas to life, whether it\'s a redesign or a brand new interface.',
        icon:paint
    },
    {
        id:3,
        title:'Landing page design & development',
        description:'I specialize in creating high-converting landing pages. From stunning designs to seamless user experiences, I ensure your pages drive results. Using JavaScript frameworks, I bring your vision to life with speed and effective call-to-action elements.',
        icon:picture
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

const Services = () => {
  return (
    <motion.div className=' px-3 sm:px-0  relative h-full flex flex-col items-center justify-center'>
        <h1 className=' absolute top-10 text-3xl sm:text-5xl  rounded-full p-2 px-4 w-full text-center font-bold'>Provide Creative Solutions</h1>
        <div className=' flex flex-col lg:flex-row justify-between gap-2 sm:gap-10'>
            {services.map(service=>(
                <motion.div variants={service.id === 1 ? leftVariants : service.id ===3? rightVariants: middleVariants} initial={'initial'} whileInView={'animate'} 
                className=' border border-sky-400 border-opacity-15 mt-5 bg-gray-900 p-2 hover:shadow-xl hover:shadow-black  lg:w-[22rem] flex flex-col items-center gap-5 rounded-md'>
                    <div className='  sm:mt-0 flex  rounded-full relative w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem]'>
                        <Image
                        src={service.icon}
                        fill
                        alt='ic'
                        className=''/>
                    </div>
                    <div className=' flex flex-col gap-5 items-center'>
                        <h1 className=' text-2xl sm:text-3xl text-center font-bold'>{service.title}</h1>
                        <h3 className=' text-gray-400 text-sm text-justify'>{service.description}</h3>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default Services