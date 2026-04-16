import React from 'react';
import { CheckCircle, Zap, Heart, Award, Target, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface CongratulationsPageProps {
  onClose: () => void;
}

const CongratulationsPage: React.FC<CongratulationsPageProps> = ({ onClose }) => {
  const motivationalLines = [
    "Transform your body, elevate your mind, change your life.",
    "The only one stopping you is the person staring back in the mirror—not anymore!",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl border border-gray-700 overflow-hidden my-4"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 p-4 sm:p-8 lg:p-12 max-h-[90vh] overflow-y-auto">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <div className="relative">
              <CheckCircle className="w-16 h-16 sm:w-24 sm:h-24 text-green-500" strokeWidth={1.5} />
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border-2 border-green-500 rounded-full"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-4 sm:mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-yellow-400 to-red-500 mb-2">
              Congratulations!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
              Welcome to Fitness City Family
            </p>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-green-900/30 border border-green-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6"
          >
            <p className="text-green-300 text-center font-medium text-sm sm:text-base md:text-lg">
              ✓ Your membership registration is confirmed!
            </p>
            <p className="text-gray-300 text-center mt-2 text-xs sm:text-sm">
              Get ready to transform your life. 
            </p>
          </motion.div>

          {/* Motivational Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white mb-3 sm:mb-4 text-center">
              Your Motivation Starts Here 💪
            </h2>

            <div className="space-y-2 sm:space-y-3 max-h-64 overflow-y-auto pr-2">
              {motivationalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                  className="flex items-start gap-2 sm:gap-3 bg-gray-800/50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-gray-700/50 hover:border-yellow-500/30 transition-all"
                >
                  <div className="mt-0.5 shrink-0">
                    {index === 0 && <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />}
                    {index === 1 && <Target className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />}
                    {index === 2 && <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />}
                    {index === 3 && <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />}
                    {index === 4 && <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />}
                    {index === 5 && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />}
                  </div>
                  <p className="text-gray-200 font-medium italic leading-snug text-xs sm:text-sm">
                    "{line}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            {[
              { icon: Target, title: "Set Goals", desc: "Define your fitness objectives" },
              { icon: Flame, title: "Stay Consistent", desc: "Show up every single day" },
              { icon: Award, title: "Celebrate", desc: "Track your wins & progress" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-red-500" />
                <h3 className="font-bold text-white text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="bg-linear-to-r from-red-600 to-orange-600 rounded-lg sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-center"
          >
            <p className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 leading-snug">
              "The pain of discipline weighs ounces, the pain of regret weighs tons."
            </p>
            <p className="text-red-100 text-xs sm:text-sm">— Your Fitness City Family</p>
            <p className="text-center text-sm text-yellow-500 dark:text-yellow-400 mt-4 font-medium italic">
          Note: Maintain the cleanliness of the gym, use proper shoes and clothes.
        </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center space-y-3"
          >
            <p className="text-gray-300 text-sm sm:text-base">
              🏋️ See you at the gym! Let's build champions together.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Start Your Transformation 🚀
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CongratulationsPage;
