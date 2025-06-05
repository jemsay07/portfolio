import React from 'react';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import { motion } from "motion/react"

const Contact = ({isDarkMode}) => {
  return (
    <motion.section 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1 }}
        id="contact" className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'bg-white' : 'dark:bg-stone-900'}`}
    >
        <div className='container mx-auto'>
            <motion.h4 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`text-center mb-2 text-lg ${isDarkMode? '' : 'dark:text-white'}`}
            >
                Connect with me
            </motion.h4>
            <motion.h2 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-center text-5xl ${isDarkMode? '' : 'dark:text-white'}`}
            >
                Get in touch
            </motion.h2>
            <motion.p 
                initial={{opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${isDarkMode? '' : 'dark:text-white'}`}
            > 
                Interested in discussing how I can help bring your ideas to life? Connect with me through my socal media or email. I'm always excited to learn about new challenges and collaborate with talented teams
            </motion.p>
            {/* <p className='text-center max-w-2xl mx-auto mt-5 mb-12'> I'd love to hear from you! If you have any questions, comments or feedbacks. Please use the form below.</p>
            <form className='gap-5 max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto md:grid-cols-2 gap-5 mt-10 mb-8'>
                    <input type="text" placeholder='Your Name' className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                    <input type="email" placeholder='Your Email' className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
                </div>
                <textarea rows="5" placeholder='Your Message' className='w-full border border-gray-300 rounded-lg p-3 mb- focus:outline-none focus:ring-2 focus:ring-blue-500'required></textarea>
                <button type="submit" className='w-max mx-auto flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 duration-200'>Send Message </button>
                <p className='mt-4'>sending...</p>
            </form> */}
            <div className='flex justify-center items-center gap-5 mt-10'>
                <motion.a 
                    initial={{scale: 0}}
                    whileInView={{ scale: 1}}
                    transition={{ delay: 0.5 }}
                    transition
                    href="https://www.linkedin.com/in/jemsay07/"
                    target="_blank" rel="noopener noreferrer" 
                    className='flex justify-center gap-1 text-blue-500 rounded-full p-2 border border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-500'
                >
                    <LinkedinIcon />
                </motion.a>
                <motion.a 
                    initial={{scale: 0}}
                    whileInView={{ scale: 1}}
                    transition={{ delay: 0.6 }}
                    href="https://github.com/jemsay07" 
                    className={`flex justify-center gap-1 border border-2 rounded-full p-2 ${isDarkMode? 'text-stone-800 border-stone-800 hover:bg-stone-800 hover:text-white' : 'dark:text-stone-50 dark:border-stone-50 dark:hover:bg-white dark:hover:text-stone-800'} duration-500`}
                    target='_blank' rel="noopener noreferrer"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a 
                    initial={{scale: 0}}
                    whileInView={{ scale: 1}}
                    transition={{ delay: 0.7 }}
                    href="mailto:jem07.say@gmail.com" >
                    <button className='flex justify-center gap-1 text-orange-500 rounded-full p-2 border border-2 border-orange-500 hover:bg-orange-600 hover:text-white duration-500 cursor-pointer'>
                        <Mail />
                    </button>
                </motion.a>
            </div>
        </div>
    </motion.section>
  )
}

export default Contact
