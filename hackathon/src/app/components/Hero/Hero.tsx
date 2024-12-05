import React from 'react'
import Image from 'next/image'
import Apple from '/public/Images/Applelogo.png'
import HeroPhone from '/public/Images/heroMobile.png'
import Dot from '/public/Images/Dot.png'

const Hero = () => {
  return (
    <div className='flex justify-center items-center m-10 gap-8'>

    <div className="h-[344px] flex flex-col justify-start">
    <ul className='space-y-4'>
        <li className='flex items-center gap-8'>Woman's Fashion <span className="text-gray-950">{'>'}</span></li>
        <li className='flex items-center gap-14'>Man's Fashion <span className="text-gray-950">{'>'}</span></li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
    </ul>    
    </div>

    <div className='w-[892px] h-[344px] bg-black text-white flex justify-between items-center p-12'>
  
  <div className='flex flex-col justify-start'>
    
    
    <div className='flex items-center gap-4 mb-[26px]'>
    
      <Image src={Apple} alt='Applelogo' width={40} height={49} />
    
      <p>iPhone 14 Series</p>
    
    </div>

    
    <h1 className='font-semibold mb-4 text-[48px]'>Up to 10% off Voucher</h1>

    <button className='flex items-center text-left text-white pb-1'>
  <span className='border-b-2 border-white'>Shop Now</span>
  <span className='ml-2'>→</span>
</button>

    

  </div>

    <div className='flex-shrink-0'>
    <Image src={HeroPhone} alt='mobilepic' width={496} height={352} />
  </div>

  

</div>

    </div>
  )
}

export default Hero


