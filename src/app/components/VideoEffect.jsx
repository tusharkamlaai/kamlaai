'use client'

import React, { useState, useEffect, useRef } from 'react';
import useTypewriter from 'react-typewriter-hook';
import { motion } from 'framer-motion';
import Link from 'next/link'

const MagicOcean = [
  "Innovative Solutions.",
  "Empowered Ventures.",
  "Technological Excellence.",
];

const HeroSection = () => {
  const [magicName, setMagicName] = useState(MagicOcean[0]);
  const intervalRef = useRef(null);
  let index = 0;

  const name = useTypewriter(magicName);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > MagicOcean.length - 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [magicName]);

  // Animation variants
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      color: "#FF00FF",
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const highlightVariants = {
    initial: { color: "#FF00FF", backgroundSize: "0% 100%" },
    animate: {
      color: "#ffffff",
      backgroundSize: "100% 100%",
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src='/videos/sideVideo2.mp4'
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="z-10 max-w-4xl text-center px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Welcome Text */}
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          WELCOME TO
        </motion.h1>

        {/* Company Name */}
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {['KAMLA', 'AI', 'PRODUCTS', 'AND', 'SERVICES', 'PVT', 'LTD'].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2 sm:mr-3"
              custom={i}
              variants={wordVariants}
              whileHover="hover"
            >
              <motion.span
                className="highlighted-word px-1"
                style={{
                  backgroundImage: "linear-gradient(to right, #FF00FF, #9F2B68)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left bottom",
                  backgroundSize: "0% 100%"
                }}
                variants={highlightVariants}
              >
                {word}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          className="text-lg sm:text-xl mb-8 leading-relaxed font-light max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          At KAMLA AI, we bridge the gap between{' '}
          <motion.span 
            className="text-[#FF00FF] font-medium"
            key={magicName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-bold rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 0, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
         <Link href="/services">Explore Services</Link>   
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-[#FF00FF] text-white hover:bg-[#FF00FF]/10 font-bold rounded-lg text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/contact">Contact Us</Link>  
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 15, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-[#FF00FF] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[#FF00FF] rounded-full mt-2"
            animate={{
              y: [0, 5, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;