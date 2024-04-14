import React from 'react'
import Card from './Card'

// interface Data {
//     logo: string;
//     title: string;
//     desc?: string;
// }

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
  return (
    <div className='bg-[#f6f8ff] flex flex-col items-center'>
    <div className='mx-5 md:mx-20'>
        <div className='flex flex-col items-center gap-5 pt-40 pb-10'>
            <h1 className='text-[#e53b3a] font-bold text-2xl'>Values</h1>
            <h1 className='text-2xl lg:text-4xl font-bold text-[#334767]'>We Believe in</h1>
            <p>We believe in creating an environment where individuals can thrive and make a 
                <span className='flex items-center justify-center'>meaningful impact.</span>
            </p>
        </div>
        <div className='pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:px-20 lg:mx-10 justify-items-center'>
                {data.map((item, id) => (
                    <Card key={id} item ={item} />
                ))}
            </div>
        </div> 
    </div>
    </div>
  )
}

export default Value