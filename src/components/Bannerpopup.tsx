import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import bannerImage from '../assets/banner-2.jpg';

export function BannerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

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
            className="relative w-center max-w-2xl overflow-hidden rounded-lg shadow-2xl p-2 sm:p-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 bg-white/90 text-gray-600  transition-colors z-20"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src={bannerImage}
              alt="Special Offer Banner"
              className="w-100 h-auto rounded-lg cursor-pointer hover:opacity-85 transition-opacity object-cover px-2 py-2 sm:px-4 sm:py-4"
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
