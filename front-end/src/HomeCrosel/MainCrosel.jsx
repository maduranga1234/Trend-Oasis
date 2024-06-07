import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCroselData from './MainCroselData';

const MainCrosel = () => {
  const items = MainCroselData.map((item, index) => (
    <img 
      key={index}
      role='presentation' 
      src={item.image} 
      alt={`Slide ${index}`} 
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      
      autoPlay
      autoPlayInterval={1200}
      infinite
    />
  );
}

export default MainCrosel;
