import React from "react";
import Slider from "react-slick";
import Bali from '../assets/Bali.jpg'
import Paris from '../assets/Paris.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import India from '../assets/India.jpg'
import Venice from '../assets/Venice.jpg'
import back from '../assets/back.png'
import next from '../assets/next.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CSS/reactSlick.css'
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import required modules
// import { Navigation, Pagination } from 'swiper/modules';

import { Clock, Star } from 'lucide-react'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red", color:'white', borderRadius:'100%' }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red",color:'white', fontSize:'5px', borderRadius:'100%' }}
//       onClick={onClick}
//     />
//   );
// }

 const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
   <img src={next} alt="prevArrow" {...props}  />
 );

 const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
   <img src={back} alt="nextArrow" {...props}  />
 );


const FeatureDestination = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <SlickArrowLeft />,
     prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const destinationJson = [
    { name: 'Baliya', img: Bali, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
    { name: 'Venice', img: Venice, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
    { name: 'India', img: India, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
    { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star:'3 (12 reviews)', price:'69,999' },
  ]
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">Featured Destinations</h2>
          <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'></hr>
          <div className="slider-container">
            <Slider {...settings}>
              
              {destinationJson.map((destination) => (
                <div>

                <div key={destination.name} className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 mr-5">
                <div className="p-0 ">
                  <img
                    src={destination.img}
                    alt={destination.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 hover:scale-110 transition-all"
                  />
                  <div className="p-4">
                    <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'> <Clock width={15} />{destination.time}</p>
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <p className="flex gap-1 items-center"><Star width={20} fill="red"/>{destination.star}</p>
                    <p className="text-gray-600 mb-4 mt-2">Experience the beauty and culture of {destination.name}.</p>
                    <div className="flex gap-4">
                    <button className='px-3 py-2 bg-red-500 rounded-md text-white'>$ {destination.price}</button>
                    <button className='px-3 py-2 bg-black rounded-md text-white'>Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
                </div>

          ))}
              
            </Slider>
          </div>
          {/* <Swiper slidesPerView={4}
            spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {destinationJson.map((destination) => (
                <SwiperSlide>
                  <div key={destination.name} className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5">
                    <div className="p-0">
                      <img
                        src={destination.img}
                        alt={destination.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 hover:scale-110 transition-all"
                      />
                      <div className="p-4">
                        <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'> <Clock className='w-4 h-4' />{destination.time}</p>
                        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                        <p className="text-gray-600 mb-4">Experience the beauty and culture of {destination.name}.</p>
                        <button className='px-3 py-2 bg-red-500 rounded-md text-white'>Learn More</button>
                      </div>
                    </div>
                  </div></SwiperSlide>

              ))}
            </div>
          </Swiper> */}
        </div>
      </section>
    
    </>


  )
}

export default FeatureDestination;
