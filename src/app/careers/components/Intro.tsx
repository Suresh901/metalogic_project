
const Intro = () => {
  return (
    <div className='z-[1] w-full h-full'>
      <div className='bg-[#c3c1c1] h-screen flex flex-col items-center justify-center gap-10'>
       <div className='pt-20'>
         <h1 className='text-xl font-semibold'>Careers</h1>
        </div> 
        <div className='font-bold text-4xl md:text-5xl lg:text-6xl flex flex-col items-center gap-2'>
          <h1> Navigate Your Next </h1>
          <h1> <span className='text-[#228b22]'>Career</span> Move</h1>
        </div>
        <div className='flex flex-col items-center text-[18px] gap-1'>
          <h2>We're continiously searching for the </h2>
          <h2>right talent. Check if you're a good</h2> 
          <h2>match.</h2>
        </div>
        <div>
          <button className='bg-[#001c48] px-8 py-2 text-white rounded-md hover:bg-[#19325A]'>Explore Opportunities</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
