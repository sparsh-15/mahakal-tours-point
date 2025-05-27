import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import WhyMahakalTours from './components/WhyMahakalTours'
import TourPackages from './components/TourPackages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {
        <HeroCarousel/>
        }
      </main>
      <WhyMahakalTours/>
      <TourPackages/>
    </>
  )
}

export default App
