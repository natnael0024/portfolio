'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { FaLinkedin, FaDownload } from "react-icons/fa6";
import { FaXTwitter, FaGithub, FaHackerrank, FaBlog } from "react-icons/fa6";


const socialMedias = [
    {
        id:1,
        name:'LinkedIn',
        icon:<FaLinkedin/>,
        link:'https://www.linkedin.com/in/nathnael-legesse-6239591a2/'
    },
    {
        id:2,
        name:'Github',
        icon:<FaGithub/>,
        link:'https://github.com/natnael0024'
    },
    {
        id:3,
        name:'HackerRank',
        icon:<FaHackerrank/>,
        link:'https://www.hackerrank.com/certificates/3b09704215a1'
    },
    // {
    //     id:3,
    //     name:'Blog',
    //     icon:<FaBlog/>,
    //     link:'https://chillandcode.onrender.com/'
    // },
    
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
             <div className=' flex items-center gap-5'>
                 {
                    socialMedias.map(sm=>(
                        <Link href={sm.link} target='_blank' rel="noopener noreferrer" className=' text-2xl'>{sm.icon}</Link>
                    ))
                 }
                <a 
                    href="/Natnael_Legesse's_Resume.pdf" 
                    download 
                    className="flex border border-gray-100 rounded-full items-center gap-2 text-sm sm:text-base  text-white px-5 py-2 hover:bg-gray-300 hover:bg-opacity-25 transition"
                >
                    <FaDownload/> Resume
                </a>
             </div>
         </div> 
        </motion.div>
    </nav>
  )
}

export default Navbar