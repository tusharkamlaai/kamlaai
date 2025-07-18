'use client'

import {useRef} from 'react'
import { motion, useInView } from 'framer-motion'
import { FiZap , FiAward, FiGlobe, FiBarChart2, FiCpu, FiClock } from 'react-icons/fi';
import { FaRocket } from "react-icons/fa";

const AboutCompany = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const visionItems = [
    {
      icon: <FiGlobe className="text-[#FF00FF] text-xl" />,
      title: "Industry Leadership",
      description: "Pioneer ethical AI solutions across 20+ industries including healthcare, finance, and smart cities"
    },
    {
      icon: <FiBarChart2 className="text-[#FF00FF] text-xl" />,
      title: "Global Impact",
      description: "Empower 10,000+ businesses worldwide with AI adoption by 2027 through scalable solutions"
    },
    {
      icon: <FiCpu className="text-[#FF00FF] text-xl" />,
      title: "Technical Excellence",
      description: "Develop sustainable AI models with 99.9% accuracy benchmarks and real-time processing capabilities"
    },
    {
      icon: <FiAward className="text-[#FF00FF] text-xl" />,
      title: "Global Presence",
      description: "Establish 5 strategic innovation centers across North America, Europe, and Asia by 2028"
    }
  ]

  const missionItems = [
    {
      icon: <FaRocket  className="text-cyan-500 text-xl" />,
      title: "Enterprise AI",
      description: "Custom solutions for large-scale business transformation"
    },
    {
      icon: <FiZap className="text-cyan-500 text-xl" />,
      title: "ML Ops",
      description: "Streamlined machine learning lifecycle management"
    },
    {
      icon: <FiClock className="text-cyan-500 text-xl" />,
      title: "Predictive Analytics",
      description: "Real-time insights with 95%+ forecasting accuracy"
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background elements */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#FF00FF]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold text-[#FF00FF] mb-3 tracking-wider">WHO WE ARE</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-[#FF00FF]">Kamla AI</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence through innovation, expertise, and transformative solutions
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#FF00FF] to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative h-full p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-br from-[#FF00FF] to-purple-600 rounded-lg mr-4">
                  <FiZap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                To become the foremost global innovator in AI-driven digital transformation by 2030, creating intelligent ecosystems that redefine technological boundaries and set new benchmarks for industry excellence.
              </p>
              
              <ul className="space-y-6 mb-8">
                {visionItems.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
                    className="flex items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  >
                    <div className="p-2 bg-[#FF00FF]/10 dark:bg-[#FF00FF]/20 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                  "Our vision is powered by a commitment to responsible AI - blending cutting-edge technology with human-centric design principles to create solutions that matter."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative h-full p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mr-4">
                  <FaRocket  className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                To deliver transformative, end-to-end AI solutions through continuous innovation, deep technical expertise, and strategic global partnerships, enabling organizations to confidently navigate their digital transformation journeys.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Core Focus Areas</h3>
                  <ul className="space-y-4">
                    {missionItems.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg mr-3">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Key Differentiators</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg mr-3">
                        <FiAward className="text-cyan-500 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Vertical AI</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Industry-specific models with domain expertise</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg mr-3">
                        <FiZap className="text-cyan-500 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Rapid Deployment</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">90% faster implementation than industry average</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-lg mr-3">
                        <FiCpu className="text-cyan-500 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Research Edge</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Dedicated AI lab with 50+ researchers</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                  "We measure success through client outcomes - currently enabling 200+ businesses across 15 countries with average efficiency gains of 40% and revenue increases of 25%."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany