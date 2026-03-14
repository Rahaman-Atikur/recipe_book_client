import React from 'react';
import Navbar from '../components/Navbar';
// import { signInUser } from './SignIn';

const Login = () => {

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    
  };

  return (
    <div>
      <Navbar />

      <div className="relative w-full h-screen">

        <img
          src="/images/1_rms91PTLhpkL0Qrj6lZR_g.webp"
          alt="background"
          className="w-full h-full object-cover"
        />

        <form onSubmit={()=>handleLogin()} className="absolute inset-0 flex items-center justify-center bg-black/40">

          <div className="bg-white p-8 rounded-xl shadow-lg w-96">

            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 font-medium">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;