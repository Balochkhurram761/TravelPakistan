import React from 'react'
import Image from 'next/image'
import HeroSection3Array from '@/data/HeroSection3Array'
const HeroSection3 = () => {
  return (
    <div className="herosection3 flex bg-[#4681E7] flex-col  sm:flex-col md:flex-row lg:flex-row  w-[100%]">
        <div className="section1 bg-[#4263C1] text-white font-semibold p-7 m-auto sm:m-auto md:m-0 lg:m-0  w-[66%] sm:w-[60%] md:w-[25%] lg:w-[25%] justify-start  sm:justify-start md:justify-end lg:justify-end flex items-center md:items-center  capitalize ">
            <h1  className='text-1xl md:text-[1.8vw]'>why book with Us ?</h1>
        </div>
        <div className="details  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-[100%] lg:grid-cols-4 sm:w-[100%]  md:w-[75%] lg:w-[75%]  ">
            
               {HeroSection3Array.map((item)=>{
               return(
           
        <div className="detail flex flex-col items-center gap-6  justify-center  p-7">
           <Image src={item.image}  alt='image'  width={40}
                height={40} />
            <h1 className='text-white uppercase font-semibold text-1xl md:text-[1.7vw]  lg:text-[1vw]' >{item.title}</h1>
        </div>
            ) 
               })}
        </div>
    </div>
  )
}

export default HeroSection3