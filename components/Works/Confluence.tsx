import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const Confluence = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Business Associate Intern
        <span className='text-textGreen tracking-wide'>@Confluence</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Feb 2022 - May 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Supported career services by counseling students on career options and guiding job search skills development.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Met with students’ in-person and spoke over telephone to help students construct class schedules
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Identified students in need of special attention to implement strategies for success.
            </li>
        </ul>
    </motion.div>
  )
}

export default Confluence
