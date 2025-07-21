import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav style={{ fontFamily: 'Courier' }} className="flex items-center p-4 mt-3 justify-between bg-transparent w-full relative">

      //name will slide in from the left
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className='absolute top-4 left-4 flex items-center'
      >
        <h1 className="text-[#00FF00] cursor-pointer hover:text-white text-2xl font-bold">Maegan Batorek</h1>
      </motion.div>

      //navigation links
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex flex-col md:flex-row lg:flex-row items-center text-2xl ml-auto"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
          >
            About
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Projects
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>


    </nav>
  )
}

export default Navbar
