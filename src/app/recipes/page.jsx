import Card from '@/components/Card';
import { getRecipes } from '@/library/api-call';
import React from 'react';

export default async function page() {
  const recipes = await getRecipes();

  return (
    <div className='max-w-[1300px] mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className="col-span-full mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Delicious Recipes for Every Taste</h1>
        <p className="text-gray-600 text-lg">
          Discover a wide range of mouth-watering recipes to suit every craving, from quick meals to gourmet delights.
          Find your next favorite dish right here!
        </p>
      </div>

      {recipes.map((data, index) => (
        <Card
          key={index}
          id={data.id}
          image={data.image}
          title={data.name}
          prepTimeMinutes={data.prepTimeMinutes}
          cookTimeMinutes={data.cookTimeMinutes}
        />
      ))}
    </div>
  );
}

