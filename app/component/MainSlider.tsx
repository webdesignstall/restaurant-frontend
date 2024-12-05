'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MainSlider() {
  // Parent container variant to control child animations
  const parentVariants = {
    hidden: { opacity: 1 }, // The container is visible but children start hidden
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  // Child variants for individual lines
  const childVariants = {
    hidden: { opacity: 0, y: 30 }, // Each line starts below and invisible
    visible: {
      opacity: 1,
      y: 0, // Moves into position
      transition: { type: 'spring', stiffness: 60, damping: 15 },
    },
  };

  return (
    <div>
      <div className="w-full h-screen bg-cover bg-[url('/Website_Banner_1551x600.jpg')]">
        <div className="h-full">
          <motion.div
            className="flex justify-center items-center flex-col h-full"
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Each text line with child animation */}
            <motion.div
              className="mb-4"
              variants={childVariants} // First line
            >
              <p className="text-6xl font-semibold text-white">Our Pie. Your Place.</p>
            </motion.div>

            <motion.div
              className="mb-6"
              variants={childVariants} // Second line
            >
              <p className="text-2xl text-white">Pre-order your whole squash pie!</p>
            </motion.div>

            <motion.div
              variants={childVariants} // Third line
            >
              <button className="px-8 border-white py-2 rounded-full border bg-gray-200 text-lg">
                Order Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
