import React from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router';

const Home = () => {
    const recipes = useLoaderData() || [];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {recipes.map((recipe) => (

                    <div
                        key={recipe._id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                    >

                        {/* Image */}
                        <div className="h-52 w-full overflow-hidden">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* Body */}
                        <div className="p-5 space-y-3">

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-800">
                                {recipe.title}
                            </h2>

                            {/* Cuisine + Time */}
                            <div className="flex gap-2 flex-wrap">

                                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                    {recipe.cuisine}
                                </span>

                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                    ⏱ {recipe.prepTime} min
                                </span>

                            </div>

                            {/* Instructions */}
                            <p className="text-sm text-gray-600 line-clamp-3">
                                {recipe.instructions}
                            </p>

                            Ingredients
                            {/* <div className="flex flex-wrap gap-1">

                                {recipe.ingredients?.slice(0, 3).map((ing, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                                    >
                                        {ing}
                                    </span>
                                ))}

                            </div> */}

                            {/* Button */}
                            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                Delete  Recipe
                            </button>

                            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                Update Recipe
                            </button>


                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Home;