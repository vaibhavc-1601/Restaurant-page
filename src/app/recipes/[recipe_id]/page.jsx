import React from 'react'
import Image from 'next/image';
import { getRecipeById } from '@/library/api-call';
export default async function page({params}) {
  const recipe = await getRecipeById(params?.recipe_id);
  return (
    <main className="max-w-4xl mx-auto p-6 mt-4 ">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-green-700">
        {recipe.name}
      </h1>

      {/* Image */}
      <div className="w-full aspect-video relative mb-6 rounded-lg overflow-hidden shadow">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* Info section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700 mb-8">
        <div><strong>Prep:</strong> {recipe.prepTimeMinutes} min</div>
        <div><strong>Cook:</strong> {recipe.cookTimeMinutes} min</div>
        <div><strong>Servings:</strong> {recipe.servings}</div>
        <div><strong>Calories:</strong> {recipe.caloriesPerServing}</div>
        <div><strong>Difficulty:</strong> {recipe.difficulty}</div>
        <div><strong>Cuisine:</strong> {recipe.cuisine}</div>
        <div><strong>Meal:</strong> {recipe.mealType.join(', ')}</div>
        <div><strong>Rating:</strong> {recipe.rating} ⭐ ({recipe.reviewCount})</div>
      </div>

      {/* Ingredients */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-green-600">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 text-green-600">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  )
}
