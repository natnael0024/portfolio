'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter, FaGithub } from "react-icons/fa6";


const socialMedias = [
    {
        id:1,
        name:'LinkedIn',
        icon:<FaLinkedin/>,
        link:'https://www.linkedin.com/in/nathnael-legesse-6239591a2/'
    },
    {
        id:3,
        name:'Github',
        icon:<FaGithub/>,
        link:'https://github.com/Natnael0023'
    },
]

const Navbar = () => {
    // const variants 
  return (
    <nav className='  py-6'>
       <motion.div 
       initial={{scale:0.9}}
       whileInView={{scale:1}}
       transition={{
        duration:0.3
       }}
       >
           <div className=' relative flex justify-end sm:justify-between'>
             <motion.div
             initial={{scale:0.5}}
             whileInView={{scale:1}}
             transition={{
              duration:0.5
             }}
              className=' text-2xl hidden sm:block font-bold'>Nat</motion.div>
             <div className=' flex gap-5'>
                 {
                    socialMedias.map(sm=>(
                        <Link href={sm.link} target='_blank' rel="noopener noreferrer" className=' text-2xl'>{sm.icon}</Link>
                    ))
                 }
             </div>
         </div> 
        </motion.div>
    </nav>
  )
}

export default Navbar