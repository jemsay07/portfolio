import React from 'react';
import { workData } from '../model/info';
import { ArrowRight } from 'lucide-react';
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.section
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1 }} 
        id="work" 
        className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'bg-gray-50' : 'dark:bg-gray-800'} `}
    >
        <div className='container mx-auto'>
                <motion.h4 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ duration: 0.3, delay: 0.5 }}
                className={`mb-2 text-center text-lg ${isDarkMode ? '' : 'dark:text-white'}`}>My Portfolio</motion.h4>
            <motion.h2
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{ duration: 0.5, delay: 0.5 }} 
                className={`text-5xl text-center ${isDarkMode ? '' : 'dark:text-white'}`}>My latest work</motion.h2>
            <motion.p 
                initial={{opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${isDarkMode ? '' : 'dark:text-white'}`}> Here are a few projects I've worked on recently. Want to see more? Email Me</motion.p>

            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ duration: 0.9, delay: 0.6 }}
                className='grid grid-cols-auto md:grid-cols-2 lg:grid-cols-4  my-10 gap-5'>
                {workData.map(({title, desc, img, link}, ind) => (
                    <div key={ind} 
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{backgroundImage: `url(${img.src})`}}>
                        <div className={`flex flex-col absolute invisible group-hover:visible group-active:visible w-full h-full text-center justify-center items-center p-6 rounded-lg bg-sky-200 gap-4`}>
                            <h3 className='text-2xl font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-400 text-sm'>{desc}</p>
                            <a href={link} target='_blank' rel="noopener noreferrer" className='text-blue-500 border py-1 px-8 rounded-full  hover:bg-sky-500 hover:border-sky-500 hover:text-white duration-100'>View Project</a>
                        </div>
                    </div>
                ))}
            </motion.div>
            <a href="#" className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 hover:border-gray-300 duration-500 ${isDarkMode? 'border-gray-700 text-gray-700 hover:bg-gray-300' : 'dark:text-stone-50 dark:border-stone-50 dark:hover:text-gray-300'}`}>
                Show more <ArrowRight />
            </a>
        </div>
    </motion.section>
  )
}

export default Work
