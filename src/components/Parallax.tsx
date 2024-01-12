'use client'
import {useRef} from 'react'
import {animate, motion, useScroll, useTransform} from 'framer-motion'
import rocket from '../../public/rocket-dynamic-premium.png'
import target from '../../public/target-dynamic-premium.png'
import shield from '../../public/sheild-dynamic-premium.png'
import Image from 'next/image'

const iconVariants = {
  initial:{
    y:0
  },
  animate:{
    y:'-10%',
    transition:{
      duration:3,
      repeat:Infinity,
    }
  }
}
// const iconVariants = {
//   initial: { y: 0 },
//   animate: { y: '100%', transition: { duration: 1, repeat: 3, repeatType: 'reverse' } }
// };

const Parallax = ({type}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['start start','end start']
  })

  const textY = useTransform(scrollYProgress, [0,1], ['0%','500%'])
  const bgY = useTransform(scrollYProgress, [0,1], ['0%','100%'])
  const bgX = useTransform(scrollYProgress, [0,1], ['0%','100%'])

  return (
    <div ref={ref} className=' overflow-hidden relative h-full flex items-center justify-center'>
        <motion.h1 style={{y:textY}} className=' text-6xl'>
          {type==='services'? 'WHAT I DO':'what I did'}
        </motion.h1>
        <motion.div style={{x:bgX}} variants={iconVariants} initial='initial' whileInView={'animate'}
          className=' bottom-10 left-20  absolute  w-[15rem] h-[15rem]' >
          <Image
            src={rocket}
            fill
            alt='image'
          />
        </motion.div>
        <motion.div style={{y:bgY}}   
        className=' hidden sm:block  absolute top-30 right-10 w-[15rem] h-[15rem]' >
          <Image
            src={target}
            fill
            alt='image'
          />
        </motion.div>
        <motion.div   
          className=' hidden sm:block absolute top-20 left-10  w-[10rem] h-[10rem]' >
          <Image
            src={shield}
            fill
            alt='image'
          />
        </motion.div>
    </div>
  )
}

export default Parallax