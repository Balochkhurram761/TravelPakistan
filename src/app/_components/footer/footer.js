import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
    <div className="back bg-[#202020] ">
    <div className="footer grid  gap-10   grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  m-auto w-[90%] sm:w-[80%] md:w-[80%] lg:w-[1300px] text-white py-7">
      
      <div className="foot   ">
        <div className="img relative w-full  h-[100px]">
          <Image src="/images/logo-2 (1).webp" alt="Logo" layout="fill" objectFit="contain" />
        </div>
        <div className="body flex flex-col gap-2 text-base ">
          <p>
            Pakistan, where your journey begins. Discover your next great place, find trips, and
            know about the famous travel destinations of Pakistan.
          </p>
          <p className="">
            A travel and tourism company of Pakistan, city sightseeing, group and corporate tours,
            camping and hiking adventures, family and solo trips, and much more for a perfect travel
            experience in Pakistan!
          </p>
        </div>
      </div>

    
      <div className="foot flex ">
        <div className="relative w-full h-[300px] sm:h-full md:h-full lg:h-full ">
          <a href="https://www.google.com/maps?q=31.5204,74.3587" target='_blank'><Image src="/images/10001 (1).png" alt="Footer Image" layout="fill" objectFit="contain" /></a>
        </div> 
      </div>

    <div className="foot py-3 flex flex-col gap-2">
        <h1 className="text-base font-semibold ">
          Pakistan Address: 8-B, Iqbal Avenue Phase 1, Nazaria-e-Pakistan Rd, Lahore.
        </h1>
        <h2 className="">
          <a href="tel:+923214106223" className="hover:underline">Phone: +92 321 410 6223</a>
        </h2>
        <h2 className="">
          <a href="tel:+924235183937" className="hover:underline">Tel: +92 423 5183 937</a>
        </h2>
        <h2 className="">
          <a href="mailto:info@pakistantravelplaces.com" className="hover:underline">info@pakistantravelplaces.com</a>
        </h2>
      </div>
      
    </div>
    </div>
    <div className="backgrou bg-[#181818]">
  <div className="foot m-auto w-[80%] py-6">
  <p className="text-white text-center text-[16px]">
    2018-2025 Pakistan Travel Places. All rights reserved. All other trademarks and photos are the property of their respective owners.
    <br />
    Designed and developed by 
    <a href="#" className="text-[rgb(132,167,232)] hover:underline"> Suave Solutions </a>
  </p>
</div>

</div>
</>
  );
};

export default Footer;
