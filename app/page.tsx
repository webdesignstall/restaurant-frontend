'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import MainSlider from './component/MainSlider';
import TopNavbar from './component/TopNavbar';
import OrderForm from './component/OrderForm';
import OrderCard from './component/OrderCard';
import MarkSection from './component/MarkSection';
import Food from './component/Food';
import Fusion from './component/Fusion';

export default function Home() {
  return (
    <div>
      <div>
        {/* Top bar */}
        <div className="text-center w-full text-gray-900 font-medium tracking-wide text-[15px] py-2.5 bg-[#FFA014]">
          <p>Book your holiday party and catering today | Book Now</p>
        </div>

        <div className="bg-neutral-300 text-black py-1 px-2 text-right">
          <Link href="/">Enable Accessibility</Link>
        </div>
        {/* Navbar */}
        <div className='sticky top-0 bg-white z-40'>
          <TopNavbar />
        </div>
        {/* slider */}
        <MainSlider />
        {/* OrderForm */}
        <OrderForm />
        {/* Order Card */}
        <OrderCard />
        <MarkSection />
        <Food />
        <Fusion />
      </div>
    </div>
  );
}


