import React from "react";
import Slider from "react-slick";
import img from '../assets/Tokyo.jpg'
import { Clock } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="slider-container ">
            <Slider {...settings}>
                <div className="mr-5">

                <div className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 ">
                    <div className="p-0 ">
                        <img
                            src={img}
                            alt='name'
                            width={600}
                            height={400}
                            className="object-cover w-full h-48 hover:scale-110 transition-all"
                        />
                        <div className="p-4">
                            <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'> <Clock className='w-4 h-4' />5 days - 4 nights</p>
                            <h3 className="text-xl font-bold mb-2">name</h3>
                            <p className="text-gray-600 mb-4">Experience the beauty and culture of </p>
                            <button className='px-3 py-2 bg-red-500 rounded-md text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 ">
                    <div className="p-0 ">
                        <img
                            src={img}
                            alt='name'
                            width={600}
                            height={400}
                            className="object-cover w-full h-48 hover:scale-110 transition-all"
                        />
                        <div className="p-4">
                            <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'> <Clock className='w-4 h-4' />5 days - 4 nights</p>
                            <h3 className="text-xl font-bold mb-2">name</h3>
                            <p className="text-gray-600 mb-4">Experience the beauty and culture of </p>
                            <button className='px-3 py-2 bg-red-500 rounded-md text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 ">
                    <div className="p-0 ">
                        <img
                            src={img}
                            alt='name'
                            width={600}
                            height={400}
                            className="object-cover w-full h-48 hover:scale-110 transition-all"
                        />
                        <div className="p-4">
                            <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'> <Clock className='w-4 h-4' />5 days - 4 nights</p>
                            <h3 className="text-xl font-bold mb-2">name</h3>
                            <p className="text-gray-600 mb-4">Experience the beauty and culture of </p>
                            <button className='px-3 py-2 bg-red-500 rounded-md text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
            </Slider>
        </div>
    );
}

export default MultipleItems;
