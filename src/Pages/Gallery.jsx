import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Tokyo from '../assets/Tokyo.jpg'
import Paris from '../assets/Paris.jpg'
import Venice from '../assets/Venice.jpg'
import India from '../assets/India.jpg'

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import '../components/CSS/swiper.css'

// import './styles.css';

// import required modules

import TopBanner from '../components/TopBanner';
import GalleryComp from '../components/GalleryComp';

const Gallery = () => {
  return (
    <div>
      <TopBanner text='Gallery'/>
    <div className='my-14 max-w-7xl mx-auto px-4 md:px-0'>
      <GalleryComp/>
    </div>
    </div>
  )
}

export default Gallery
