"use client"
import React, { useEffect } from 'react'
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        logo: 'https://metalogic.com.np/careers/flexible.svg',
        title: "Flexibility at work",
    },
      {
        logo: "https://metalogic.com.np/careers/ownership.svg",
        title: "Take OwnerShip",
    },
    
    {
        logo: "https://metalogic.com.np/careers/growth.svg",
        title: "Unlimited Growth",
    },
   
    {
        logo: "https://metalogic.com.np/careers/inclusivity.svg",
        title: "Make Yourself Heard",
    },
   
    {
        logo: "https://metalogic.com.np/careers/teamspirit.svg",
        title: "Team Spirit",
    },
    {
        logo: "https://metalogic.com.np/careers/inclusivity.svg",
        title: "Inclusivity at Work",
    },
   
    
]

const Cares = () => {
     useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-[#ffffe1]'>
        <div className='container h-auto flex flex-col md:flex-row items-center justify-between '>
        <div className='mx-5 flex flex-col md:flex-row '>
        <div className='w-full  md:w-1/3 pb-8 pt-20 md:px-3 lg:px-10' 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            >
            <h1 className="text-2xl lg:text-4xl font-bold text-[#334767] pb-5">Metalogic Cares For You</h1>
            <p className='text-[16px]'>We're less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing - at work and at home</p>
        </div>
        <div className='pb-20 w-full md:w-2/3 flex items-center justify-center md:pt-20' 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:mx-20 justify-items-center'>
                {data.map((item, id) => (
                    <Card key={id} item ={item} className='px-5 py-14 bg-[#fffff6] border drop-shadow-md min-w-[200px] text-[16px]'/>
                ))}
            </div>
        </div> 
        </div>
    </div>
    </div>
  )
}

export default Cares