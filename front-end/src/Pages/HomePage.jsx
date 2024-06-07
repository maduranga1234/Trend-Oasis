import React from 'react'
import MainCrosel from '../HomeCrosel/MainCrosel'
import HomeSectionCarosel from '../Compornent/HomeSectionCarosel/HomeSectionCarosel'

export default function HomePage() {
  return (
    <div>
      <MainCrosel/>
      <div className='flex flex-col justify-center py-20 space-y-10'>
        <HomeSectionCarosel/> 
        <HomeSectionCarosel/> 
        <HomeSectionCarosel/> 
        <HomeSectionCarosel/> 
        <HomeSectionCarosel/> 
      </div>
    </div>
  )
}
