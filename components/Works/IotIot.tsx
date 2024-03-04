import { motion } from 'framer-motion'
import React from 'react'
import { TiArrowForward } from 'react-icons/ti'

const IotIot = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Software Developer Intern AI/ML
        <span className='text-textGreen tracking-wide'>@IoTIoT.in</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Aug-2022 to Dec-2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Developed a hand gesture recognition system using Python and computer vision techniques.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Defined project requirements, develop algorithms, and evaluate performance metrics.
Researched existing methods and improved upon them.
            </li>
            <li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Created a 3D-CNN model trained on the Jester dataset and can detect and recognize hand gestures with an accuracy of more than 90%.
            </li>

        </ul><li className='text-base text-textDark gap-2 flex'>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>Merged the 3D-CNN model with a depth recognition model based on Open3D to be able to give accurate depth estimation of the hand gestures and documented the whole project on GitLab Wiki.
            </li>
    </motion.div>
  )
}

export default IotIot
