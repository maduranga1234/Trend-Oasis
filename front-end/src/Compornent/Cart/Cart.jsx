import React from 'react'
import CartItem from './CartItem'

export default function Cart() {
  return (
    <div>
      <div className='relative grid-cols-3 lg:grid lg:px-16'>
      <CartItem/>
      </div>

      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>

            <div className='border'>
             right side
            </div>

      </div>

      
    </div>
  )
}
