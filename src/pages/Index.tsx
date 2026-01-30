import Header from "@/components/Header";
import SafetyBanner from "@/components/SafetyBanner";
import { MadeWithApplaa } from "@/components/made-with-applaa";
import { recipes } from "../data/recipes";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, Clock, Zap, ChefHat, ShieldCheck } from "lucide-react";

const Index = () => {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FFFDF9] font-sans">
      <Header />
      <SafetyBanner />
      
      <main>
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 text-6xl">🍎</div>
            <div className="absolute bottom-20 right-20 text-6xl">🥦</div>
            <div className="absolute top-40 right-10 text-6xl">🍪</div>
            <div className="absolute bottom-10 left-20 text-6xl">🍓</div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-orange-500" />
              <span>The #1 Cooking App for Little Chefs</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Let's Cook Something <br />
              <span className="text-orange-500">Yummy & Safe!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
              Fun, no-fire recipes designed specifically for kids. 
              Learn to make delicious snacks while staying safe in the kitchen!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/recipes" 
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-orange-200 transition-all hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Start Cooking</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/safety" 
                className="w-full sm:w-auto bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-2xl text-lg font-bold transition-all"
              >
                Safety Rules
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">Featured Recipes</h2>
                <p className="text-gray-500 font-medium">Try these easy and fun snacks today!</p>
              </div>
              <Link to="/recipes" className="text-orange-600 font-bold hover:underline flex items-center space-x-1">
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredRecipes.map((recipe) => (
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
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-[3rem] p-8 sm:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-black mb-6">Cooking is a Superpower! 🦸‍♂️</h2>
                <p className="text-lg sm:text-xl font-medium mb-8 opacity-90">
                  But every superhero needs a sidekick. Make sure you always have an adult nearby to help you with tricky parts and keep things safe!
                </p>
                <Link 
                  to="/safety" 
                  className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-colors shadow-lg"
                >
                  <span>Read Safety Rules</span>
                  <ShieldCheck className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden lg:block absolute right-16 bottom-0 w-80 h-80">
                <img 
                  src="https://illustrations.popsy.co/white/chef.svg" 
                  alt="Chef Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <ChefHat className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black text-gray-900">KidCook</span>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 font-medium">
            Empowering kids to explore the kitchen safely. Remember: Adult supervision is always required when cooking.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link to="/recipes" className="text-gray-400 hover:text-orange-500 font-bold text-sm">Recipes</Link>
            <Link to="/safety" className="text-gray-400 hover:text-orange-500 font-bold text-sm">Safety</Link>
            <Link to="/about" className="text-gray-400 hover:text-orange-500 font-bold text-sm">About</Link>
          </div>
          <MadeWithApplaa />
        </div>
      </footer>
    </div>
  );
};

export default Index;