import React, { useState, useRef } from 'react';
import HomeSectionCard from '../Customer/HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@headlessui/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { mens_kurta } from '../../Data/mens_kuruta';


export default function HomeSectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4.5 },
  };

  const items = mens_kurta.slice(0, 10).map((item, index) => (
    <div key={index} className="p-2">
      <HomeSectionCard product={item} />
    </div>
  ));

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - Math.floor(responsive[1024].items)) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="px-4">
      <div className="relative p-8 border border-black">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          ref={carouselRef}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          mouseTracking
        />

        {activeIndex > 0 && (
          <Button
            className="z-50"
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
            }}
            onClick={slidePrev}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}

        {activeIndex < items.length - Math.floor(responsive[1024].items) && (
          <Button
            className="z-50"
            style={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
            }}
            onClick={slideNext}
            aria-label="next"
          >
            <KeyboardArrowRightIcon />
          </Button>
        )}
      </div>
    </div>
  );
}
