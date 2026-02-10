import React from 'react'

const HeroSection7 = () => {
  return (
    <div className="hero  bg-[#477DE7] p-7">
        <div className="hero m-auto w-[90%] items-center lg:w-[75%] items-center flex flex-col  md:flex-col lg:flex-row justify-between">
    
        <h1 className='text-white font-medium text-[38px]'   >Request a Custom Travel Quote</h1>
        
       
        <div className="btn  flex gap-7  sm:gap-7    md:gap-24 lg:gap-24 flex-col sm:flex-col md:flex-row lg:flex-row px-2.5  py-2.5">
          <a href="" className='bg-white text-[#477DE7] px-5  py-3  outline-0 border-0 text-[16px]   rounded-3xl' > Corporate Tours  </a>
          <a href="" className='bg-white text-[#477DE7] px-5 py-3   outline-0 border-0 text-[16px]  rounded-3xl'> Family Tours </a>
        </div>
        </div>
    </div>
  )
}

export default HeroSection7