import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-ocean-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            className="mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <SafeIcon icon={FiHeart} className="text-4xl text-coral-400 mx-auto" />
          </motion.div>
          
          <h3 className="font-serif text-2xl font-bold mb-4">
            Sarah & James
          </h3>
          
          <p className="text-ocean-200 mb-6 max-w-md mx-auto">
            Thank you for being part of our love story. We can't wait to celebrate with you in paradise!
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="mailto:hello@tidesoflove.com"
              className="text-ocean-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <SafeIcon icon={FiMail} className="text-2xl" />
            </motion.a>
            <motion.a
              href="#"
              className="text-ocean-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <SafeIcon icon={FiInstagram} className="text-2xl" />
            </motion.a>
            <motion.a
              href="#"
              className="text-ocean-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <SafeIcon icon={FiTwitter} className="text-2xl" />
            </motion.a>
          </div>
          
          <div className="border-t border-ocean-700 pt-6">
            <p className="text-ocean-300 text-sm">
              © 2024 Tides of Love. Made with love for our special day.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;