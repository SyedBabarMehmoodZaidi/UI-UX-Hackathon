import React from 'react'
import Image from 'next/image'
import JoyStick from '/public/Images/JoyStick.png';
import Keyboard from '/public/Images/Keyboard.png';
import LCD from '/public/Images/LCD.png';
import Chair from '/public/Images/Chair.png';

const FlashSales = () => {
  return (
    <div className=' ml-24 m-16 mt-28 '>
      
      <div className='flex justify-start items-center gap-8 p-8 ml-[-12px]'>
      <div className='bg-[#DB4444] w-[20px] h-[40px]'></div>
      <p className='text-[#DB4444]'>Today's</p>
      </div>

      <div className='flex justify-start items-center gap-28 ml-4'>
        <h1 className='font-bold text-[36px]'>
            Flash Sales 
        </h1>
      
      <div>

      <div className="flex gap-8">
      <div className="text-center">
      <div className="text-sm">Days</div>
      
      <div className="font-semibold text-2xl">03</div>
      
      </div>
      
      <div className="text-center">
      <div className="text-sm">Hours</div>
      
      <div className="font-semibold text-2xl">23</div>
      </div>

      <div className="text-center">
      <div className="text-sm">Minutes</div>
      <div className="font-semibold text-2xl">19</div>
      </div>

      <div className="text-center">
      <div className="text-sm">Seconds</div>
      <div className="font-semibold text-2xl">56</div>
      </div>
      </div>
      </div>

      <div className="flex gap-8 ml-auto">
        <span className="cursor-pointer text-2xl">←</span>
        <span className="cursor-pointer text-2xl">→</span>
      </div>
      </div>

      
     <div className='flex row-auto w-[1308px] h-[350px] gap-16 pt-12'>
      <Image src={JoyStick} alt='jotstick' width={270} height={350}/>
      <Image src={Keyboard} alt='keyboard' width={270} height={350}/>
      <Image src={LCD} alt='lcd' width={270} height={350}/>
      <Image src={Chair} alt='chair' width={270} height={350}/>
     </div>
     
     <div className='flex flex-col items-center'>
     <button className='mt-20 bg-[#DB4444] text-white w-[234px] h-[56px] rounded-[4px]'>
      View All Products</button>
      </div>
      </div>
  )
}

export default FlashSales
