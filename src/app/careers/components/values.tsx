"use client"
import { useEffect } from 'react';
import Card from './Card'
import Heading from './Heading'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const data = [
    {
        logo: 'https://metalogic.com.np/_next/static/media/continious_learning.36f5be64.svg',
        title: "Continious Learning",
        desc: "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey."
    },
    
    {
        logo: "https://metalogic.com.np/_next/static/media/team_work.45929d57.svg",
        title: "Team Work",
        desc: "We believe that best solutions comes from diverse perspective and collaborative efforts."
    },
     {
        logo: "https://metalogic.com.np/_next/static/media/mentorship.d40ba16f.svg",
        title: "Innovation",
        desc: "Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards."
    },
    {
        logo: "https://metalogic.com.np/_next/static/media/innovation.1a2c3aca.svg",
        title: "Mentorship",
        desc: "We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement."
    },
   
    {
        logo: "https://metalogic.com.np/_next/static/media/impact.cbd4d7d3.svg",
        title: "Tangible Impact Impact",
        desc: "We're committed to delivering solutions that not only meet but exceed their expectations."
    },
    {
        logo: "https://metalogic.com.np/_next/static/media/adaptability.f0ba4e14.svg",
        title: "Adaptability",
        desc: "Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey"
    },
    
]

const Value = () => {
    
     useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-[#f6f8ff] flex flex-col items-center'>
    <div className='mx-5 xl:mx-20' >
        <Heading 
        title1='Values' 
        title=' We Believe in'  
        desc= 'We believe in creating an environment where individuals can thrive and make a meaningful impact.'
        />
        <div className='pb-20'data-aos="fade-up"
     data-aos-duration="2000">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 2xl:px-20 justify-items-center'>
                {data.map((item, id) => (
                    <Card key={id} item ={item} className='p-10 border bg-white drop-shadow-xl max-w-[400px]' 
                    className2='p-5 bg-[#f3f4f6] rounded-2xl w-20' className3='text-lg'/>
                ))}
            </div>
        </div> 
    </div>
    </div>
  )
}

export default Value