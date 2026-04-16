import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bell } from 'lucide-react';

export function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIsOpen(true);  // Always show popup after 3 seconds
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-xl border-4 border-red-500 bg-white p-8 shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-600 hover:bg-gray-200 hover:text-red-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Bell className="h-8 w-8 animate-bounce" />
              </div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-gray-900 mb-2">
                Limited Time Offer!
              </h2>
              <p className="mb-6 text-lg font-medium text-gray-600">
                First 10 Members Get <span className="text-red-600 font-bold text-xl">20% Off</span> First 3 Months
              </p>
              
              <a
                href="https://wa.me/919964290488?text=I%20want%20to%20claim%20the%2020%25%20off%20offer!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg bg-red-600 px-4 py-3 font-bold text-white transition-colors hover:bg-red-700 shadow-lg"
              >
                Claim Offer Now
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-gray-500 hover:text-red-500 underline underline-offset-4"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
