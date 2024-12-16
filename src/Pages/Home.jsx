import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import Banner from '../components/Banner'
import Gallery from '../components/GalleryComp'
import Contact from '../components/Contact'
import Features from '../components/Features'
// import MultipleItems from '../components/component'


const Home = () => {
  return (
    <>
      <Hero/>
      <FeatureDestination/>
      <Features/>
      <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0'>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">Our Gallery</h2>
      <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'></hr>
      <Gallery/>
      </div>
      <Banner/>
      {/* <MultipleItems/> */}
      <Contact/>
      
    </>
  )
}

export default Home
