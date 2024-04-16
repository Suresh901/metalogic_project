"use client"
import Heading from './Heading'
import { RiSearchLine } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: { title: string | null };

}

const Search: React.FC<Props> = ({handleChange, input}) => {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
          <Heading title='Available Vacancies' title1='Opportunities' className='text-[#eab308]' />
        <div className='flex items-center justify-center flex-col pb-10 mx-5 gap-5' data-aos="fade-up"
     data-aos-duration="2000">
             <input 
             type="text" 
             placeholder='Job Title/Keyword' 
             className='outline-none border-2 p-2 w-full md:w-[800px] rounded-md'
             value={input.title || ''}
             onChange={handleChange}
             />
           
            <div className='flex gap-5 w-full md:w-[800px]'>
                <select className='border-2 w-full p-2 rounded-md outline-none'>
                <option value="">Internship</option>
                <option value="">Junior Level</option>
                <option value="">Mid Level</option>
                <option value="">Senior</option>
            </select>
            <button className='bg-[#e53b3a] p-2 px-4 text-white rounded-md'>
                <RiSearchLine size={25} />
            </button>
            </div>
        </div>
    </>
  )
}

export default Search