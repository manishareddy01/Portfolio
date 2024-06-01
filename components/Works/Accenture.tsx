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
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Implemented Transportation Management System (TMS) with Java, Spring Boot, React.js, and Node.js that optimized routing, tracking, and fleet management, saving $1 million annually.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Developed and launched a customer-facing portal that provided real-time shipment tracking, leading to a 30% improvement in customer satisfaction.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Developed Java-based Web APIs and GUIs within a team environment, utilizing Object-Relational Mapping frameworks like Spring and Hibernate to proficiently manage user data. 
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Employed JUnit to create comprehensive test cases, implementing design patterns such as Model-View-Controller (MVC) to optimize system performance.
            </li>
        </ul>
    </motion.div>
  )
}

export default Accenture
