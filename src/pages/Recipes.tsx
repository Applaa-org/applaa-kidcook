import Header from "@/components/Header";
import SafetyBanner from "@/components/SafetyBanner";
import { recipes } from "../data/recipes";
import { Link } from "@tanstack/react-router";
import { Clock, Zap, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function Recipes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || r.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Snacks", "Breakfast", "Treats"];

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Header />
      <SafetyBanner />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Recipe Book</h1>
          <p className="text-gray-600 font-medium max-w-xl mx-auto">
            Pick a recipe and start your cooking adventure! All these recipes are safe and don't need a stove.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for a recipe..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-orange-100 focus:border-orange-400 outline-none transition-all font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            <Filter className="text-orange-500 w-5 h-5 mr-2 hidden sm:block" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  category === cat 
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-200" 
                    : "bg-white text-gray-600 border border-gray-100 hover:bg-orange-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <Link 
              key={recipe.id} 
              to="/recipes/$slug"
              params={{ slug: recipe.slug }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm">
                  {recipe.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 font-medium">
                  {recipe.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-500">Try searching for something else!</p>
          </div>
        )}
      </main>
    </div>
  );
}