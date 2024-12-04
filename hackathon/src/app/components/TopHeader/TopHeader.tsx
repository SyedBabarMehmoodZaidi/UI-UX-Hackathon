import React from 'react'

const TopHeader = () => {
  return (
    <div>
    <div className='bg-black text-[#FAFAFA] text-[12px] w-[1440px] h-[48px] flex justify-center items-center px-4'>
    <p>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! <span className='underline decoration-[#FAFAFA] underline-offset-2'>ShopNow</span></p>
   
    <div className='flex items-center absolute right-1'>
          <select
            className='bg-transparent text-white text-[12px] border-none outline-none'
            name='language'
            id='language'
          >
            <option className='bg-black text-white' value='English'>English</option>
          </select>
        </div>
    </div>
    </div>
  )
}

export default TopHeader
