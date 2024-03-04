import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Archive from './Archive'
import { motion } from 'framer-motion';

const Projects = () => {
  const[showMore,setShowMore]=useState(false);
  return (
    <section id='projects' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I have built' titleNo='03'/>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        <Archive
        title='MLS Resources Website' des='Led the development of the backend using Node and Express, crafting RESTful APIs for MongoDB data retrieval. '
        listItems={["Reactjs","Tailwindcss","Nodejs"]} link='https://github.com/nasehacho/mls-website'
        />
        <Archive
        title='Event Management System' des='Engineered an event management web app and implemented real-time updates.'
        listItems={["Python","HTML","MongoDB"]} link='https://github.com/manishareddy01/EventManagement'
        />
        <Archive
        title='Restaurant WebApp' des='Responsive food ordering website to ensure optimal user experience across devices.'
        listItems={["BootStrap","Css","JavaScript"]} link='https://github.com/manishareddy01/conFusion'
        />
        
        

      
      {showMore &&(
        <>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1}}>
          <Archive
        title='To-do App' des='Web App where you can list your daily activities and track them'
        listItems={["Nextjs","Tailwindcss","Vercel"]} link='https://github.com/manishareddy01/todo--app'
        />
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2}}>
          <Archive
        title='Web Scraping' des='Extracting data from website to csv file'
        listItems={["Python","Jupyter","SQL"]} link='https://github.com/manishareddy01/webscraping'
        />
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3}}>
          <Archive
        title='Train Delay Estimation' des='Calculate the train delay with an ML model'
        listItems={["Python","Machine Learning","Jupyter"]} link='https://github.com/manishareddy01/ML-Proj'
        />
          </motion.div>
        </>
      )}
      </div>
      <div className='mt-12 flex items-center justify-center'>
      {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects
