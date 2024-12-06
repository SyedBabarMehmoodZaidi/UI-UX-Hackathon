import React from 'react'
import Image from 'next/image'
import CellPhone from '/public/Images/CellPhone.png'
import Computer from '/public/Images/Computer.png'
import SmartWatch from '/public/Images/SmartWatch.png'
import Camera from '/public/Images/Camera.png'
import HeadPhone from '/public/Images/HeadPhone.png'
import GamePad from '/public/Images/GamePad.png'

const Categories = () => {
  return (
    <div  className=' ml-24 m-16 mt-28 '>
      

      <div className='flex justify-start items-center gap-8 p-8 ml-[-12px]'>
      <div className='bg-[#DB4444] w-[20px] h-[40px]'></div>
      <p className='text-[#DB4444]'>Categories</p>
      </div>
      
      <div className='flex justify-start items-center gap-28 ml-4'>
        <h1 className='font-bold text-[36px]'>
            Browse By Category 
        </h1>
      
        <div className="flex gap-8 ml-auto">
        <span className="cursor-pointer text-2xl">←</span>
        <span className="cursor-pointer text-2xl">→</span>
      </div>
      </div>


      <div className='flex justify-center items-center w-[1170px] h-[145px] mt-24 gap-2'>

      <div className='border border-gray-300 w-[170px] h-[145px] rounded-lg p-4 flex flex-col items-center gap-2'>  
      <Image src={CellPhone} alt='phone' width={56} height={56}/> 
      <p>Phones</p>
      </div>

      <div className='border border-gray-300 w-[170px] h-[145px] rounded-lg p-4 flex flex-col items-center gap-2'>
      <Image src={Computer} alt='computer' width={56} height={56}/>
      <p>Computer</p>
      </div>

      <div className='border border-gray-300 w-[170px] h-[145px] rounded-lg p-4 flex flex-col items-center gap-2'>
      <Image src={SmartWatch} alt='smart watch' width={56} height={56}/>
      <p>Smart Watch</p>
      </div>

      <div className='border border-gray-300 w-[170px] h-[145px] rounded-lg p-4 bg-[#DB4444] flex flex-col items-center gap-2'>
      <Image src={Camera} alt='camera' width={56} height={56}/>
      <p>Camera</p>
      </div>

      <div className='border border-gray-300 w-[170px] h-[145px] rounded-lg p-4 flex flex-col items-center gap-2'>
      <Image src={HeadPhone} alt='headphone' width={56} height={56}/>
      <p>Headphone</p>
      </div>

      <div className='border border-gray-300 w-[170px] h-[145px] rounded-lg p-4 flex flex-col items-center gap-2'>
      <Image src={GamePad} alt='gamepad' width={56} height={56}/>
      <p>Gaming</p>
      </div>

      </div>
       
    </div>

  )
}

export default Categories
