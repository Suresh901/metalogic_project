"use client"
import { MdOutlineMail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//define types
interface Input {
email: string | null
}

const Subscribe: React.FC<Input> = () => {
   useEffect(() => {
    AOS.init();
  }, []);

  
  const [input, setInput]= useState<Input>({email: null})
  const [err, setErr] = useState("")

  const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) =>{
    const value= e.target.value
    setInput({email:value})
    validateEmail(value)
  }
//email validation
  const validateEmail = (value:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      setErr("Please enter a valid email address.");
    } else {
      setErr("");
    }
  };
 //toast message for actions
 const handleClick = () => {
  if (!input.email || err) {
    toast.error("Please enter a valid email address.");
  } else {
    toast.success("Thank you for subscribing!");
  }
  setInput({email:null})
};

  return (
   <div className='bg-[#e6e6e6] py-20 '>
    <div className='container flex flex-col items-center justify-center gap-5 px-2' data-aos="fade-up"
     data-aos-duration="1000">
      <div className='flex flex-col items-center justify-center gap-8 pb-10'>
      <h1 className="font-semibold text-xl">Subscribe to our News Letters</h1>
      <p className="text-center">Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
    </div>
    <div className=' w-full md:w-[800px] flex flex-col sm:flex-row items-center justify-center gap-5 relative md:px-5 lg:px-0'>
        <input 
             type="email" 
             placeholder='Please Enter Your Email' 
             className='outline-none border-2 p-3 w-full md:w-[800px] rounded-md'
             value={input.email || ''}
             onChange={handleEmail}
            />
            <h1 className="hidden md:block absolute md:top-[60px] left-0 text-[#e53b3a] md:px-5 lg:px-0">{err}</h1>
      
      <button className='bg-[#ff4241] p-2 text-white rounded-md flex items-center justify-center gap-2 text-[18px] w-full sm:w-auto'
      onClick={handleClick}
      > 
      <MdOutlineMail size={25}/> Subscribe</button>
    </div>
    </div>
   </div>
  )
}

export default Subscribe