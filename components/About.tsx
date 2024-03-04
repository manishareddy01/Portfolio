import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import { profileImg } from '@/public/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section initial={{y:10,opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:1}} id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 lgl:px-32 flex flex-col gap-8'>
        <SectionTitle title="About Me" titleNo='01'/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>I like creating fun stuff and animations live on internet,my interest started from my freshman year when my friend and I randomly decided to learn web development, and here I am </p>
                
                <p>Here are few technologies that I use:</p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        JavaScript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        MongoDB
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        Tailwind CSS
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        Express
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        Node
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        Next
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        Vercel
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <AiFillThunderbolt/>
                        </span>
                        Angular
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
        </div>
    </motion.section>
  )
}

export default About
