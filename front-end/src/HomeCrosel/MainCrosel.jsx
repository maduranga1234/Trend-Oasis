import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner from '../images/banner.png'
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import banner3 from '../images/banner3.png'



const MainCrosel = () => {

  const items = [
    <img className='z-10 cursor-pointer' key={1} role='presentation' src={banner1} alt='Slide 1' />,
    <img className='z-10 cursor-pointer' key={2} role='presentation' src={banner2} alt='Slide 2' />, 
    <img className='z-10 cursor-pointer' key={3} role='presentation' src={banner} alt='Slide 3' />, 
    <img className='z-10 cursor-pointer' key={4} role='presentation' src={banner3} alt='Slide 4' />, 
   
   
  ];

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
