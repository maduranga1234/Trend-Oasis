import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";

export default function OrderSummery() {
  return (
    <div>
      <div className="p-5 border shadow-lg rounded-s-md ">
        <AddressCard />
      </div>
      <div>
      <div className='relative grid-cols-3 lg:grid '>
          <div className='col-span-2'>
         { [1,1,1,1].map((item)=><CartItem/>)}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>

<div className='border'>
      <p className='pb-4 font-bold uppercase opacity-60'>Price details</p>
      <hr/>
      <div className='space-y-3 font-semibold'>
        <div className='flex justify-between pt-3 text-black'>
            <span>Price</span>
            <span>Rs.5000</span>

        </div>
        <div className='flex justify-between pt-3'>
            <span>Disccount</span>
            <span className='text-green-600 '>-Rs.3000</span>

        </div>
        <div className='flex justify-between pt-3 '>
            <span>Delivery Chage</span>
            <span className='text-green-600 '>Free</span>

        </div>
        <div className='flex justify-between pt-3 font-bold'>
            <span>Total Amount</span>
            <span className='text-green-600 '>Rs.2000</span>

        </div>
        <button
                  type="submit"
                  className="flex items-center justify-center w-full px-8 py-1 mt-4 text-base font-medium text-white bg-[#9155fd] border border-transparent rounded-md hover:bg-[#7b44d9] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Check Out
                </button>

      </div>

     

      </div>

      </div>

      </div>

     </div>
    </div>
  );
}
