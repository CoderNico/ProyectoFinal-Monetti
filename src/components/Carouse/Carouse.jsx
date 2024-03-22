import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { useState } from "react"; 

const slides = [
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/nike_phantom_barna24.webp'
},
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/dia_padre24_ES.webp'
},
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/adidas_copa_federations24_ok.webp'
},
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/puma_rush24.webp'
},
];

export const Carousel =() =>{
  const [currentIndex, setCurrentIndex] = (useState)(0)
  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return(
    <>
      <div className="h-[770px] m-auto relative">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-no-repeat bg-contain duration-500">
        </div>
        <div className='absolute top-[80%] sm:translate-y-[-1050%] md:translate-y-[-1050%] lg:translate-y-[-700%] w-12 h-12 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
      </div>
    </>
  )
}
