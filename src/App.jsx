import './App.css'
import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Features from './components/Features'

const App = () => (
  <div className="bg-brand text-white leading-loose  ">
    <div className="container mx-auto ">
      <Navbar />
      <Banner />
      <About />
      <Features />
      <Footer />
    </div>
  </div>
)

export default App
