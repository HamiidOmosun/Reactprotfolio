import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  )
}

export default Home