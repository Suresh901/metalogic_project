"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { GiInfo } from "react-icons/gi";
import Sidebar from '@/components/sidebar/Sidebar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false)

  //for header background color and text color for different path
  const pathname = usePathname();

  const [navbarBackground, setNavbarBackground] = useState(
   pathname === "/careers" ? "bg-transparent" : "bg-darkblue-900"
  );
  const [textColor, setTextColor] = useState(
    pathname === "/careers" ? "text-black" : "text-white"
  );
  const [logoText, setLogoText] = useState(
    pathname === "/careers" ? "text-sky-950" : "text-white"
  );

  //for header hidden while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);


  //rerendering while changing path 
   useEffect(() => {
    setNavbarBackground(pathname === "/careers" ? "bg-transparent" : "bg-darkblue-900");
    setTextColor(pathname === "/careers" ? "text-black" : "text-white");
    setLogoText(pathname === "/careers" ? "text-sky-950" : "text-white");
  }, [pathname]); 

   const toggleMenu = () => {
    setOpen(!open); 
  };

  return (
    <>
    <div className={`z-[999] fixed top-0 w-full bg-transparent shadow-sm backdrop-blur-md transition-all duration-300 
         ${navbarBackground} ${textColor} ${visible ? 'opacity-100' : 'opacity-0 translate-y-[-100%]'}`}>
      <div className='flex items-center justify-between mx-5 lg:mx-10 py-5'>

        <div className='flex items-center gap-2 cursor-pointer relative'>
          <Image src='https://metalogic.com.np/metalogo.png' alt='image' width={30} height={30} className='w-10 h-10' />
          <h1 className={`text-2xl lg:text-3xl font-semibold ${logoText}`}>MetaLogic</h1>
          <a href='/hello.pdf' download>
          <GiInfo size={20} className={`absolute top-[-10px] right-[-10px] ${logoText}`} />
          </a>
        </div>

        {/* routes amd menu*/}
        <div className='lg:flex items-center gap-7 cursor-pointer font-semibold hidden text-md'>
          <Link href='/'>
            <h1>Home</h1>
          </Link>

          <Link href='/services'>
          <h1>Services</h1>
          </Link>

          <Link href='careers'>
            <h1>Careers</h1>
          </Link> 

          <Link href='blog'>
            <h1>Blogs</h1>
          </Link>

          <Link href='about'>
            <h1>About Us</h1>
          </Link>  
        </div>
        <button className='bg-[#e53b3a] text-white text-md px-4 py-2 rounded-md text-sm font-semibold hidden lg:block'>Get In Touch</button>

      {/* mobile menu or side menu bar */}
        <div className='lg:hidden text-[#e53b3a]'>
          <IoMenu className='text-[40px] md:text-[50px]' 
          onClick={toggleMenu}/>
        </div>

      </div>
    </div>
       {open && <Sidebar toggleMenu={toggleMenu} />}
    </>
  );
}

export default Header;
