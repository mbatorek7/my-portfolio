import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { About, Projects, Contact, Footer, Hero, MatrixRainingCode, Navbar, MatrixTypewriter } from './components'
import { AnimatePresence, motion } from 'framer-motion'

const App = () => {
  //animation state
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showHero, setShowHero] = useState(true);

  // only show when Name in NavBar is clicked
  const handleNameClick = () => {
    setShowHero(false);
    setShowTypewriter(true);

    // hide after 4 seconds
    setTimeout(() => {
      setShowHero(true);
      setShowTypewriter(false);
    }, 5000); // change duration if needed
  };

  return (
    <div className='min-h-screen overflow-hidden'>

      {/* create black background to avoid flashes when switching animations */}
      <div className='absolute inset-0 bg-black z-[-2]'>
        {/* use animate presence for smoother transition between animations */}
        <AnimatePresence mode="wait">
          {/* checking if is name was clicked */}
          {showTypewriter ? (
            <motion.div
              key="typewriter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 z-[-1]'
            >
              <MatrixTypewriter />
            </motion.div>
          ) : (
            <motion.div
              key="rain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 z-[-1]'
            >
              <MatrixRainingCode />
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      <div className='flex flex-col'>
        <Navbar
          onNameClick={handleNameClick}

        />
        <Routes>
          <Route path="/" element={<Hero visible={showHero} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
