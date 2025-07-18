'use client'

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiUser, FiCode, FiBriefcase, FiLinkedin, FiGithub, FiMail, FiAward } from 'react-icons/fi';

// Import team photos (replace with your actual image paths)
import RituPhoto from '../assets/Ritu.jpg';
import TusharPhoto from '../assets/Tushar.jpeg';
import Image from 'next/image';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Ms. Ritu Patle",
      role: "Executive Director",
      bio: "Ritu Patle is an accomplished MBA graduate with a dual specialization in Finance and Human Resources. With a strong foundation in financial analysis, management, and human capital strategies, Ritu brings a unique blend of analytical acumen and people management skills to the table. Her expertise allows her to seamlessly navigate the complexities of modern organizations by aligning financial goals with HR initiatives.",
      photo: RituPhoto,
      icon: <FiBriefcase className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />,
      social: [
        { icon: <FiLinkedin />, url: "#" },
        { icon: <FiMail />, url: "#" }
      ],
      photoPlaceholderColor: "from-purple-400/20 to-pink-400/20" // Gradient for photo placeholder
    },
    {
      name: "Mr. Tushar Patle",
      role: "Sr. Software Development Engineer",
      bio: "Tushar Patle is a skilled Software Development Engineer with more than three years of experience in the field. He is well-versed in programming languages, along with a solid grasp of software development methodologies. Throughout his career, Tushar has actively engaged in various phases of the software development lifecycle, from gathering requirements to coding, testing, and deployment.",
      photo: TusharPhoto,
      icon: <FiCode className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />,
      social: [
        { icon: <FiLinkedin />, url: "#" },
        { icon: <FiMail />, url: "#" }
      ],
      photoPlaceholderColor: "from-blue-400/20 to-cyan-400/20" // Gradient for photo placeholder
    }
  ];

  const TeamCard = ({ member, index }) => {
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
          delay: index * 0.2
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              {/* Profile Photo with fallback */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-md">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${member.photoPlaceholderColor} flex items-center justify-center`}>
                    <FiUser className="text-5xl text-white/80" />
                  </div>
                )}
              </div>
              
              {/* Role Icon */}
              <div className="absolute -bottom-2 -right-2 p-3 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-full group-hover:bg-gradient-to-br group-hover:from-[#FF00FF]/20 group-hover:to-purple-500/20 transition-all duration-500">
                {member.icon}
              </div>
            </div>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white text-center"
              whileHover={{ 
                scale: 1.02,
                backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
              transition={{ duration: 0.3 }}
            >
              {member.name}
            </motion.h3>
            
            <motion.p 
              className="text-[#FF00FF] font-medium text-center"
              whileHover={{ scale: 1.05 }}
            >
              {member.role}
            </motion.p>
          </div>
          
          {/* Bio */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            {member.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {member.social.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                className="p-2 bg-gray-100 dark:bg-slate-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-[#FF00FF] hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 mt-15"
            whileHover={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
            transition={{ duration: 0.3 }}
          >
            Meet Our <span className="text-[#FF00FF]">Team</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            The talented individuals who make KAMLA AI exceptional
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Values Section */}
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
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-purple-500/20"
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
          
          <div className="relative z-10 text-center">
            <FiAward className="mx-auto text-5xl text-[#FF00FF] mb-6" />
            
            <motion.h2 
              className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Our Core Values
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Excellence", desc: "We strive for the highest quality in everything we do" },
                { title: "Innovation", desc: "Constantly pushing boundaries to deliver cutting-edge solutions" },
                { title: "Collaboration", desc: "Working together to achieve extraordinary results" }
              ].map((value, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-[#FF00FF] mb-2">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.desc}</p>
                </motion.div>
              ))}
            </div>
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
            Want to join our team?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            We're always looking for talented individuals to join our growing team.
          </motion.p>
          
          <motion.button 
            className="py-3 px-8 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-bold rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 0, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;