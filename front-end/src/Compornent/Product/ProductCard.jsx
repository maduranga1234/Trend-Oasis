
import React from 'react';
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';




export default function ProductCard({product}) {
  
  const navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate(`product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
        <img 
        className='object-cover object-left-top w-full h-full' 
        src={product.imageUrl}
        alt='fashion model'
      />
        </div>
     
      <div className='bg-white textPart p3'>

        <p className='font-bold opacity-60'>{product.brand}</p>
         <p className=''>{product.title}</p>
      </div>
      <div className='flex items-center space-x-2'>
                 <p className='font-semibold'>{product.discountedPrice}</p>
                 <p className='line-through opacity-45'>{product.price}</p>
                 <p className='font-semibold text-green-600'>{product.discountPersent}</p>
      </div>
    </div>
  );
}
