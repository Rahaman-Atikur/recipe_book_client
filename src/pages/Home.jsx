import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-9xl text-red-500'>Home sweet home</h1> 
        </div>
    );
};

export default Home;