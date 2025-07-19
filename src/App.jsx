import React from 'react'
import { Features, Footer, Hero, Navbar } from './components'

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
