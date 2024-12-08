'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function AnimatedSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    afterChange: (current: number) => setCurrentSlide(current),
    arrows: false, // Custom arrows
    customPaging: (i: number) => (
      <div className={`square-dot ${i === currentSlide ? 'active' : ''}`} />
    ),
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
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <FaArrowRight size={24} />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[70vh] sm:h-[70vh] lg:h-[80vh] relative bg-cover bg-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                className="w-full h-full object-cover"
                src={slide.background}
                alt="Slide Background"
                layout="fill"
                priority={index === 0}
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
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
              >
                <h1 className="text-3xl sm:text-5xl lg:text-[5rem] font-semibold text-white mb-0 font-bebas tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-2xl text-white mb-10">
                  {slide.subtitle}
                </p>
                <button className="px-10 py-2 text-sm sm:text-base lg:text-lg font-medium rounded-full bg-orange-600 hover:bg-orange-500 text-white transition">
                  {slide.buttonText}
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
