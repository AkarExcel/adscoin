'use client'
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import LiveWins from './components/LiveWins'
import Guide from './components/Guide'
import Why from './components/Why'
import Testimonial from './components/Testimonial'
import StartNow from './components/StartNow'
import Footer from './components/Footer'


export default function Home() {
  return (
  <>
    <Header/>
    <main>
      {/* <Hero/> */}
      {/* <LiveWins/>
      <Guide/> */}
      {/* <Why/> */}
      {/* <Testimonial/> */}
      <StartNow/>
    </main>
    <Footer/>
  </>
  )
}
