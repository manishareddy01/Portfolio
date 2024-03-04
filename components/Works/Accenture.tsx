import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const Accenture = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Application Development Associate
        <span className='text-textGreen tracking-wide'>@Accenture</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Aug 2022 - Dec 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Developed Java-based Web APIs and GUIs within a team environment, utilizing Object-Relational Mapping frameworks like Spring and Hibernate to proficiently manage user data. 
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Employed JUnit to create comprehensive test cases, implementing design patterns such as Model-View-Controller (MVC) to optimize system performance.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Established connectivity with a MySQL database using Java Database Connectivity (JDBC) and concurrently crafted an intuitive frontend utilizing JavaServer Pages (JSP) and HTML. 
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Executed tasks within an Agile environment, showcasing adaptability and responsiveness to evolving project requirements and timelines.
            </li>
        </ul>
    </motion.div>
  )
}

export default Accenture
