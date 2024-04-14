import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className='z-[999] fixed top-0 w-full bg-transparent shadow-sm backdrop-blur-md'>
      <div className='flex items-center justify-between mx-5 lg:mx-10 py-5'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <Image src='https://metalogic.com.np/metalogo.png' alt='image' width={30} height={30} className='w-10 h-10' />
          <h1 className='text-2xl lg:text-3xl font-semibold text-[#334767] '>MetaLogic</h1>
        </div>
        <div className='lg:flex items-center gap-7 cursor-pointer font-semibold hidden text-md'>
          <Link href='/'>
          <h1>Home</h1>
          </Link>
          <div>Services</div>
          <Link href='careers'>
          <h1>Careers</h1>
          </Link> 
          <div>Blogs</div>
          <div>About Us</div>
        </div>
        <button className='bg-[#e53b3a] text-white text-md px-4 py-2 rounded-md text-sm font-semibold hidden lg:block'>Get In Touch</button>

        <div className='lg:hidden text-[#e53b3a]'>
          <IoMenu className='text-[40px] md:text-[50px]' />
        </div>
      </div>
    </div>
  );
}

export default Header;
