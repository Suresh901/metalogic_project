import Link from 'next/link';
import { RiCloseLine } from "react-icons/ri";

const Sidebar = ({ toggleMenu }: any) => {
    const handleClick = () => {
    toggleMenu(); 
  };
  return (
    <div className='fixed inset-0 bg-white flex flex-col  justify-center items-center z-[999] h-screen gap-7 lg:hidden'>
        <button onClick={toggleMenu} className='absolute top-4 right-4'>
                <RiCloseLine size={30} />
        </button>
     <div className='flex flex-col items-center gap-7 cursor-pointer font-semibold  text-lg'>
          <Link href='/'>
            <h1 onClick={handleClick}>Home</h1>
          </Link>

          <Link href='/services'>
          <h1 onClick={handleClick}>Services</h1>
          </Link>

          <Link href='careers'>
            <h1 onClick={handleClick}>Careers</h1>
          </Link> 

          <Link href='blog'>
            <h1 onClick={handleClick}>Blogs</h1>
          </Link>

          <Link href='about'>
            <h1 onClick={handleClick}>About Us</h1>
          </Link>  
        </div>
        <button className='bg-[#001c48] text-white text-md px-4 py-2 rounded-md text-lg font-semibold'>Get In Touch</button>

    </div>
  );
}

export default Sidebar;
