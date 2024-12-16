import React from "react";
import contactImg from '../assets/ContactImg.jpg'

const Contact = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center">
      {/* Image Section */}
      <div className="flex-1 bg-gray-100 flex justify-center items-center">
        <img
          src={contactImg}
          alt="Contact Us"
          className="w-full h-full max-w-md md:max-w-full object-cover"
        />
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 bg-white w-full flex flex-col justify-center px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter you email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:red-blue-500 focus:border-red-500 p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
