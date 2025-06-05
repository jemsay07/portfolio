import Image from 'next/image';
import React from 'react';
import user from "@/assets/images/jem.jpg";
import { infoList } from '../model/info';
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.section 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1 }}
        id="about" 
        className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'bg-white' : 'dark:bg-stone-900'} `}
    >
        <div className='container mx-auto'>
            <motion.h4 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`mb-2 text-center text-lg ${isDarkMode ? '' : 'dark:text-white'}`}
            >Introduction</motion.h4>
            <motion.h2 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-5xl text-center ${isDarkMode ? '' : 'dark:text-white'}`}
            >About me</motion.h2>
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8}}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
            >
                <motion.div 
                    initial={{scale: 0.9, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'
                >
                    <Image src={user} alt='jem' className='w-full rounded-3xl'/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1 '>
                    {/* <p>Solution-driven Web Developer adept at contributing to the highly collaborative work environment, finding solutions, and determining customer satisfaction. Proven experience developing consumer-focused websites using HTML, CSS, PHP, and JavaScript over 10 years, meeting the highest standards for web design, user experience, best practices, and speed. Designed and developed web applications across multiple APIs, third-party integrations, and databases.</p> */}
                    <p className={`mb-10 mx-w-2xl ${isDarkMode ? '' : 'dark:text-white'}`}>With over a decade of hands-on experience in web development, I've had the opportunity to work with top-tier organizations, helping them grow through elegant, efficient, and user-focused web solutions. I bring both technical expertise and a strategic mindset to every project.</p>
                    <motion.ul 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                    >
                       {infoList.map(({icon, title, desc}, ind) => (
                            <motion.li
                                whileinView={{scale:1.05}}
                                key={ind} 
                                className={`border-[0.5px] border-slate-200 p-6 rounded-lg  flex flex-col items-center gap-4 cursor-pointer ${isDarkMode ? 'hover:bg-slate-200' : 'dark:hover:bg-slate-700'} hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`}>
                                <span className={`text-center ${isDarkMode ? 'text-stone-800' : 'dark:text-white'}`} >{icon}</span>
                                <h3 className={`font-semibold  ${isDarkMode ? 'text-gray-700' : 'dark:text-gray-200'}`}>{title}</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400 ' : 'dark:text-gray-100'}`}>{desc}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default About
