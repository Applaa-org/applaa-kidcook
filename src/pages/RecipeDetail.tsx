import Header from "@/components/Header";
import SafetyBanner from "@/components/SafetyBanner";
import { recipes } from "@/data/recipes";
import { useParams, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldAlert, Clock, Zap, UtensilsCrossed, Star } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function RecipeDetail() {
  const { slug } = useParams({ from: '/recipes/$slug' });
  const recipe = recipes.find(r => r.slug === slug);
  
  const [currentStep, setCurrentStep] = useState(-1); // -1 means showing ingredients
  const [isComplete, setIsComplete] = useState(false);

  if (!recipe) return <div className="p-20 text-center font-bold">Recipe not found!</div>;

  const handleNext = () => {
    if (currentStep < recipe.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f97316', '#fbbf24', '#4ade80']
      });
    }
  };

  const handlePrev = () => {
    if (currentStep > -1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = currentStep === -1 ? 0 : ((currentStep + 1) / recipe.steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Header />
      <SafetyBanner />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/recipes" className="inline-flex items-center space-x-2 text-orange-600 font-bold mb-8 hover:underline">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Recipes</span>
        </Link>

        {isComplete ? (
          <div className="bg-white rounded-[3rem] p-12 text-center shadow-xl border border-orange-100 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">You're a Super Chef!</h1>
            <p className="text-xl text-gray-600 mb-10 font-medium">
              You just made <span className="text-orange-500 font-bold">{recipe.title}</span>. <br />
              It looks delicious! Time to enjoy your creation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/recipes" 
                className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-orange-600 transition-all"
              >
                Make Another Recipe
              </Link>
              <button 
                onClick={() => { setIsComplete(false); setCurrentStep(-1); }}
                className="w-full sm:w-auto bg-white border-2 border-orange-100 text-orange-600 px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-all"
              >
                See Steps Again
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-orange-100 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {recipe.category}
                    </span>
                  </div>
                  <h1 className="text-3xl font-black text-gray-900 mb-4">{recipe.title}</h1>
                  <div className="flex items-center space-x-6 text-sm font-bold text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-orange-400" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start space-x-3">
                    <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-red-700 leading-relaxed">
                      {recipe.safetyTip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-orange-100 shadow-sm min-h-[400px] flex flex-col">
              {currentStep === -1 ? (
                <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <UtensilsCrossed className="w-5 h-5 text-orange-600" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900">Gather Your Ingredients</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recipe.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex items-center space-x-4 p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
                        <span className="text-3xl">{ing.icon}</span>
                        <div>
                          <p className="font-black text-gray-900">{ing.item}</p>
                          <p className="text-sm font-bold text-orange-600">{ing.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black">
                        {currentStep + 1}
                      </div>
                      <h2 className="text-2xl font-black text-gray-900">Step {currentStep + 1} of {recipe.steps.length}</h2>
                    </div>
                    <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-orange-500 transition-all duration-500" 
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <p className="text-xl font-bold text-gray-800 leading-relaxed">
                        {recipe.steps[currentStep].instruction}
                      </p>
                      {recipe.steps[currentStep].tip && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-2xl">
                          <div className="flex items-center space-x-2 mb-1">
                            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                            <span className="text-xs font-black text-yellow-700 uppercase tracking-wider">Chef's Tip</span>
                          </div>
                          <p className="text-sm font-bold text-yellow-800 italic">
                            "{recipe.steps[currentStep].tip}"
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                      <img 
                        src={recipe.steps[currentStep].image} 
                        alt={`Step ${currentStep + 1}`} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === -1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                    currentStep === -1 
                      ? "text-gray-300 cursor-not-allowed" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Go Back</span>
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all"
                >
                  <span>{currentStep === -1 ? "Let's Start!" : currentStep === recipe.steps.length - 1 ? "I'm Finished!" : "Next Step"}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}