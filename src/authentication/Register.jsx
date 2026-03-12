import React from 'react';
import Navbar from '../components/Navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
// import { registerUser } from './registerFunction';

const Register = () => {
    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        const email = userData.email;
        const password = userData.password;
        console.log(email, password);

        //     const name = form.name.value;


        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered:", userCredential.user);
            alert("successfully registered");

        }
        catch (error) {
            console.error("Error registering user:", error);
            alert("Failed to register user");
        }
    };
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
            <form onSubmit={() => handleRegister} className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                    {/* <div className="mb-4">
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div> */}

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