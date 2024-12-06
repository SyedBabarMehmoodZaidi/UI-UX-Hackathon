import React from 'react';
import Image from 'next/image';
import Radio from '/public/Images/Radio.png';

const Banner = () => {
  return (
    <div className='ml-24 m-16 mt-28'>
      <div className='relative bg-black w-[1170px] h-[500px] flex items-center justify-between overflow-hidden'>
        {/* Left Section */}
        <div>
          <p className='text-[#00FF66] w-[90px] h-[20px] pt-[9px] pl-[56px]'>Categories</p>

          <h1 className='text-white font-bold w-[470px] h-[120px] pt-[60px] pl-[56px] text-[48px]'>
            Enhance Your Music Experience
          </h1>

          <div className='flex justify-start items-center w-[320px] h-[62px] mt-10 pt-[100px] pl-[56px] gap-2'>
            <div className='border border-gray-300 w-[62px] h-[62px] rounded-full p-2 bg-white flex flex-col items-center'>
              <p className='font-bold text-[16px] w-[19px] h-[20px]'>23</p>
              <p className='w-[32px] h-[18px] font-normal text-[11px]'>Hours</p>
            </div>

            <div className='border border-gray-300 w-[62px] h-[62px] rounded-full p-2 bg-white flex flex-col items-center'>
              <p className='font-bold text-[16px] w-[21px] h-[20px]'>5</p>
              <p className='w-[28px] h-[18px] font-normal text-[11px]'>Days</p>
            </div>

            <div className='border border-gray-300 w-[62px] h-[62px] rounded-full p-2 bg-white flex flex-col items-center'>
              <p className='font-bold text-[16px] w-[21px] h-[20px]'>59</p>
              <p className='w-[43px] h-[18px] font-normal text-[11px]'>Minutes</p>
            </div>

            <div className='border border-gray-300 w-[62px] h-[62px] rounded-full p-2 bg-white flex flex-col items-center'>
              <p className='font-bold text-[16px] w-[20px] h-[20px]'>35</p>
              <p className='w-[48px] h-[18px] font-normal text-[11px]'>Seconds</p>
            </div>
          </div>

          <div className='pt-[60px] pl-[56px]'>
            <button className='bg-[#00FF66] text-white w-[171px] h-[56px] rounded-[4px]'>Buy Now</button>
          </div>
        </div>

        {/* Right Section */}
        <div className='relative w-[600px] h-[420px] flex items-center justify-center mr-[40px]'>
          {/* Blurred Background */}
          <div
            className='absolute w-[504px] h-[500px] bg-[#D9D9D9] blur-[200px]'
            style={{
              top: '0',
              right: '-50px',
              zIndex: 0,
            }}
          ></div>
          {/* Radio Image */}
          <Image src={Radio} alt='radio' width={568} height={330} className='relative z-10' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
