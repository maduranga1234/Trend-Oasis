import React from 'react'

export default function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3'>

        <div className='h-[13rem] w-[10rem]'>

              <img src='https://www.solestop.com/cdn/shop/products/boy-london-punk-tee-black-women-boylbptb-blk-416.jpg?v=1620438873' className='object-cover object-top w-full h-full'  />

        </div>

        <div className='p-4'>

         <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
         <p className='mt-2 text-sm text-gray-500'>Man  Solid Pure Cotton </p>

        </div>

      
    </div>
  )
}
