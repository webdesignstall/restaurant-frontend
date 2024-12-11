import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className=''>
        <div className='lg:grid grid-cols-5 gap-x-2 flex flex-col  max-w-7xl m-auto'>
          <div className='col-span-3'>
            <div className="flex-grow h-[70vh] flex flex-col justify-center items-center  px-4">
              <div className="text-center">
                <h1 className="text-[10rem] font-extrabold text-primary/10">404</h1>
                <p className="mt-4 text-2xl font-semibold text-gray-800">
                  This Page Could Not Be Found!
                </p>
                <p className="mt-2 text-gray-600">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="px-6 py-3 bg-primary text-white font-medium text-lg rounded-full shadow-md hover:bg-primary hover:shadow-lg transition-transform transform hover:scale-105"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='py-12 px-4 col-span-2'>
            <div className='flex flex-col h-full justify-center items-center gap-8'>
              <div>
                <h2 className='text-center lg:text-left text-5xl pb-2 text-primary'>
                  Search Our Website
                </h2>
                <p className='text-center lg:text-left'>Can't find what you need? Take a moment and do a search below!</p>
              </div>
              <div className='w-full relative'>
                <Search className='absolute top-3 left-3 text-gray-400' />
                <Input type='search' placeholder='Search' className='bg-gray-100 w-full py-6 pl-10' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
