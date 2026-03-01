import React from 'react';
import Navbar from '../components/Navbar';

const Addrecipe = () => {


  return (
    <>
    <Navbar></Navbar>
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 relative"
      style={{
        backgroundImage:
          "url('/images/0_y6OS8DM2Ekuw8MLk.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 "></div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10">
        <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10">
          Add Your Recipe
        </h1>

        <form className="space-y-6">
          {/* Image URL */}
          <div>
            <label className="font-semibold text-lg">Image URL</label>
            <input
              type="text"
              name="image"

              placeholder="Enter image URL"
              className="input input-bordered w-full h-14 text-lg"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="font-semibold text-lg">Recipe Title</label>
            <input
              type="text"
              name="title"

              placeholder="Enter recipe title"
              className="input input-bordered w-full h-14 text-lg"
              required
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="font-semibold text-lg">Ingredients</label>
            <textarea
              name="ingredients"

              placeholder="Write ingredients..."
              className="textarea textarea-bordered w-full h-32 text-lg"
              required
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="font-semibold text-lg">Instructions</label>
            <textarea
              name="instructions"

              placeholder="Write cooking instructions..."
              className="textarea textarea-bordered w-full h-40 text-lg"
              required
            />
          </div>

          {/* Cuisine + Prep Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-lg">Cuisine Type</label>
              <select
                name="cuisine"

                className="select select-bordered w-full h-14 text-lg"
                required
              >
                <option value="">Select Cuisine</option>
                <option>Italian</option>
                <option>Mexican</option>
                <option>Indian</option>
                <option>Chinese</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-lg">
                Preparation Time (minutes)
              </label>
              <input
                type="number"
                name="prepTime"

                placeholder="Enter time in minutes"
                className="input input-bordered w-full h-14 text-lg"
                required
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="font-semibold text-lg mb-2 block">
              Categories
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                (category) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 text-lg"
                  >
                    <input
                      type="checkbox"

                      className="checkbox checkbox-primary"
                    />
                    {category}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Like Count */}
          <div>
            <label className="font-semibold text-lg">Like Count</label>
            <input

              readOnly
              className="input input-bordered w-full h-14 text-lg bg-gray-200"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary w-full h-14 text-lg font-bold rounded-xl"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div></>

    
  );
};

export default Addrecipe;