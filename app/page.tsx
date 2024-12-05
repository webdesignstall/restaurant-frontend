'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import MainSlider from './component/MainSlider';
import TopNavbar from './component/TopNavbar';
import OrderForm from './component/OrderForm';
import OrderCard from './component/OrderCard';

export default function Home() {
  return (
    <div>
      <div>
        {/* Top bar */}
        <div className="text-center w-full text-white font-medium tracking-wide text-[16px] py-2.5 bg-[#FFA014]">
          <p>Book your holiday party and catering today | Book Now</p>
        </div>

        <div className="bg-neutral-300 text-black py-1 px-2 text-right">
          <Link href="/">Enable Accessibility</Link>
        </div>
        {/* Navbar */}
        <TopNavbar />
        {/* slider */}
        <MainSlider />
        {/* OrderForm */}
        <OrderForm />
        {/* Order Card */}
        <OrderCard />
      </div>
    </div>
  );
}


