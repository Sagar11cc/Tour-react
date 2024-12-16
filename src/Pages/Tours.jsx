import React from 'react'
import TopBanner from '../components/TopBanner'
import Bali from '../assets/Bali.jpg'
import Paris from '../assets/Paris.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import India from '../assets/India.jpg'
import Venice from '../assets/Venice.jpg'
import back from '../assets/back.png'
import next from '../assets/next.png'
import { Clock, Star } from 'lucide-react'

const Tours = () => {
  const destinationJson = [
    { name: 'Baliya', img: Bali, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Venice', img: Venice, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'India', img: India, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
    { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
  ]
  return (
    <>
      <TopBanner text='Tours'/>
      <div className='max-w-7xl md:mx-auto my-10 '>
      <h1 className='text-3xl lg:text-4xl  font-serif mb-3 font-semibold text-center '>Top Destination</h1>
      <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'></hr>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center '>
        {destinationJson.map((destination) => (
          <div>

            <div key={destination.name} className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 md:mr-5">
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
                  <p className="flex gap-1 items-center"><Star width={20} fill="red" />{destination.star}</p>
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
      </div>

      </div>
    </>
  )
}

export default Tours
