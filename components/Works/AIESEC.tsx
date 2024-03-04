import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const AIESEC = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Outgoing Global Volunteer
        <span className='text-textGreen tracking-wide'>@AIESEC</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Aug-2022 to Dec-2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Managed the social media accounts, creating and scheduling posts and engaging with followers, resulting in a 20% increase in social media engagement.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Developed and executed marketing campaigns across various channels such as email, social media, and digital platforms, resulting in a 25% increase in lead generation.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Assisted in event planning, resulting in a successful company event that attracted over 500 attendees.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Won BEST TEAM AWARD in NLDS 2021.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Won BEST PROGRESSIVE TEAM AWARD.
            </li>
        </ul>
    </motion.div>
  )
}

export default AIESEC
