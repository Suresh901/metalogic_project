"use client"
import { MdOutlineMail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Subscribe = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
   <div className='bg-[#e6e6e6] py-20 '>
    <div className='container flex flex-col items-center justify-center gap-5 px-2' data-aos="fade-up"
     data-aos-duration="1000">
      <div className='flex flex-col items-center justify-center gap-8 pb-10'>
      <h1 className="font-semibold text-xl">Subscribe to our News Letters</h1>
      <p className="text-center">Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
    </div>
    <div className=' w-full md:w-[800px] flex flex-col sm:flex-row items-center justify-center gap-5'>
      <input 
             type="text" 
             placeholder='Please Enter Your Email' 
             className='outline-none border-2 p-3 w-full md:w-[800px] rounded-md'
            //  value={input.title || ''}
            //  onChange={handleChange}
            />
      <button className='bg-[#ff4241] p-2 text-white rounded-md flex items-center justify-center gap-2 text-[18px] w-full sm:w-auto'> <MdOutlineMail size={25}/> Subscribe</button>
    </div>
    </div>
   </div>
  )
}

export default Subscribe