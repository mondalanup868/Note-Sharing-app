import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AdminBG from '../assets/adminBG.jpg';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${AdminBG})` }}>
            {/* Overlay for background blur */}
            <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>

            <div className="relative z-10 flex items-center justify-center w-full">
                <section className="w-full max-w-md p-6 space-y-6 rounded-lg shadow-lg border border-white m-5 md:m-8">
                    {/* Title */}
                    <h1 className="text-2xl font-extrabold text-center text-yellow-500">
                        Admin Login
                    </h1>

                    {/* Form */}
                    <form className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 placeholder-gray-500 bg-transparent text-white border rounded-3xl"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="w-full p-3 placeholder-gray-500 bg-transparent text-white border rounded-3xl"
                                placeholder="Enter your password"
                                required
                            />
                            {/* Eye Icon Button */}
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-11 right-6 flex  text-gray-500 dark:text-gray-400 "
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 text-white bg-yellow-500 rounded-3xl font-semibold hover:bg-yellow-600 hover:scale-105 duration-300"
                        >
                            Login
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Login;
