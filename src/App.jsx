import React from 'react'
import { About, Projects, Contact, Footer, Hero, MatrixRainingCode, Navbar, MatrixTypewriter } from './components'

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden'>

      <MatrixTypewriter className='absolute inset-0' />

      <div className='flex flex-col'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
