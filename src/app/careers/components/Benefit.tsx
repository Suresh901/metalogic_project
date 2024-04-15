import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        logo: 'https://metalogic.com.np/careers/flexible.svg',
        title: "Flexibility at work",
        desc: "Do your best work at a time and place that fits us and your work-life balance."
    },
      {
        logo: "https://metalogic.com.np/careers/ownership.svg",
        title: "Take OwnerShip",
        desc: "Take responsibility to solve customer challenges by acting as your own boss."
    },
    
    {
        logo: "https://metalogic.com.np/careers/growth.svg",
        title: "Unlimited Growth",
        desc: "With no inner circle… absolutely everyone has the same opportunity to thrive."
    },
   
    {
        logo: "https://metalogic.com.np/careers/inclusivity.svg",
        title: "Make Yourself Heard",
        desc: "We encourage diverse perspectives - making it count in achieving our collective goals."
    },
   
    {
        logo: "https://metalogic.com.np/careers/teamspirit.svg",
        title: "Team Spirit",
        desc: "Come together, work as one – this is at the heart of how we work, achieve results and collaborate."
    },
    {
        logo: "https://metalogic.com.np/careers/inclusivity.svg",
        title: "Inclusivity at Work",
        desc: "We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions"
    },
    {
        logo: "https://metalogic.com.np/careers/transparent.svg",
        title: "Transparent Environment",
        desc: "Build confidence in a culture of trust and open communication - with each other and our clients."
    },
    {
        logo: "https://metalogic.com.np/careers/fulepassion.svg",
        title: "Fuel Your Passion",
        desc: "We encourage you to strive, push the limits and achieve your dreams by being best you can be."
    },
    
]
const Benefit = () => {
  return (
    <div className='bg-[#ffffff] flex flex-col container'>
        <div className='mx-5 xl:mx-10'>
       <Heading title1='Benefit' title='Life At MetaLogic' />
        <div className='pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center mx-2'>
                {data.map((item, id) => (
                    <Card key={id} item ={item} className='p-5 hover:border hover:shadow-lg w-full'/>
                ))}
            </div>
        </div> 
    </div>
    </div>
  )
}

export default Benefit