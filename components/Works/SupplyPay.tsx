import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const SupplyPay = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Backend Software Developer
        <span className='text-textGreen tracking-wide'>@Supply Pay</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>May 2024 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Designed and developed a client-facing portal that processes international financial transactions, resulting in improved efficiency and reduced processing time. 
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Collaborated with stakeholders to gather requirements and design solutions to address financial service challenges and streamline operations.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Implemented Python-based fast API on Linux, resulting in an 8 times increase in transaction processing speed, leading to enhanced customer experience and higher throughput. 
            </li>
            
        </ul>
    </motion.div>
  )
}

export default SupplyPay
