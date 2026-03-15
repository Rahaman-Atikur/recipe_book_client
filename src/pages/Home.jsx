import React from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router';

const Home = () => {
    const  recipes  = useLoaderData() || {};
    console.log(recipes);
    return (
        <div>
            <Navbar></Navbar>
            {recipes.map((recipe) => (
                <div key={recipe._id}><h1 className='text-5xl bg-red-600'>{recipe.instructions}</h1>
                </div>
            ))}

        </div>
    );
};

export default Home;