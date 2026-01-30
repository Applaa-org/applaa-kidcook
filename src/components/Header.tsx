import { Link } from '@tanstack/react-router';
import { ChefHat, ShieldCheck, Info, Utensils, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <ChefHat className="text-white w-7 h-7" />
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent tracking-tight">
            KidCook
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" icon={<Home className="w-4 h-4" />} label="Home" />
          <NavLink to="/recipes" icon={<Utensils className="w-4 h-4" />} label="Recipes" />
          <NavLink to="/safety" icon={<ShieldCheck className="w-4 h-4" />} label="Safety First" />
          <NavLink to="/about" icon={<Info className="w-4 h-4" />} label="About" />
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Safety Mode</span>
            <span className="text-xs font-medium text-gray-500 italic">Adult Supervision Required</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-200">
            <span className="text-lg">👨‍🍳</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200",
        "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
      )}
      activeProps={{
        className: "bg-orange-100 text-orange-700 shadow-inner"
      }}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}