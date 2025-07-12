import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMapPin, FiCalendar } = FiIcons;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="mb-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <SafeIcon icon={FiHeart} className="text-6xl text-coral-400 mx-auto mb-6" />
          </motion.div>

          <motion.h1
            className="font-serif text-6xl md:text-8xl font-bold text-ocean-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sarah & James
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-ocean-600 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Where love meets the endless horizon
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2 text-ocean-700">
              <SafeIcon icon={FiCalendar} className="text-xl" />
              <span className="text-lg">August 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-ocean-700">
              <SafeIcon icon={FiMapPin} className="text-xl" />
              <span className="text-lg">Maldives</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="bg-ocean-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-ocean-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RSVP Now
            </motion.button>
            <motion.button
              className="border-2 border-ocean-600 text-ocean-600 px-8 py-3 rounded-full font-semibold hover:bg-ocean-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-sand-300 text-4xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🐚
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-10 text-ocean-300 text-3xl"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌊
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-coral-300 text-2xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ⭐
      </motion.div>
    </section>
  );
};

export default Hero;