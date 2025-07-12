import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiPlane, FiHome, FiSun, FiInfo, FiPhone } = FiIcons;

const TravelInfo = () => {
  const travelTips = [
    {
      icon: FiPlane,
      title: "Getting There",
      description: "Fly into Malé International Airport (MLE). We'll arrange seaplane transfers to the resort."
    },
    {
      icon: FiHome,
      title: "Accommodation",
      description: "We've reserved a block of overwater villas at Paradise Resort. Use code TIDESOF2024 for our group rate."
    },
    {
      icon: FiSun,
      title: "What to Pack",
      description: "Light, breathable clothing, reef-safe sunscreen, underwater camera, and your sense of adventure!"
    },
    {
      icon: FiInfo,
      title: "Local Tips",
      description: "The Maldives uses Maldivian Rufiyaa, but USD is widely accepted. Tipping is appreciated but not required."
    }
  ];

  return (
    <section id="travel" className="py-20 bg-gradient-to-br from-ocean-50 to-sand-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            Travel Information
          </h2>
          <p className="text-xl text-ocean-600 max-w-2xl mx-auto">
            Everything you need to know for your journey to paradise
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Destination Highlight */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                  alt="Maldives Paradise"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <SafeIcon icon={FiMapPin} className="text-2xl text-ocean-600 mr-3" />
                  <h3 className="font-serif text-2xl font-bold text-ocean-800">
                    Paradise Resort, Maldives
                  </h3>
                </div>
                <p className="text-ocean-700 mb-6">
                  Join us in one of the world's most beautiful destinations. The Maldives offers 
                  crystal-clear waters, pristine beaches, and unforgettable sunsets – the perfect 
                  backdrop for our special day.
                </p>
                <div className="space-y-2 text-ocean-600">
                  <p><strong>Resort:</strong> Paradise Resort & Spa</p>
                  <p><strong>Address:</strong> North Malé Atoll, Maldives</p>
                  <p><strong>Weather:</strong> 82°F average, light ocean breeze</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Travel Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {travelTips.map((tip, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="bg-ocean-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <SafeIcon icon={tip.icon} className="text-xl text-ocean-600" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-ocean-800 mb-2">
                      {tip.title}
                    </h4>
                    <p className="text-ocean-700">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            className="bg-ocean-600 text-white rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SafeIcon icon={FiPhone} className="text-3xl mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">
              Need Help Planning Your Trip?
            </h3>
            <p className="mb-6">
              Our travel coordinator is here to help with flights, accommodation, and any questions you might have.
            </p>
            <div className="space-y-2">
              <p><strong>Travel Coordinator:</strong> Emma Johnson</p>
              <p><strong>Email:</strong> travel@tidesoflove.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;