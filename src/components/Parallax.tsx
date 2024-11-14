'use client'
import {useRef} from 'react'
import {animate, motion, useScroll, useTransform} from 'framer-motion'
import rocket from '../../public/rocket-dynamic-premium.png'
import rocket1 from '/public/rocket_1f680.png'
import bullseye from '/public/bullseye.png'
import trophy from '/public/trophy_1f3c6.png'
import target from '../../public/target-dynamic-premium.png'
import shield from '../../public/sheild-dynamic-premium.png'
import Image from 'next/image'

const iconVariants = {
  initial:{
    y:0
  },
  animate:{
    y:'-15%',
  }
}
const iconVariants2 = {
  initial: { y: 0 },
  animate: { y: '10%', x:'10%' }
};

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
        <motion.div style={{x:bgX}} variants={iconVariants} transition={{duration:2, repeat:Infinity, repeatType:'mirror'}} initial='initial' whileInView={'animate'}
          className=' hidden sm:block bottom-10 left-20 text-9xl  absolute  w-[15rem] h-[15rem]' >
          <Image
            src={rocket1}
            fill
            alt='image'
          />
        </motion.div>
        <motion.div
        initial={{ offsetDistance: "0%", scale: 1 }}
        animate={{ offsetDistance: "100%", scale: 0.9, rotateY:-20, rotateX:-20 }}
        transition={{duration: 2, yoyo: Infinity, ease: "easeInOut", repeat:Infinity, repeatType:'mirror'}}
        className=' hidden sm:block  absolute top-30 right-10 w-[15rem] h-[15rem]' >
          <Image
            src={bullseye}
            fill
            alt='image'
          />
        </motion.div>
        <motion.div  
          initial={{ offsetDistance: "0%", rotate:-10 }}
          animate={{ offsetDistance: "100%", rotate:10 }}
          transition={{duration: 1, yoyo: Infinity, ease: "easeInOut", repeat:Infinity, repeatType:'mirror'}}
          className=' hidden sm:block absolute top-20 left-10  w-[10rem] h-[10rem]' >
          <Image
            src={trophy}
            fill
            alt='image'
          />
        </motion.div>


        
    </div>
  )
}

export default Parallax