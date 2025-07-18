'use client'

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle, FiX } from 'react-icons/fi';
import { FiGlobe } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    user_name: '',
    user_email: ''
  });
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { user_name: '', user_email: '' };

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
      valid = false;
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_t7h4q5e',
        'template_wopf02q',
        form.current,
        'Gh-dVWW9QSRE7L7Qx'
      );

      setNotification({
        show: true,
        message: 'Thank you for your message! We will respond shortly.',
        type: 'success'
      });
      form.current.reset();
      setFormData({ user_name: '', user_email: '', message: '' });
    } catch (error) {
      setNotification({
        show: true,
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification({ ...notification, show: false }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <motion.div 
        className="fixed inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FF00FF]/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10"
            // whileHover={{
            // //   backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
            //   backgroundClip: "text",
            //   WebkitBackgroundClip: "text",
            // //   color: "transparent"
            // }}
            transition={{ duration: 0.3 }}
          >
            Get in <span className="text-[#FF00FF]">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have questions or ready to start your project? Reach out to our team today.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="w-[35rem] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Contact Info */}
          

          {/* Form */}
          <motion.div 
            className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send Us a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className={`pl-10 w-full px-4 py-3 rounded-lg border ${errors.user_name ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'} focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.user_name && (
                  <p className="mt-2 text-sm text-red-600">{errors.user_name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className={`pl-10 w-full px-4 py-3 rounded-lg border ${errors.user_email ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'} focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.user_email && (
                  <p className="mt-2 text-sm text-red-600">{errors.user_email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FiMessageSquare className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-2">
                <motion.button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 bg-gradient-to-r from-[#FF00FF] to-purple-600 hover:from-[#FF00FF]/90 hover:to-purple-600/90 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <FiSend className="ml-2" />
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-8 w-[35rem] mx-auto mt-5">
            <motion.div 
              className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-lg mr-4">
                    <FiMail className="text-[#FF00FF] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@kamlaai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-lg mr-4">
                    <FiMail className="text-[#FF00FF] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Support</h4>
                    <p className="text-gray-600 dark:text-gray-300">support@kamlaai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-lg mr-4">
                    <FiMessageSquare className="text-[#FF00FF] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+91 7888010097</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
           
          </div>

      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-8 right-8 p-4 rounded-lg shadow-xl z-50 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            <div className="flex items-center">
              {notification.type === 'success' ? (
                <FiCheckCircle className="mr-2" />
              ) : (
                <FiX className="mr-2" />
              )}
              <span>{notification.message}</span>
              <button 
                onClick={() => setNotification({ ...notification, show: false })}
                className="ml-4"
              >
                <FiX />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;