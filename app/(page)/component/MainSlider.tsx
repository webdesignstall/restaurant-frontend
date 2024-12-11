'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MainSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    afterChange: (current: number) => setCurrentSlide(current),
    arrows: false, // Hide default arrows
    appendDots: (dots: any) => (
      <div
        style={{
          margin: '60px 0'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`${currentSlide === i
          ? 'bg-white scale-110'
          : 'border-white border'
          } w-3 h-3 lg:w-4 lg:h-4 rounded-full lg:rounded-full border-white lg:flex lg:items-center lg:justify-center text-xs text-white`}
      >
        {/* <span className="lg:hidden">{i + 1}</span> */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  const slides = [
    {
      background: '/Website_Banner_1551x600.jpg',
      title: 'Our Pie. Your Place.',
      subtitle: 'Pre-order your whole squash pie!',
      buttonText: 'Order Now',
    },
    {
      background: '/Reservations-Slider_1551x600.jpg',
      title: 'Fresh Ingredients, Every Day.',
      subtitle: 'Experience the taste of freshness!',
      buttonText: 'Learn More',
    },
    {
      background: '/Crispd-Group-Shots_TFK012_DAY06_DSC03333-Enhanced-NR_v02-scaled.jpg',
      title: 'Delicious Recipes Await.',
      subtitle: 'Join us for a culinary journey.',
      buttonText: 'Discover More',
    },
  ];

  return (
    <div className="slider-container relative group">
      {/* Custom Navigation Arrows */}
      <button
        className="hidden lg:block absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="hidden lg:block absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <ChevronRight size={24} />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[40vh] sm:h-[40vh] lg:h-[80vh] relative bg-cover bg-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                src={slide.background}
                alt="Slide Background"
                priority
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <motion.div
                className="flex flex-col items-center text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                <h1 className="text-white">
                  {slide.title}
                </h1>
                <h4 className="text-white pb-14">
                  {slide.subtitle}
                </h4>
                <Button className="bg-secondary text-lg lg:text-xl font-medium py-2 lg:py-4 px-6 lg:px-8 hover:bg-secondary rounded-full text-primary">
                  {slide.buttonText}
                </Button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
