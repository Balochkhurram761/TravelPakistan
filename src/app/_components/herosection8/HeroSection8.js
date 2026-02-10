import HeroSection8Array8 from '@/data/HeroSection8'
import React from 'react'
import Image from 'next/image'
const HeroSection8 = () => {
  return (
   <div className="herosection8 relative m-auto w-[85%] sm:w-full md:w-full lg:w-full  h-[1700px] sm:h-[900px] md:h-[800px] lg:h-[500px] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5  my-2">
     {HeroSection8Array8.map((data)=>{
        return(
           <div className="card relative group ">
            <div className="div relative w-full h-full">
                
                           <Image  src={data.image} objectFit='cover' fill  />
            </div>
            <div className="overlay   absolute flex flex-col items-center  justify-center inset-0 bg-black/30 ">
               <div className="body absolute flex flex-col items-center   gap-1.5 text-white top-[40%] left-[25%] sm:top-[35%] sm:left-[24%] md:top-[40%]  lg:top-[50%] lg:left-[20%]  transform translate-x-1 translate-y-1.5 ">
                <div className="by flex items-center flex-col transform translate-0 group-hover:-translate-y-2 transition-all duration-300 ">
                 <div className="location text-4xl ">{data.locate}</div>
                <h1 className='text-2xl sm:text-2xl md:text-[20px] :lg:text-[1.7vw] font-extrabold ' >{data.title }</h1>
                </div>
                <a href="" className='bg-amber-400 px-4 py-1 text-[14px] text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ' >View All Tours</a>
               </div>
               </div>
            </div>   
               
        )
     })}
   </div>
  )
}

export default HeroSection8