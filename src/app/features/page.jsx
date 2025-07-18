"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import logo1 from "../../app/assets/F5.png";
import logo2 from "../assets/F6.png";
import logo3 from "../assets/F7.png";
import logo4 from "../assets/F8.webp";
import Image from "next/image";

const features = [
  {
    icon: logo1,
    title: "Custom Software Development",
    description:
      "Tailor-made solutions designed to meet your unique business needs and requirements, ensuring optimal functionality and performance.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: logo2,
    title: "User-Friendly Interfaces",
    description:
      "Intuitive and engaging user interfaces that enhance user experience and facilitate ease of use, driving higher adoption and satisfaction.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: logo3,
    title: "Scalability",
    description:
      "Flexible and scalable software solutions that grow with your business, accommodating increased demand and evolving requirements seamlessly.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: logo4,
    title: "Automated Processes",
    description:
      "Automation of repetitive tasks to increase productivity, reduce errors, and streamline your business processes, freeing up valuable resources.",
    gradient: "from-orange-500 to-red-500",
  },
];

function Feature({ icon, title, description, gradient }) {
  const boxVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={controls}
      className="group relative overflow-hidden flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-none border border-gray-100 dark:border-slate-700 hover:border-transparent transition-all duration-300"
    >
      {/* Gradient background overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`}
      ></div>

      {/* Animated border effect */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${
          gradient.split(" ")[0].split("-")[1]
        }-500/30 transition-all duration-500 pointer-events-none`}
      ></div>

      <div
        className={`w-24 h-24 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} p-1 shadow-lg`}
      >
        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center p-3">
          <Image
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
        {title}
      </h3>

      <p className="text-sm md:text-base text-center text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Learn more link */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <a
          href="#"
          className={`text-sm font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex items-center`}
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function Features() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            className="text-center my-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{
                // backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                // color: "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              Our <span className="text-[#FF00FF]">Features</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            >
              Discover how our innovative solutions can transform your business
              and drive growth.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
