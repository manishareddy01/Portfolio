import React from 'react'
import { TbBrandGithubFilled } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { TbBrandThreads } from "react-icons/tb";



const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight '>
        <div className='flex flex-col gap-4'>
            <a href='https://github.com/manishareddy01' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300 '>
                    <TbBrandGithubFilled/>
                </span>   
            </a>
            <a href='https://www.linkedin.com/in/manishaaddula/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300 '>
                    <TbBrandLinkedin/>
                </span>   
            </a>
            <a href='https://twitter.com/manisha_says' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300 '>
                    <TbBrandTwitterFilled/>
                </span>   
            </a>
            <a href='https://www.threads.net/@manishasays' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300 '>
                    <TbBrandThreads/>
                </span>   
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textDark '></div>
    </div>
  )
}

export default LeftSide
