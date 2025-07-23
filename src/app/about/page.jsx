"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  FiUsers,
  FiCode,
  FiDollarSign,
  FiGlobe,
  FiBarChart2,
  FiMessageSquare,
  FiServer,
  FiBriefcase,
  FiHome,
  FiTarget,
  FiAward,
} from "react-icons/fi";
import Image from "next/image";
import aboutimg from '../assets/about.jpg'
import Link from 'next/link'

const AboutPage = () => {
  const features = [
    {
      title: "Expert Team",
      icon: (
        <FiUsers className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      description: "Seasoned professionals with diverse expertise",
    },
    {
      title: "Client-Centric",
      icon: (
        <FiMessageSquare className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      description: "Your success is our top priority",
    },
    {
      title: "Agile Methodology",
      icon: (
        <FiTarget className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      description: "Flexible and adaptive approach",
    },
    {
      title: "Transparent Communication",
      icon: (
        <FiGlobe className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      description: "Clear and open at every stage",
    },
    {
      title: "Dedicated Support",
      icon: (
        <FiServer className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      description: "Always available when you need us",
    },
    {
      title: "Innovative Solutions",
      icon: (
        <FiCode className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      description: "Cutting-edge technology implementations",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const FeatureCard = ({ feature, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
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
          delay: index * 0.1,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 border border-gray-200 dark:border-slate-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-full group-hover:bg-gradient-to-br group-hover:from-[#FF00FF]/20 group-hover:to-purple-500/20 transition-all duration-500">
              {feature.icon}
            </div>
          </div>

          <motion.h3
            className="text-xl font-bold text-gray-800 dark:text-white mb-2"
            whileHover={{
              scale: 1.02,
              backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            transition={{ duration: 0.3 }}
          >
            {feature.title}
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center my-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            whileHover={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
            transition={{ duration: 0.3 }}
          >
            About <span className="text-[#FF00FF]">KAMLA AI</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transforming innovative ideas into exceptional software solutions
          </motion.p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Our <span className="text-[#FF00FF]">Office</span>
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                At KAMLA AI, we are dedicated to transforming innovative ideas
                into exceptional software solutions. Established with a passion
                for technology and a commitment to excellence, our team of
                experienced developers, designers, and strategists work
                collaboratively to deliver cutting-edge software tailored to
                meet the unique needs of our clients.
              </p>

              <p>
                We pride ourselves on our agile approach, ensuring flexibility
                and adaptability in a rapidly evolving digital landscape.
              </p>

              <p>
                Our mission is to empower businesses with powerful, intuitive,
                and reliable software that drives growth and enhances
                operational efficiency. With a focus on quality, transparency,
                and customer satisfaction, KAMLA AI is your trusted partner in
                navigating the complexities of the modern tech world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for office image - replace with actual image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white dark:border-slate-800">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#FF00FF]/10 to-purple-500/20 h-96 flex items-center justify-center">
                {/* <FiHome className="text-8xl text-[#FF00FF]/30 dark:text-purple-500/30" /> */}
                <Image
                  src={aboutimg}
                 className="w-[40rem] h-[25rem]"
                  alt="Picture of the author"
                />
              </div>

              {/* Animated decorative elements */}
              <motion.div
                className="absolute top-0 left-0 w-16 h-16 rounded-full bg-[#FF00FF]/20 -mt-8 -ml-8"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-purple-500/20 -mb-10 -mr-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
              whileHover={{
                backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              Why <span className="text-[#FF00FF]">Choose Us?</span>
            </motion.h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver
              exceptional results
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#FF00FF]/10 to-purple-100 dark:from-[#4B0082]/20 dark:to-[#2E1065]/30 p-12 rounded-2xl border border-gray-200 dark:border-purple-900/50 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating animated elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[#FF00FF]/20"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-purple-500/20"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <div className="relative z-10 text-center">
            <FiAward className="mx-auto text-5xl text-[#FF00FF] mb-6" />

            <motion.h2
              className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Our Commitment to Excellence
            </motion.h2>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
              whileHover={{ scale: 1.01 }}
            >
              At KAMLA AI, we don't just build software - we craft solutions
              that solve real business challenges. Our commitment to quality,
              innovation, and customer satisfaction sets us apart in the
              competitive tech landscape.
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Ready to start your project?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            Let's discuss how we can help you achieve your business goals with
            our innovative solutions.
          </motion.p>

          <motion.button
            className="py-3 px-8 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-bold rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 0, 255, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
        <Link href="contact">Contact Us</Link>   
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
