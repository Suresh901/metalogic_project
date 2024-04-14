import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='z-[999] fixed top-0 w-full bg-transparent border-b backdrop-blur-md'>
      <div className='flex items-center justify-between mx-14 py-4'>
        <div className='flex items-center gap-5 cursor-pointer'>
          <Image src='https://metalogic.com.np/metalogo.png' alt='image' width={50} height={50} />
          <h1 className='text-3xl font-semibold text-[#334767] '>MetaLogic</h1>
        </div>
        <div className='flex items-center gap-10 cursor-pointer font-bold'>
          <div>Home</div>
          <div>Services</div>
          <div>Careers</div> 
          <div>Blogs</div>
          <div>About Us</div>
        </div>
        <button className='bg-[#e53b3a] text-white px-4 py-2 rounded-md text-sm font-semibold'>Get In Touch</button>
      </div>
    </div>
  );
}

export default Header;
