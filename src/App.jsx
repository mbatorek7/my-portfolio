import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { About, Projects, Contact, Footer, Hero, MatrixRainingCode, Navbar, MatrixTypewriter } from './components'
import { AnimatePresence, motion } from 'framer-motion'

const App = () => {
  // second animation state
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showHero, setShowHero] = useState(true);
  // navigation for onNameClick
  const navigate = useNavigate();
  const location = useLocation();

  // check to see if the user is on the homepage
  useEffect(() => {
    // show hero as long as second animation isn't running
    if (location.pathname === '/' && !showTypewriter) {
      setShowHero(true);
    }
  }, [location.pathname, showTypewriter]);

  // only show when Name in NavBar is clicked
  const handleNameClick = () => {
    // hide the hero and run animation
    setShowHero(false);
    setShowTypewriter(true);

    setTimeout(() => {
      setShowTypewriter(false);
      // if on homepage, navigate to about
      if (location.pathname === '/') {
        navigate("/about");
        // if not on homepage or about, naviagte to homepage
      } else if (location.pathname != '/' && location.pathname != '/about') {
        navigate("/");
        setShowHero(true); // make sure Hero is visible again
        // navigate to homepage if any other path
      } else {
        navigate("/");
        setShowHero(true); // make sure Hero is visible again
      }
    }, 5000); // 5 sec duration before hero is shown again
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
          {/* control Hero state */}
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
