import React from 'react'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";


const HeroSection6 = () => {
  return (
    <div className="herosection m-auto  w-/12  sm:w-10/12  md:w-9/12 flex justify-center flex-col gap-3 py-8 px-8">
        <h1 className=' text-[rgb(56, 56, 56)] font-light flex   gap-4 text-[25px]  capitalize ' ><CiLocationOn className='text-[#4263C1] w-[60px] h-[40px]' />
<span className='flex flex-col items-start gap-2 md:flex-col sm:items-start md:items-start lg:items-center lg:flex-row ' > Our Recent Tours Gallery <a
  href=""
  className="text-[rgb(132,167,232)] hover:text-blue-700 transition-all duration-300 capitalize text-[18px]"
>
  / view All photos
</a>
</span></h1>
        <p className='text-gray-500 text-base text-[rgb(140, 140, 140)] font-normal text-justify' >  Pakistan’s awe-inspiring destinations should be visited with a hike of charm and excitement. Pakistan is enriched with the vast mountain ranges for trekkers, adventure lovers and relaxing views for the calm personalities, however, Northern Pakistan is particularly called the enduring region worldwide. Breathtaking peaks, scenic lakes, whistling springs, lush green meadows, archaeological and historical sites, there are many more to make rejoice your travel expedition.Check <a href="" className='text-[#4263C1] capitalize' >  Tour Packages </a> according to popular destinations of Pakistan and confirm your booking.</p>
    </div>
  )
}

export default HeroSection6