import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
      <h2 className='text-center text-5xl'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I provide comprehensive full-stack development services, specializing in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). My services include frontend and backend development, API integration, database management, responsive design, and performance optimization to ensure seamless user experiences across all devices.
      </p>

      <div className='grid grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-pink-100 hover:shadow-[6px_6px_15px_rgba(0,0,0,0.50)] hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-10'></Image>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image src={assets.right_arrow} alt='' className='w-4'></Image>
                </a>
            </div>
        ))}
      </div>


    </div>
  )
}

export default Services
