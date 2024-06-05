import React from 'react'
import HomeSectionCard from '../Customer/HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';

export default function HomeSectionCarosel() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


    const items=[1,1,1,1,1].map((item)=><HomeSectionCard/>)
  return (
    <div>
       <AliceCarousel
      items={items}
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={1200}
      infinite
      responsive={responsive}
    />
    </div>
  )
}
