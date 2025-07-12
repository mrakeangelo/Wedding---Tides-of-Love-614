import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiUser, FiUsers, FiCheck } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    dietary: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-coral-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
              <motion.div
                className="text-green-500 mb-6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                <SafeIcon icon={FiCheck} className="text-6xl mx-auto" />
              </motion.div>
              <h2 className="font-serif text-3xl font-bold text-ocean-800 mb-4">
                Thank You!
              </h2>
              <p className="text-ocean-700 text-lg mb-6">
                Your RSVP has been received. We can't wait to celebrate with you in paradise!
              </p>
              <p className="text-ocean-600">
                You'll receive a confirmation email shortly with additional details.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-coral-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            RSVP
          </h2>
          <p className="text-xl text-ocean-600 max-w-2xl mx-auto">
            Join us for the celebration of a lifetime. Please respond by June 15, 2024
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-ocean-800 font-semibold mb-2">
                  <SafeIcon icon={FiUser} className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ocean-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-ocean-800 font-semibold mb-2">
                  <SafeIcon icon={FiMail} className="inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ocean-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-ocean-800 font-semibold mb-2">
                  <SafeIcon icon={FiUsers} className="inline mr-2" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-ocean-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white/50"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              
              <div>
                <label className="block text-ocean-800 font-semibold mb-2">
                  <SafeIcon icon={FiHeart} className="inline mr-2" />
                  Will you attend? *
                </label>
                <select
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-ocean-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white/50"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, can't wait!</option>
                  <option value="no">Sorry, can't make it</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-ocean-800 font-semibold mb-2">
                Dietary Restrictions
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-ocean-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white/50"
                placeholder="Any dietary restrictions or allergies?"
              />
            </div>

            <div className="mb-8">
              <label className="block text-ocean-800 font-semibold mb-2">
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-ocean-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white/50"
                placeholder="Share your excitement or well wishes..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-ocean-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-ocean-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;