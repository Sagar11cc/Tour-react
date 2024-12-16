import React from 'react'
import TopBanner from '../components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'

const About = () => {
  return (
    <div>
      <TopBanner text='About' />


      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row px-4 md:px-0  gap-4">
          <div className='flex-1'>
            <div className="relative">
              <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="travel" className="rounded-lg" />
              <div className="absolute bottom-[45%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg">
                HOW WE ARE BEST <br /> FOR TRAVEL!
              </div>
            </div>
            <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl '>How We Are Best For Travel !</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis deleniti mollitia qui provident maxime aliquid, voluptatem quae architecto quaerat sed nihil sunt facilis eligendi fugiat quasi sint reiciendis atque voluptates suscipit tempore iure. Iusto qui esse incidunt possimus nam tenetur assumenda eum dolorum autem a deserunt sequi tempora dicta nisi aliquid minima voluptas laboriosam sint amet, id enim in ab. Tempora voluptate atque illum nulla possimus nesciunt temporibus fuga recusandae officiis fugit, amet illo laborum ipsa delectus in aperiam exercitationem quod architecto? Dicta maiores accusantium sed quod porro dolore ipsam perspiciatis. Perspiciatis, natus quia sed odit quaerat mollitia! Id consequuntur earum minus dolores eius. Omnis quisquam magnam corrupti inventore porro ut voluptates repellat, facere cum, tempore minima ex numquam.</p>
          </div>
          <div className='flex-1'>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={trip} alt="" className='w-20 ' />
                {/* <img src={pin} alt="" className='w-20' /> */}
                <div>

                  <h2 className="ml-2 text-2xl font-semibold mb-1">50+ Destination</h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full p-6 my-4 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start  mb-4">
                <img src={price} alt="" className='w-20' />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">Best Price</h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={time} alt="" className='w-20' />
                <div>

                  <h2 className="ml-2 text-2xl font-semibold mb-1">Super Fast Booking</h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About
