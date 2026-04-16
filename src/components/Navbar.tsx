import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Dumbbell } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import logoImg from '../assets/logo.png';

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Diet Plan', path: '/diet-plan' },
    { name: 'Online Classes', path: '/online-classes' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-11 h-11 square-full overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center bg-black">
              <img 
               src={logoImg} 
               alt="Gym Logo" 
               className="w-auto object-contain"/>
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-zinc-900 dark:text-white">
              FITNESS <span className="text-yellow-500">CITY</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-yellow-500",
                  location.pathname === link.path 
                    ? "text-yellow-500 dark:text-yellow-400" 
                    : "text-zinc-600 dark:text-zinc-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link 
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 dark:text-zinc-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-zinc-100 dark:bg-zinc-800 text-yellow-500"
                      : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-medium"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
