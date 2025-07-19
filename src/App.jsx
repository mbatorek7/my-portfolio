import React from 'react'
import { Features, Footer, Hero, MatrixRainingCode, Navbar } from './components'

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden'>

      <MatrixRainingCode className='absolute inset-0' />

      <div className='flex flex-col'>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>

    </div>
  )
}

export default App
