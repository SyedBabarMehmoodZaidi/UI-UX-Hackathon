import React from 'react'
import Image from 'next/image'
import Coat from '/public/Images/Coat.png';
import Bag from '/public/Images/Bag.png';
import Cooler from '/public/Images/CPUcooler.png';
import Chair from '/public/Images/Chair.png';

const SellingProducts = () => {
  return (
    <div className=' ml-24 m-16 mt-28'>

    <div className='flex justify-start items-center gap-8 p-8 ml-[-12px]'>
      <div className='bg-[#DB4444] w-[20px] h-[40px]'></div>
      <p className='text-[#DB4444]'>This Month</p>
      </div>
      
      <div className='flex justify-between items-center ml-4 mr-4'>
       <h1 className='font-bold text-[36px]'>
         Best Selling Products
       </h1>

       <button className='bg-[#DB4444] text-white w-[159px] h-[56px] rounded-[4px]'>
       View All
       </button>
    </div>


    <div className='flex row-auto w-[1170px] h-[350px] gap-16 pt-12'>
      <Image src={Coat} alt='coat' width={270} height={350}/>
      <Image src={Bag} alt='bag' width={270} height={350}/>
      <Image src={Cooler} alt='cpucooler' width={270} height={350}/>
      <Image src={Chair} alt='chair' width={270} height={350}/>
     </div> 
      
    </div>
  )
}

export default SellingProducts 
