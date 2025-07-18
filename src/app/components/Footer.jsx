'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* About Section */}
          <motion.div variants={itemVariants} custom={0}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-[#FF00FF] mr-2">KAMLA</span> AI
            </h3>
            <p className="text-gray-300 mb-6">
              At KAMLA AI, we deliver innovative IT solutions to boost your business's efficiency and growth. Our expert team is dedicated to driving your success through advanced technology and strategic insights.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook />, url: "#" },
                { icon: <FiTwitter />, url: "#" },
                { icon: <FiLinkedin />, url: "#" },
                { icon: <FiInstagram />, url: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  className="p-2 bg-slate-700 hover:bg-[#FF00FF] rounded-full text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} custom={1}>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Our Team', 'Contact'].map((link, i) => (
                <motion.li 
                  key={i}
                  custom={i + 1}
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#FF00FF" }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-[#FF00FF] transition-colors duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Address */}
          <motion.div variants={itemVariants} custom={2}>
            <h3 className="text-xl font-bold mb-6">OUR ADDRESS</h3>
            <address className="not-italic text-gray-300 space-y-4">
              <motion.div 
                className="flex items-start"
                custom={2.1}
                variants={itemVariants}
              >
                <FiMapPin className="text-[#FF00FF] mt-1 mr-3 flex-shrink-0" />
                <span>Dream Colony No.02, Plot No.40, Butibori, Nagpur</span>
              </motion.div>
            </address>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants} custom={3}>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="text-gray-300 space-y-4">
              <motion.div 
                className="flex items-start"
                custom={3.1}
                variants={itemVariants}
              >
                <FiMail className="text-[#FF00FF] mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@kamlaai.com" className="hover:text-[#FF00FF] transition-colors duration-300">
                  info@kamlaai.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-start"
                custom={3.2}
                variants={itemVariants}
              >
                <FiMail className="text-[#FF00FF] mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:kamlaaiservices@gmail.com" className="hover:text-[#FF00FF] transition-colors duration-300">
                  kamlaaiservices@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-start"
                custom={3.3}
                variants={itemVariants}
              >
                <FiPhone className="text-[#FF00FF] mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+9178880x0xx" className="hover:text-[#FF00FF] transition-colors duration-300">
                  +91 7888010097
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="pt-8 border-t border-slate-700 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>
            Copyright © 2025 KAMLA AI All Rights Reserved | Designed by KAMLA AI
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;