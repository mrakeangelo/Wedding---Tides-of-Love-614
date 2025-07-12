import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCompass, FiSun } = FiIcons;

const OurStory = () => {
  const storySteps = [
    {
      icon: FiCompass,
      title: "First Adventure",
      date: "Summer 2019",
      description: "We met during a backpacking trip through Southeast Asia. James was lost (literally), and Sarah had the map.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    },
    {
      icon: FiHeart,
      title: "Love Blooms",
      date: "Winter 2020",
      description: "Our first official date was on a beach in Bali at sunset. We knew we'd found our travel partner for life.",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=300&fit=crop"
    },
    {
      icon: FiSun,
      title: "The Proposal",
      date: "Spring 2023",
      description: "James proposed at sunrise on the same beach where we had our first date. Sarah said yes before he finished asking!",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="story" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-ocean-600 max-w-2xl mx-auto">
            A tale of two wanderers who found their home in each other's hearts
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <motion.div
                  className="text-center md:text-left"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="bg-ocean-100 p-3 rounded-full mr-4">
                      <SafeIcon icon={step.icon} className="text-2xl text-ocean-600" />
                    </div>
                    <span className="text-sand-600 font-semibold">{step.date}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-ocean-800 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-ocean-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;