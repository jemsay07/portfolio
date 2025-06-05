import React from 'react';
import { Hand } from 'lucide-react';
import { motion } from "motion/react"


const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-bl from-sky-500 to-sky-800 h-1/2 md:h-full py-5" >
        <div className='container w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center text-center gap-4'>
            <motion.h3 
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex items-end gap-2 text-xl md:text-2xl mb-3'
            >
                H! Jemson Sayre <Hand />
            </motion.h3>
            <motion.h1 
              initial={{y: -30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-3xl sm:text-6xl lg:text-[66px]'>Front End Developer
            </motion.h1>
            <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='max-w-2xl mx-auto'
            >
              -- I am a passionate Developer
            </motion.p>
        </div>
    </section>
  )
}

export default Hero
