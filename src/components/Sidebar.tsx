'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { FaBurger, FaPizzaSlice } from "react-icons/fa6";
import Link from 'next/link';

const menus = [
    'Home',
    'Services',
    'Portfolio',
    'Contact',
    'About'
]

const Sidebar = () => {
    const [toggle,setToggle] = useState(false)

    const variants = {
        opened: {
            clipPath:'circle(1200px at 10px 10px)',
            transition:{staggerChildren:0.09}
            },
        closed: {
            clipPath: 'circle(30px at 40px 40px)',
            transition:{
                delay: 0.1,
                stiffness:400,
                damping:40,
                staggerChildren:0.4,
                staggerDirection:-1
            }
        }
    }

    // const itemVariants = {
    //     open: {
    //         y:0,
    //         opacity:1
    //     },
    //     closed:{
    //         y:50,
    //         opacity:0.5,
    //         transition:{
    //             duration:5,
    //             delay:1
    //         }
    //     }
    // }

  return (
    <motion.div animate={toggle? 'opened':'closed'} className='  bg-white z-50'>

        <motion.div variants={variants} className=' z-50 bg-white fixed top-10  sm:top-0 left-0 bottom-0 w-[20rem]  lg:w-[20rem] md:w-[18rem]'>
        {toggle && (
                <motion.div variants={variants} initial='hidden' whileInView='visible' >
                    <motion.ul className=' flex flex-col justify-center text-black text-2xl font-semibold h-screen items-center gap-5'>
                    {menus.map((menu,index)=>(
                        <motion.li variants={variants} whileHover={{scale:1.1}} whileTap={{scale:0.9}} >
                            <Link href={`#${menu}`} onClick={()=>setToggle(false)}>{menu}</Link>
                        </motion.li>
                    ))}
                    </motion.ul>
                </motion.div>
            )}
        <button onClick={()=>setToggle(prev=>!prev)}
            className=' cursor-pointer z-50 border-white flex  justify-center items-center absolute left-6 top-5 sm:top-0 sm:left-0 h-[2rem] w-[2rem] sm:h-[5rem] sm:w-[5rem] text-2xl text-black rounded-full '>
                {toggle ? (<FaPizzaSlice/>) : (<FaBurger/>)}
        </button>

        </motion.div>

    </motion.div>
  )
}

export default Sidebar