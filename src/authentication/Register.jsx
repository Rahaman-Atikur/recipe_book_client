import React from 'react';
import Navbar from '../components/Navbar';
// import { registerUser } from './registerFunction';

const Register = () => {
//     const handleRegister = async (e) => {
//     e.preventDefault();

//     const form = e.target;

//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     console.log(name, email, password);

//     const user = await registerUser(email, password);
//     console.log(user);
// };


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
            <form  className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;