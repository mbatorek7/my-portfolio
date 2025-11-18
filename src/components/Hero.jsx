import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/images/hero.jpeg'

const Hero = ({ visible }) => {

  return (
    visible &&
    (<div style={{ fontFamily: 'Courier' }}
      className='fixed inset-0 flex items-center justify-center bg-transparent z-0'
      id='home'
    >
      <div className='container px-0 mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen'>

        <div className='backdrop-blur-xs bg-black/30 p-6 rounded-2xl overflow-hidden'>
          <div className='flex flex-col text-center md:text-left'>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'
            >
              Hi! I'm Maggie!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-center text-base sm:text-lg md:text-2xl font-bold text-white'
            >
              Welcome to my corner of the Matrix
            </motion.p>
          </div>
        </div>

        <motion.img
          src={profilePic}
          alt='Hero'
          className='w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 max-w-full max-h-full object-cover rounded-full p-1 bg-gradient-to-tr from-green-400 to-blue-500 shadow-xl'
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </div>
    ))
}

export default Hero
