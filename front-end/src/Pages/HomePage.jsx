import React from 'react'
import MainCrosel from '../HomeCrosel/MainCrosel'
import HomeSectionCarosel from '../Compornent/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../Data/mens_kuruta'

export default function HomePage() {
  return (
    <div>
      <MainCrosel/>
      <div className='flex flex-col justify-center py-20 space-y-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens kuruta"}/> 
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Shoes"}/> 
        <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Shirt"}/> 
        <HomeSectionCarosel data={mens_kurta} sectionName={"Womens Saree"}/> 
        <HomeSectionCarosel data={mens_kurta} sectionName={"Womens Dress"}/> 
      </div>
    </div>
  )
}
