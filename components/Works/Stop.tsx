import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const Stop = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Web Developer Intern
        <span className='text-textGreen tracking-wide'>@1stop.ai</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>June 2021 - October 2021
</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Designed and developed an e-commerce website, with front-end technologies such as HTML5, CSS3, and JavaScript.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Received a Certificate of Appreciation for successfully learning and implementing web development within a short
timeframe, contributing to increased team efficiency.

            </li>
        </ul>
    </motion.div>
  )
}

export default Stop
