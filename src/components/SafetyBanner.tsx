import { ShieldAlert, Heart } from 'lucide-react';

export default function SafetyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-y border-orange-100 py-3">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
        <div className="flex items-center space-x-2 text-red-600 font-bold text-sm">
          <ShieldAlert className="w-5 h-5 animate-pulse" />
          <span>SAFETY FIRST: Always ask an adult for help!</span>
        </div>
        <div className="flex items-center space-x-2 text-orange-700 font-medium text-sm">
          <Heart className="w-4 h-4 text-orange-500" />
          <span>No stoves or sharp knives needed here.</span>
        </div>
      </div>
    </div>
  );
}