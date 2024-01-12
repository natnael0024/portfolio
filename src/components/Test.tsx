'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Test = () => {
    const [open,setOpen] = useState(false)

    const variants = {
        visible: {
            opacity:1,
            transition:{staggerChildren:0.4}
            },
        hidden: {
            opacity:0,
        }
    }

    const items = ['item-1','item-2','item-3']
  return (
    <div className=' h-screen text-white border'>
        <motion.ul initial='hidden' variants={variants} whileInView='visible'>
            {
                items.map((item,index)=>(
                    <motion.li key={index} variants={variants}>{item}</motion.li>
                ))
            }
        </motion.ul>
    </div>
  )
}

export default Test