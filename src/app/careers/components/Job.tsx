"use client"
import { useEffect } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Job = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='container flex flex-col items-center justify-center pt-10 pb-10 px-2 lg:px-0'>
      <div className='w-full md:w-[800px] pb-8' data-aos="fade-up" data-aos-duration="1000" >
        <h1 className='font-semibold text-lg p-2'>1 Job Offers</h1>
      </div>
     <div className='w-full md:w-[800px] flex items-center justify-between gap-5 border-b pb-2 hover:bg-gray-100 p-2 text-sm overflow-x-auto overflow-hidden'
     data-aos="fade-up"
     data-aos-duration="1000">
        <div className='flex flex-col'>
            <h1 className='font-bold'>Frontend Intern (MERN Stack)</h1>
            <span className=' text-[#74a6f8]'>(219 applicants)</span>
        </div>
          <span>Full Time</span>
          <span>Lalitpur, Kathmandu</span>
          <button className='flex items-center gap-2 rounded-full px-6 py-1 bg-[#fee2e2] text-red-500'>
            <FaRegDotCircle /> Closed
          </button>
      </div>
    </div>
  )   
}

export default Job