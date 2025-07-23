import React from 'react';
import Image from 'next/image';
import { getRecipes } from '@/library/api-call';
import Card from '@/components/Card';
import Slider from '@/components/Slider';

export default async function HomePage() {
  
  const recipes = await getRecipes();
  const topRecipes = recipes.slice(1,5)
  const featureRecipes = recipes.slice(6,10)
  const mostLikedRecipes = recipes.slice(11,15)
   const sliderImage = recipes.slice(20,25)
  return (
    <main>
      {/* Banner */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-black p-8 rounded-2xl shadow-lg">
  {/* Text Section */}
  <div className="space-y-6">
    <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
      Welcome to Our Recipe Collection
    </h1>
    <p className="text-white text-lg md:text-xl">
      Discover delicious recipes from around the world.
    </p>
    <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300 shadow">
      Explore Recipes
    </button>
  </div>

  {/* Image Section */}
  <div>
    <Slider sliderImage={sliderImage} />
  </div>
</section>

      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Top Recipes</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

         {
          topRecipes.map((data,index)=>{
            return (
               <Card image={data.image} id={data.id}
                  key={index}
               title={data.name} prepTimeMinutes={data.prepTimeMinutes} cookTimeMinutes={data. cookTimeMinutes}  />
            )
              })
         }
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Recipes</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

         {
          featureRecipes.map((data,index)=>{
            return (
               <Card image={data.image} id={data.id}  key={index} title={data.name} prepTimeMinutes={data.prepTimeMinutes} cookTimeMinutes={data. cookTimeMinutes}  />
            )
              })
         }
        </div>
      </section>

      {/* Most Liked */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Most Liked Recipes</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

         {
          mostLikedRecipes.map((data,index)=>{
            return (
               <Card image={data.image} id={data.id}  key={index} title={data.name} prepTimeMinutes={data.prepTimeMinutes} cookTimeMinutes={data. cookTimeMinutes}  />
            )
              })
         }
        </div>
      </section>
    </main>
  );
}
