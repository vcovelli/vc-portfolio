import React from "react";
import { motion } from "framer-motion";

export default function ReactAnimations() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 overflow-hidden relative">
        
        {/* Hero Section (Wild Entry Animation) */}
        <motion.div
          className="relative w-full h-64 rounded-xl overflow-hidden"
          initial={{ scale: 0.5, rotate: 180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src="/vc-portfolio/images/AnimationCode1.jpg"
            alt="React Animations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.h1 
              className="text-white text-4xl font-bold text-center"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Mastering React Animations with Framer Motion
            </motion.h1>
          </div>
        </motion.div>

        {/* Blog Content (Over-the-top animations) */}
        <motion.div 
          className="mt-6 text-gray-700 text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Framer Motion is a powerful library that allows React developers to create **smooth, natural, and often excessive** animations.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold text-gray-900"
            animate={{ x: [-10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Why Use Framer Motion?
          </motion.h2>

          <motion.ul className="list-disc pl-6 space-y-2">
            <motion.li 
              whileHover={{ x: 10, color: "#ff0055" }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              **Declarative animations** make UI more engaging.
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#ffcc00" }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              **Variants** simplify animation logic.
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#00ccff" }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              **SVG animations** and **drag interactions** add flair.
            </motion.li>
          </motion.ul>

          <motion.h2 
            className="text-2xl font-semibold text-gray-900 mt-6"
            animate={{ y: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Over-the-Top Example: Button Madness
          </motion.h2>

          {/* The Most Unnecessarily Animated Button Ever */}
          <motion.button
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.9, rotate: 360, backgroundColor: "#ff0055" }}
            transition={{ duration: 0.4 }}
            animate={{ x: [-5, 5, -5, 0], rotate: [0, 5, -5, 0] }}
          >
            Click Me (if you dare)
          </motion.button>

          {/* Text That Fades In and Out for No Reason */}
          <motion.p
            className="mt-6 italic text-gray-600"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            "If everything is animated, nothing is animated." — Some wise React dev, probably.
          </motion.p>
        </motion.div>

        {/* Floating Elements That Shouldn't Be There */}
        <motion.div
          className="absolute top-4 left-4 text-white p-2 rounded-full"
          animate={{ y: [-25, 25, -25] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          🕊️
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-4 text-white p-2 rounded-full"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          🔄
        </motion.div>
      </div>
    </div>
  );
}
