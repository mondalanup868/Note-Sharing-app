import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navabar';
import Susmita from '../assets/susmita.png';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:justify-between px-4 sm:px-10 lg:px-16 py-8">

                {/* Text Section */}
                <div className="space-y-10 sm:space-y-6 max-w-lg text-center md:text-left">
                    {/* Animated Hello */}
                    <p className="text-yellow-400 font-semibold uppercase animate-bounce">Hello Everyone !</p>

                    {/* Main Title with animation */}
                    <h1 className="text-3xl pt-4 sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in">
                        I'm <span className="text-yellow-400">Susmita Dey</span>, <br />
                        a <span className="text-yellow-400">NEET Aspirant</span> for 2025.
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                        I want to share my notes with NEET aspirants facing difficulties in their preparation, helping them reach their goals and succeed.
                    </p>

                    {/* Button with hover effects */}
                    <Link to='/notes'>
                        <div className="space-x-4 mt-8 sm:mt-8 md:mt-10">
                            <button
                                className="bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
                            >
                                Get Notes
                            </button>
                        </div>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="mb-2 sm:mb-4 md:mb-0 md:block">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl animate-slide-in-right">
                        <img
                            src={Susmita}
                            alt="Susmita Dey"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
