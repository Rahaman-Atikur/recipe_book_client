import React from 'react';
import Navbar from '../components/Navbar';

const Register = () => {
    return (
        <div className="relative w-full h-screen">
            <Navbar></Navbar>
            
            {/* Background Image */}
            <img 
                src="/images/1_0v97G5YdIeJ02TIPyJGALg.webp" 
                alt="background" 
                className="w-full h-full object-cover"
            />

            {/* Overlay Form */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 font-medium">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;