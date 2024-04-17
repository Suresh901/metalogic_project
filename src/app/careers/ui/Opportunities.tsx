"use client"
import { useState } from 'react';
import Search from '../components/Search';
import Job from '../components/Job';

interface Input {
title: string | null
}

const Opportunities: React.FC<Input> = () => {

    const [input, setInput]= useState<Input>({ title: null })

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput({title: e.target.value})
    }
    
  return (
    <div className='bg-[#ffffff] '>
        <div className='container'>
          <Search handleChange={handleChange} input={input} />
          <Job />
        
        </div>
    </div>
  )
}

export default Opportunities