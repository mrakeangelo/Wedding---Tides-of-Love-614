import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMapPin, FiClock, FiSun, FiMoon, FiCamera } = FiIcons;

const EventDetails = () => {
  const events = [
    {
      icon: FiSun,
      title: "Welcome Sunset Dinner",
      date: "August 14, 2024",
      time: "6:00 PM",
      location: "Beachfront Pavilion",
      description: "Join us for a casual dinner as we welcome our loved ones to paradise. Dress code: Beach casual.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
    },
    {
      icon: FiCamera,
      title: "Wedding Ceremony",
      date: "August 15, 2024",
      time: "4:00 PM",
      location: "Oceanfront Altar",
      description: "Our intimate ceremony will take place on the beach with the endless ocean as our backdrop. Dress code: Cocktail attire.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=250&fit=crop"
    },
    {
      icon: FiMoon,
      title: "Reception Under the Stars",
      date: "August 15, 2024",
      time: "7:00 PM",
      location: "Beachfront Terrace",
      description: "Dance the night away under the stars with dinner, drinks, and live music. The celebration continues until dawn!",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="details" className="py-20 bg-gradient-to-br from-sand-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            Celebration Details
          </h2>
          <p className="text-xl text-ocean-600 max-w-2xl mx-auto">
            Three days of love, laughter, and unforgettable memories in paradise
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-ocean-600 text-white p-3 rounded-full">
                  <SafeIcon icon={event.icon} className="text-xl" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-ocean-800 mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-ocean-600">
                    <SafeIcon icon={FiCalendar} className="text-sm mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-ocean-600">
                    <SafeIcon icon={FiClock} className="text-sm mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-ocean-600">
                    <SafeIcon icon={FiMapPin} className="text-sm mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-ocean-700 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-ocean-800 mb-4">
              Important Notes
            </h3>
            <div className="space-y-3 text-ocean-700">
              <p>• All events are weather permitting with indoor alternatives available</p>
              <p>• Transportation will be provided between venues</p>
              <p>• Please bring reef-safe sunscreen to protect our ocean home</p>
              <p>• Cameras welcome, but please be present during the ceremony</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;