'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AnimatedSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

  const play = () => {
    sliderRef.current?.slickPlay();
  };

  const pause = () => {
    sliderRef.current?.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2600,
    adaptiveHeight: true, // Ensure slider adapts to content height
    afterChange: (current: number) => setCurrentSlide(current), // Update current slide
  };

  // Animation variants
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 },
    },
  };

  // Slider content
  const slides = [
    {
      background: '/Website_Banner_1551x600.jpg', // Replace with valid URL
      title: 'Our Pie. Your Place.',
      subtitle: 'Pre-order your whole squash pie!',
      buttonText: 'Order Now',
    },
    {
      background: '/another_image.jpg', // Replace with valid URL
      title: 'Fresh Ingredients, Every Day.',
      subtitle: 'Experience the taste of freshness!',
      buttonText: 'Learn More',
    },
    {
      background: '/third_image.jpg', // Replace with valid URL
      title: 'Delicious Recipes Await.',
      subtitle: 'Join us for a culinary journey.',
      buttonText: 'Discover More',
    },
  ];

  return (
    <div className="slider-container overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[60vh] bg-cover bg-center bg-[url('/Website_Banner_1551x600.jpg')]"
          >
            <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
              <motion.div
                className="flex flex-col items-center text-center"
                variants={parentVariants}
                initial="hidden"
                animate={currentSlide === index ? 'visible' : 'hidden'} // Trigger animations only for the active slide
              >
                <motion.div className="mb-4" variants={childVariants}>
                  <p className="text-4xl md:text-6xl font-semibold text-white">
                    {slide.title}
                  </p>
                </motion.div>

                <motion.div className="mb-6" variants={childVariants}>
                  <p className="text-lg md:text-2xl text-white">
                    {slide.subtitle}
                  </p>
                </motion.div>

                <motion.div variants={childVariants}>
                  <button className="px-6 py-3 text-sm md:text-lg font-medium rounded-full bg-white text-black hover:bg-gray-200 transition">
                    {slide.buttonText}
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
