import Image from 'next/image'
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='bg-[#001c48] text-white px-5  py-10 '>
     <div className='flex flex-col md:grid md:grid-cols-6 lg:flex lg:flex-row md:justify-between mx-5 md:mx-10 pt-20 pb-5 gap-5 md:gap-5 '>
        <div className='flex flex-col md:flex-row lg:flex-col md:col-span-full md:justify-between lg:justify-normal md:pb-10'>
        <div className='flex items-center gap-5' >
          <div className='w-10 h-10'>
            <Image src='https://metalogic.com.np/metalogo.png' alt='image' width={50} height={50} className='' />
          </div>
            <div >
              <h1 className='text-2xl'>MetaLogic</h1>
              <h2>Software Private Limited</h2>
            </div>
          </div>

        <div className='flex flex-col gap-1 lg:ml-10 pt-5'>
          <div className='flex items-center gap-3'>
            <MdOutlineLocationOn className='text-xl'/>
            <h1>Saptakhel, Lalitpur (Head office)</h1>
          </div>

          <div className='flex items-center gap-3'>
            <FiPhone />
            <h1>+ 977 9851353599</h1>
          </div>

          <div className='flex items-center gap-3'>
            <MdOutlineEmail />
            <h1>info@metalogic.com.np</h1>
          </div>
       
        </div>
      </div>

      <div className='mr-5 hidden lg:block'> 
     
      </div>

      <div className=' flex flex-col gap-2 '>
          <h1 className='font-bold text-xl'>Company</h1>
          <div className='text-[14px]  flex flex-col gap-1'>
            <ul className='cursor-pointer'>
              <li>Feedback</li>
              <li>Partnership</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
      </div>
          
      <div className=' flex flex-col gap-2 md:col-span-2'>
        <h1 className='font-bold text-xl'>Services</h1>
          <div className='text-[14px]  flex flex-col gap-1'>  
            <ul className='cursor-pointer'>
              <li>Custom Software Development</li>
              <li>Web Development</li>
              <li><h2>Mobile App Development</h2></li>
              <li><h2>Cloud Computing Services</h2></li>
              <li><h2>Quality Assurance and Testing</h2></li>
              <li><h2>UI/UX Designing</h2></li>
              <li><h2>Maintenance and Support</h2></li>
              <li><h2>Dev Ops</h2></li>
              <li><h2>Blockchain Solutions</h2></li>
            </ul>
          </div>
      </div>

        <div className=' flex flex-col gap-2'>
          <h1 className='font-bold text-xl'>Join</h1>
          <div className='text-[14px]  flex flex-col gap-1'>
            <ul className='cursor-pointer'>
              <li>Careers at MetaLogic</li>
              <li>Internships</li>
            </ul>
          </div>
        </div>

          <div className='md:col-span-2'>
            <h1 className='font-bold text-xl'>Join us on Social Medias</h1>
            <div className='flex items-center  gap-3 pt-5 '>
              <div className="bg-transparent border rounded-full text-brand w-10 h-10 flex items-center justify-center">
                <FaWhatsapp className='text-2xl' />
              </div>
            <div className="bg-transparent border rounded-full text-brand w-10 h-10 flex items-center justify-center">
                <FiFacebook className='text-2xl' />
              </div>
            <div className="bg-transparent border rounded-full text-brand w-10 h-10 flex items-center justify-center">
                <FiInstagram className='text-2xl' />
              </div>
            <div className="bg-transparent border rounded-full text-brand w-10 h-10 flex items-center justify-center">
                <FiLinkedin className='text-2xl' />
              </div>
            </div>
          </div>   
            
      </div>
      <div className='pt-5 mx-5 md:mx-10'>
        <h1>© Copyright 2024 MetaLogic. All rights reserved.</h1>
      </div>
  
    </div>
  )
}

export default Footer


