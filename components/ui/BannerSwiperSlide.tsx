import {Product} from "~/types";
import Image from "next/image";
import {SwiperSlide} from "swiper/react";
import React from "react";

interface IProps {
  slide: Product
}

//
export const BannerSwiperSlide = ({ slide }: IProps) => {
  const textColor = slide.articleColorNames[0] === 'Black' ? '#f5f5f5' : '#232323';
  const btnClass = slide.articleColorNames[0] === 'Black' ? 'button-light' : 'button-dark';
  const bgColor = slide.rgbColors[0] + '88';

  return (
    <div className="flex max-h-full h-full">
      <Image
        className='hidden sm:block w-4/12 max-h-full object-cover'
        src={slide.galleryImages[1]?.baseUrl}
        alt=""
        width={475}
        height={715}
        quality={75}
      />
      <Image
        className='sm:w-4/12 max-h-full border-x-3 border-black-600 object-cover'
        src={slide.galleryImages[0]?.baseUrl}
        alt=""
        width={475}
        height={715}
        quality={75}
      />
      <Image
        className='hidden sm:block w-4/12 max-h-full object-cover'
        src={slide.galleryImages[2]?.baseUrl}
        alt=""
        width={475}
        height={715}
        quality={75}
      />
      <div
        className='absolute bottom-[-3px] sm:bottom-1/2 right-1/2 sm:translate-y-1/2
          translate-x-1/2 pt-2 pb-10 sm:py-6 px-4 w-full sm:w-5/12 flex flex-col
          justify-center items-center border-3 border-black-600
          backdrop-blur-sm'
        style={{backgroundColor: bgColor, color: textColor}}
      >
        <h3 className='text-xl sm:text-4xl font-bold text-center'>
          { slide.name } <br />
          { slide.whitePrice.formattedValue }
        </h3>
        <p className='text-lg sm:text-xl mt-1 sm:mt-2 mb-2 sm:mb-6 font-semibold'>
          { slide.categoryName }
        </p>
        <button
          className={btnClass}
        >
          BUY NOW
        </button>
      </div>
      <div className="absolute top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-8 px-4 py-2 bg-toxic border-3 font-bold">
        POPULAR
      </div>
    </div>
  )
}
