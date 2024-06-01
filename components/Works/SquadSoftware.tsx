import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const SquadSoft = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Software Developer
        <span className='text-textGreen tracking-wide'>@Squad Software</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Jan 2024 - May 2024</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Developed a customer relationship management (CRM) system, with Python, utilizing PostgreSQL, Docker, and Kubernetes, resulting in a 25% increase in sales productivity.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Integrated AI and ML algorithms into risk management systems, enhancing fraud detection accuracy by 40%.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Implemented data analytics tools that provided real-time insights into market trends, driving strategic decision-making and increasing revenue by 15%.
            </li>
        </ul>
    </motion.div>
  )
}

export default SquadSoft
