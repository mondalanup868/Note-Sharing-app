import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navabar';
import Susmita from '../assets/susmita.png'

function HomePage() {
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/next-page');
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-1 md:mx-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-16 py-12">
                
                {/* Text Section */}
                <div className="space-y-6 max-w-lg text-center md:text-left">
                    {/* Animated Hello */}
                    <p className="text-yellow-400 font-semibold uppercase animate-bounce">Hello!</p>
                    
                    {/* Main Title with animation */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                        I'm <span className="text-yellow-400">Susmita Dey</span>, <br />
                        a <span className="text-yellow-400">NEET Aspirant</span> for 2025.
                    </h1>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        I want to share my notes with NEET aspirants facing difficulties in their preparation, helping them reach their goals and succeed.
                    </p>
                    
                    {/* Button with hover effects */}
                    <div className="space-x-4">
                        <button 
                            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
                            onClick={handleNextPage}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="mb-8 md:mb-0 md:block">
                    <img 
                        src={Susmita}
                        alt="Susmita Dey" 
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-yellow-400 shadow-xl animate-slide-in-right"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
