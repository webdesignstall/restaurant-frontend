'use client'

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { useEffect } from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('Error:', error); // Log the error for debugging purposes
    }, [error]);

    return (
        <div>
            <div>
                <Header />
                <div>
                    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
                        {/* Error Section */}
                        <section className="transition-opacity duration-700 flex flex-col justify-center items-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Oops! Something went wrong.</h1>
                            <p className="text-base md:text-lg text-center text-gray-600 max-w-xl mb-6">
                                We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
                            </p>
                            <button
                                onClick={reset}
                                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md text-center shadow-md hover:bg-red-700 hover:shadow-lg transition-transform transform hover:scale-105"
                            >
                                Try Again
                            </button>
                        </section>

                        {/* Decorative Element */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
