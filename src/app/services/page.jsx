'use client'


import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiHeadphones, FiCode, FiDollarSign, FiUsers, FiGlobe, FiBarChart2, FiMessageSquare, FiServer, FiBriefcase } from 'react-icons/fi';

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 border border-gray-200 dark:border-slate-700"
     
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-lg mr-4 group-hover:bg-gradient-to-br group-hover:from-[#FF00FF]/20 group-hover:to-purple-500/20 transition-all duration-500">
            {service.icon}
          </div>
          <motion.h2 
            className="text-2xl font-bold text-gray-800 dark:text-white"
            whileHover={{ 
              scale: 1.02,
              backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h2>
        </div>
        
        <ul className="space-y-3 mt-6">
          {service.items.map((item, itemIndex) => (
            <motion.li 
              key={itemIndex} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (itemIndex * 0.1) }}
            >
              <span className="text-[#FF00FF] mr-2 mt-1">•</span>
              <span className="text-gray-700 dark:text-gray-300">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 dark:bg-slate-700/30 border-t border-gray-200 dark:border-slate-700">
        <motion.button 
          className="w-full py-2 px-4 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-medium rounded-lg transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Outsourcing Services",
      icon: <FiUsers className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />,
      items: [
        "Customer Support Services",
        "IT Services",
        "Accounting and Financial Services",
        "Human Resources (HR) Services"
      ]
    },
    {
      title: "Software Development",
      icon: <FiCode className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />,
      items: [
        "Website Development",
        "App Development",
        "Game Development",
        "SEO Integration"
      ]
    },
    {
      title: "SEO & Digital Marketing",
      icon: <FiBarChart2 className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />,
      items: [
        "Advanced SEO Techniques",
        "Pay-per-click Campaigns",
        "Social Media Strategy",
        "Community Management"
      ]
    },
    {
      title: "Cloud Services",
      icon: <FiServer className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />,
      items: [
        "Infrastructure as a Service",
        "Platform as a Service",
        "Software as a Service",
        "Cloud Storage Solutions"
      ]
    },
    {
      title: "Business Services",
      icon: <FiBriefcase className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />,
      items: [
        "Strategic Consulting",
        "Process Optimization",
        "Administrative Support",
        "Technology Integration"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center my-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            whileHover={{
            //   backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            //   color: "transparent"
            }}
            transition={{ duration: 0.3 }}
          >
            Our <span className="text-[#FF00FF]">Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive solutions tailored to empower your business in the digital age
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-[#FF00FF]/10 to-purple-100 dark:from-[#4B0082]/20 dark:to-[#2E1065]/30 p-8 rounded-xl border border-gray-200 dark:border-purple-900/50">
            {/* Floating animated elements */}
            <motion.div 
              className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#FF00FF]/20"
              animate={{
                y: [0, 20, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-purple-500/20"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <motion.h2 
              className="text-3xl font-bold text-gray-800 dark:text-white mb-4 relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              Ready to transform your business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto relative z-10"
              whileHover={{ scale: 1.01 }}
            >
              Our experts are standing by to discuss how we can help you achieve your goals.
            </motion.p>
            <motion.button 
              className="relative z-10 py-3 px-8 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-bold rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 0, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;