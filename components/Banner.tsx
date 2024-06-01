import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 md:py-24 flex flex-col gap-4 lgl:gap-8 md:px-10 xl:px-4'>
        <motion.h3 initial={{y:10,opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.6}}
        className='text-lg font-micro5 tracking-wide text-textGreen'>
            Hi, my name is
        </motion.h3>
        <motion.h1 initial={{y:10,opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.7}}
        className='text-4xl lgl:text-6xl font-micro5 font-semibold flex flex-col'>
            Manisha Addula. <span className='text-textDark mt-2 lgl:mt-4'>I build software applications.</span>
        </motion.h1>
        <motion.p initial={{y:10,opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.8}}
        className='text-base md:max-w-[650px] text-textDark font-medium'>{" "}I have 2+ years experience in software development and I am specialized in backend development. {" "}
        <a href='https://www.linkedin.com/in/manishaaddula/' target='_blank'><span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Learn more
        <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span></span></a></motion.p>
        <a href='https://github.com/manishareddy01?tab=repositories' target='_blank'>
        <motion.button initial={{y:10,opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.9}} className='w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>
            Check out my Projects!
        </motion.button></a>
    </section>
  )
}

export default Banner
