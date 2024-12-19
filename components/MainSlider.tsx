'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CldImage } from 'next-cloudinary';

export default function MainSlider({ slides }: any) {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    adaptiveHeight: true,
    afterChange: (current: number) => setCurrentSlide(current),
    arrows: false,
    appendDots: (dots: any) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-2 -mt-16 2xl:-mt-16 lg:-mt-20">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-transform duration-300 ${currentSlide === i
            ? 'bg-white scale-110'
            : 'border border-white bg-transparent'
          }`}
      ></div>
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

  return (
    <div className="slider-container relative group">
      {/* Custom Navigation Arrows */}
      <button
        className="hidden lg:block absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="hidden lg:block absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <ChevronRight size={24} />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className="w-full h-[75vh] lg:h-[80vh] 2xl:h-[30rem] relative bg-cover bg-center"
          >
            {/* Background Image */}
            <CldImage
              width={1000}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.background}
              alt="Slide Background"
              priority
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.div
                className="flex flex-col items-center text-center px-4"
                initial="hidden"
                animate={currentSlide === index ? "visible" : "hidden"}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2, // Smooth stagger between children
                    },
                  },
                  hidden: { opacity: 0 },
                }}
              >
                <motion.h1
                  className="text-white mb-4"
                  variants={{
                    hidden: { opacity: 0, y: 50 }, // Start from below
                    visible: { opacity: 1, y: 0 }, // Move to original position
                  }}
                  transition={{
                    duration: 0.8, // Smooth longer duration
                    ease: [0.42, 0, 0.58, 1], // Ease-in-out cubic-bezier for smooth motion
                  }}
                >
                  {slide.title}
                </motion.h1>
                <motion.h4
                  className="text-white mb-8"
                  variants={{
                    hidden: { opacity: 0, y: 50 }, // Start from below
                    visible: { opacity: 1, y: 0 }, // Move to original position
                  }}
                  transition={{
                    duration: 0.8, // Smooth longer duration
                    ease: [0.42, 0, 0.58, 1], // Ease-in-out cubic-bezier for smooth motion
                  }}
                >
                  {slide.subtitle}
                </motion.h4>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 }, // Start from below
                    visible: { opacity: 1, y: 0 }, // Move to original position
                  }}
                  transition={{
                    duration: 0.8, // Smooth longer duration
                    ease: [0.42, 0, 0.58, 1], // Ease-in-out cubic-bezier for smooth motion
                  }}
                >
                  <Button className="bg-secondary text-lg lg:text-xl font-medium py-2 lg:py-6 px-6 lg:px-12 hover:bg-secondary rounded-full text-white">
                    {slide.buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
}
