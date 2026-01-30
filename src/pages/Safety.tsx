import Header from "@/components/Header";
import SafetyBanner from "@/components/SafetyBanner";
import { ShieldCheck, HandHelping, Flame, Scissors, Heart, AlertTriangle } from "lucide-react";

export default function Safety() {
  const rules = [
    {
      icon: <HandHelping className="w-8 h-8 text-blue-500" />,
      title: "Ask an Adult",
      description: "Always tell a grown-up when you want to cook. They are your best kitchen helpers!",
      color: "bg-blue-50"
    },
    {
      icon: <Flame className="w-8 h-8 text-red-500" />,
      title: "No Fire Zone",
      description: "Our recipes don't need the stove or oven. Stay away from hot things unless an adult is with you.",
      color: "bg-red-50"
    },
    {
      icon: <Scissors className="w-8 h-8 text-orange-500" />,
      title: "Sharp Objects",
      description: "Use plastic knives for spreading. If something needs a real knife, ask your adult sidekick to do it.",
      color: "bg-orange-50"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Clean Hands",
      description: "Wash your hands with soap and water before you touch any food. It keeps the germs away!",
      color: "bg-pink-50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <Header />
      <SafetyBanner />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-orange-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Safety Superstars</h1>
          <p className="text-xl text-gray-600 font-medium">
            Every great chef knows that safety is the most important ingredient!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rules.map((rule, idx) => (
            <div key={idx} className={`${rule.color} p-8 rounded-[2.5rem] border border-white shadow-sm`}>
              <div className="mb-4">{rule.icon}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">{rule.title}</h3>
              <p className="text-gray-700 font-medium leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-500 rounded-[3rem] p-8 sm:p-12 text-white text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-black mb-4">Important Note for Grown-ups</h2>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            While these recipes are designed to be "no-fire" and kid-friendly, adult supervision is mandatory at all times. Please ensure your child is using age-appropriate tools and following safe food handling practices.
          </p>
        </div>
      </main>
    </div>
  );
}