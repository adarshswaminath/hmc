import React from 'react'
import Hero from './Components/Hero'
import Ship from './Components/Ship'
import Cards from './Components/Cards'
import About from './Components/About'
import History from './Components/History'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-[#111820]'>
      <Hero/>
      <Ship/>
      <Cards/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App