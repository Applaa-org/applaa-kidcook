import Header from "@/components/Header";
import SafetyBanner from "@/components/SafetyBanner";
import { ChefHat, Heart, Sparkles, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Header />
      <SafetyBanner />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">About KidCook</h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            We believe that the kitchen is a place for magic, learning, and lots of fun!
          </p>
        </div>

        <div className="space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-yellow-500" />
                <span>Our Mission</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
                KidCook was created to give children the confidence to explore food and cooking in a way that's completely safe and incredibly fun.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                By focusing on "no-fire" recipes, we remove the biggest dangers of the kitchen while still teaching valuable skills like measuring, mixing, and following instructions.
              </p>
            </div>
            <div className="bg-orange-100 rounded-[3rem] p-8 flex items-center justify-center">
              <img 
                src="https://illustrations.popsy.co/white/creative-work.svg" 
                alt="Creative Kids" 
                className="w-full max-w-xs"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-orange-100 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-black mb-2">Safe Recipes</h3>
              <p className="text-gray-500 font-medium">No stoves, no ovens, no sharp blades.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-orange-100 text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-black mb-2">Healthy Habits</h3>
              <p className="text-gray-500 font-medium">Encouraging kids to love fruits and veggies.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-orange-100 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-black mb-2">Family Time</h3>
              <p className="text-gray-500 font-medium">Creating memories together in the kitchen.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}