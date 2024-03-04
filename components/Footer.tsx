import React from 'react'
import { TbBrandGithubFilled, TbBrandLinkedin, TbBrandTwitterFilled, TbBrandThreads } from 'react-icons/tb'

const Footer = () => {
  return (
    
    <div className="hidden md:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
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
  )
}

export default Footer
