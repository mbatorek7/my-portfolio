import React from 'react'
import { About, Projects, Contact, Footer, Hero, MatrixRainingCode, Navbar } from './components'

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden'>

      <MatrixRainingCode className='absolute inset-0' />

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
