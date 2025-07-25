"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  FiUsers,
  FiCode,
  FiBarChart2,
  FiServer,
  FiBriefcase,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Footer from "../components/Footer";

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const serviceDetails = {
    "Outsourcing Services":
      "Our comprehensive outsourcing solutions help businesses delegate non-core functions to our expert team. We provide end-to-end management of customer support, IT services, accounting, and HR operations, ensuring seamless integration with your existing workflows while reducing operational costs by up to 40%.",
    "Software Development":
      "We specialize in custom software solutions using cutting-edge technologies like React, Node.js, and Python. Our agile development process delivers scalable applications with robust security features, typically completing projects 30% faster than industry standards while maintaining 99.9% uptime for deployed solutions.",
    "SEO & Digital Marketing":
      "Our data-driven marketing strategies combine advanced SEO techniques with targeted PPC campaigns and social media management. We've helped clients achieve an average 300% increase in organic traffic and 150% improvement in conversion rates through our comprehensive digital marketing approach.",
    "Cloud Services":
      "We offer secure, scalable cloud solutions with 24/7 monitoring and support. Our cloud infrastructure guarantees 99.99% availability with enterprise-grade security compliance, helping businesses reduce IT costs by up to 60% while improving operational efficiency.",
    "Business Services":
      "Our strategic consulting services help optimize business processes and implement growth-focused technologies. Clients typically see a 25% increase in operational efficiency within the first six months of engagement with our business optimization services.",
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="group relative overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 border border-gray-200 dark:border-slate-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-lg mr-4 group-hover:bg-gradient-to-br group-hover:from-[#FF00FF]/20 group-hover:to-purple-500/20 transition-all duration-500">
            {service.icon}
          </div>
          <motion.h2
            className="text-2xl font-bold text-white dark:text-white"
            whileHover={{
              scale: 1.02,
              backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
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
              transition={{ delay: 0.5 + itemIndex * 0.1 }}
            >
              <span className="text-[#FF00FF] mr-2 mt-1">•</span>
              <span className="text-white dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700"
          >
            <p className="text-white dark:text-gray-300 mb-4">
              {serviceDetails[service.title]}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {service.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="px-3 py-1 bg-[#FF00FF]/10 dark:bg-purple-900/20 text-[#FF00FF] dark:text-purple-300 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="bg-[#FF00FF]/5 dark:bg-purple-900/10 p-4 rounded-lg">
              <h4 className="font-semibold text-[#FF00FF] dark:text-purple-300 mb-2">
                Key Benefits:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF00FF] mr-2">✓</span>
                  <span className="text-white dark:text-gray-300">
                    {service.title === "Outsourcing Services" &&
                      "Cost reduction up to 40%"}
                    {service.title === "Software Development" &&
                      "30% faster delivery"}
                    {service.title === "SEO & Digital Marketing" &&
                      "300% traffic increase"}
                    {service.title === "Cloud Services" && "99.99% uptime"}
                    {service.title === "Business Services" &&
                      "25% efficiency boost"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF00FF] mr-2">✓</span>
                  <span className="text-white dark:text-gray-300">
                    {service.title === "Outsourcing Services" &&
                      "24/7 support availability"}
                    {service.title === "Software Development" &&
                      "Enterprise-grade security"}
                    {service.title === "SEO & Digital Marketing" &&
                      "Data-driven strategies"}
                    {service.title === "Cloud Services" &&
                      "Enterprise security compliance"}
                    {service.title === "Business Services" &&
                      "Strategic growth planning"}
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-6 py-4  dark:bg-slate-700/30 border-t border-gray-200 dark:border-slate-700">
        <motion.button
          className="w-full py-2 px-4 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 relative z-10"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <>
              <FiChevronUp className="text-lg" />
              Show Less
            </>
          ) : (
            <>
              <FiChevronDown className="text-lg" />
              Learn More
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Outsourcing Services",
      icon: (
        <FiUsers className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      items: ["Customer Support", "IT Services", "Accounting", "HR Services"],
    },
    {
      title: "Software Development",
      icon: (
        <FiCode className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      items: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "API Integration",
      ],
    },
    {
      title: "SEO & Digital Marketing",
      icon: (
        <FiBarChart2 className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      items: [
        "SEO Optimization",
        "PPC Campaigns",
        "Social Media",
        "Content Marketing",
      ],
    },
    {
      title: "Cloud Services",
      icon: (
        <FiServer className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      items: [
        "Cloud Migration",
        "Server Management",
        "Data Storage",
        "Disaster Recovery",
      ],
    },
    {
      title: "Business Services",
      icon: (
        <FiBriefcase className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
      ),
      items: [
        "Business Consulting",
        "Process Optimization",
        "Market Research",
        "Strategic Planning",
      ],
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

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/backV.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 dark:bg-slate-900/80"></div>
      </div>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center my-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-4"
              whileHover={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
              transition={{ duration: 0.3 }}
            >
              Our <span className="text-[#FF00FF]">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Comprehensive solutions tailored to empower your business in the
              digital age
            </motion.p>
          </motion.div>

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

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-[#FF00FF]/10 to-purple-100 dark:from-[#4B0082]/20 dark:to-[#2E1065]/30 p-8 rounded-xl border border-gray-200 dark:border-purple-900/50">
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#FF00FF]/20"
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
                className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-purple-500/20"
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

              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-4 relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                Ready to transform your business?
              </motion.h2>
              <motion.p
                className="text-xl text-white dark:text-gray-300 mb-6 max-w-3xl mx-auto relative z-10"
                whileHover={{ scale: 1.01 }}
              >
                Our experts are standing by to discuss how we can help you
                achieve your goals.
              </motion.p>
              <motion.button
                className="relative z-10 py-3 px-8 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-bold rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 0, 255, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;

// "use client";

// import React, { useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import {
//   FiUsers,
//   FiCode,
//   FiBarChart2,
//   FiServer,
//   FiBriefcase,
//   FiChevronDown,
//   FiChevronUp,
// } from "react-icons/fi";
// import Footer from "../components/Footer";

// const ServiceCard = ({ service, index }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         delay: index * 0.1,
//       },
//     },
//   };

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const serviceDetails = {
//     "Outsourcing Services": "Our comprehensive outsourcing solutions help businesses delegate non-core functions to our expert team. We provide end-to-end management of customer support, IT services, accounting, and HR operations, ensuring seamless integration with your existing workflows while reducing operational costs by up to 40%.",
//     "Software Development": "We specialize in custom software solutions using cutting-edge technologies like React, Node.js, and Python. Our agile development process delivers scalable applications with robust security features, typically completing projects 30% faster than industry standards while maintaining 99.9% uptime for deployed solutions.",
//     "SEO & Digital Marketing": "Our data-driven marketing strategies combine advanced SEO techniques with targeted PPC campaigns and social media management. We've helped clients achieve an average 300% increase in organic traffic and 150% improvement in conversion rates through our comprehensive digital marketing approach.",
//     "Cloud Services": "We offer secure, scalable cloud solutions with 24/7 monitoring and support. Our cloud infrastructure guarantees 99.99% availability with enterprise-grade security compliance, helping businesses reduce IT costs by up to 60% while improving operational efficiency.",
//     "Business Services": "Our strategic consulting services help optimize business processes and implement growth-focused technologies. Clients typically see a 25% increase in operational efficiency within the first six months of engagement with our business optimization services."
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={cardVariants}
//       className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300 border border-gray-200 dark:border-slate-700"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//       <div className="p-6">
//         <div className="flex items-center mb-4">
//           <div className="p-3 bg-[#FF00FF]/10 dark:bg-purple-900/20 rounded-lg mr-4 group-hover:bg-gradient-to-br group-hover:from-[#FF00FF]/20 group-hover:to-purple-500/20 transition-all duration-500">
//             {service.icon}
//           </div>
//           <motion.h2
//             className="text-2xl font-bold text-gray-800 dark:text-white"
//             whileHover={{
//               scale: 1.02,
//               backgroundImage: "linear-gradient(45deg, #FF00FF, #9F2B68)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               color: "transparent",
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             {service.title}
//           </motion.h2>
//         </div>

//         <ul className="space-y-3 mt-6">
//           {service.items.map((item, itemIndex) => (
//             <motion.li
//               key={itemIndex}
//               className="flex items-start"
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 + itemIndex * 0.1 }}
//             >
//               <span className="text-[#FF00FF] mr-2 mt-1">•</span>
//               <span className="text-gray-700 dark:text-gray-300">{item}</span>
//             </motion.li>
//           ))}
//         </ul>

//         {isExpanded && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700"
//           >
//             <p className="text-gray-700 dark:text-gray-300 mb-4">
//               {serviceDetails[service.title]}
//             </p>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {service.items.map((item, itemIndex) => (
//                 <span
//                   key={itemIndex}
//                   className="px-3 py-1 bg-[#FF00FF]/10 dark:bg-purple-900/20 text-[#FF00FF] dark:text-purple-300 rounded-full text-sm"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//             <div className="bg-[#FF00FF]/5 dark:bg-purple-900/10 p-4 rounded-lg">
//               <h4 className="font-semibold text-[#FF00FF] dark:text-purple-300 mb-2">
//                 Key Benefits:
//               </h4>
//               <ul className="space-y-2">
//                 <li className="flex items-start">
//                   <span className="text-[#FF00FF] mr-2">✓</span>
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {service.title === "Outsourcing Services" && "Cost reduction up to 40%"}
//                     {service.title === "Software Development" && "30% faster delivery"}
//                     {service.title === "SEO & Digital Marketing" && "300% traffic increase"}
//                     {service.title === "Cloud Services" && "99.99% uptime"}
//                     {service.title === "Business Services" && "25% efficiency boost"}
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#FF00FF] mr-2">✓</span>
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {service.title === "Outsourcing Services" && "24/7 support availability"}
//                     {service.title === "Software Development" && "Enterprise-grade security"}
//                     {service.title === "SEO & Digital Marketing" && "Data-driven strategies"}
//                     {service.title === "Cloud Services" && "Enterprise security compliance"}
//                     {service.title === "Business Services" && "Strategic growth planning"}
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <div className="px-6 py-4 bg-gray-50 dark:bg-slate-700/30 border-t border-gray-200 dark:border-slate-700">
//         <motion.button
//           className="w-full py-2 px-4 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 relative z-10"
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={toggleExpand}
//         >
//           {isExpanded ? (
//             <>
//               <FiChevronUp className="text-lg" />
//               Show Less
//             </>
//           ) : (
//             <>
//               <FiChevronDown className="text-lg" />
//               Learn More
//             </>
//           )}
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// const ServicesPage = () => {
//   const services = [
//     {
//       title: "Outsourcing Services",
//       icon: (
//         <FiUsers className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
//       ),
//       items: [
//         "Customer Support",
//         "IT Services",
//         "Accounting",
//         "HR Services",
//       ],
//     },
//     {
//       title: "Software Development",
//       icon: (
//         <FiCode className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
//       ),
//       items: [
//         "Web Development",
//         "Mobile Apps",
//         "Custom Software",
//         "API Integration",
//       ],
//     },
//     {
//       title: "SEO & Digital Marketing",
//       icon: (
//         <FiBarChart2 className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
//       ),
//       items: [
//         "SEO Optimization",
//         "PPC Campaigns",
//         "Social Media",
//         "Content Marketing",
//       ],
//     },
//     {
//       title: "Cloud Services",
//       icon: (
//         <FiServer className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
//       ),
//       items: [
//         "Cloud Migration",
//         "Server Management",
//         "Data Storage",
//         "Disaster Recovery",
//       ],
//     },
//     {
//       title: "Business Services",
//       icon: (
//         <FiBriefcase className="text-4xl text-[#FF00FF] group-hover:text-white transition-colors duration-300" />
//       ),
//       items: [
//         "Business Consulting",
//         "Process Optimization",
//         "Market Research",
//         "Strategic Planning",
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center my-16"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.h1
//               className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
//               whileHover={{
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               Our <span className="text-[#FF00FF]">Services</span>
//             </motion.h1>
//             <motion.p
//               className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               Comprehensive solutions tailored to empower your business in the
//               digital age
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {services.map((service, index) => (
//               <ServiceCard key={index} service={service} index={index} />
//             ))}
//           </motion.div>

//           <motion.div
//             className="mt-20 text-center"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//           >
//             <div className="relative overflow-hidden bg-gradient-to-r from-[#FF00FF]/10 to-purple-100 dark:from-[#4B0082]/20 dark:to-[#2E1065]/30 p-8 rounded-xl border border-gray-200 dark:border-purple-900/50">
//               <motion.div
//                 className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#FF00FF]/20"
//                 animate={{
//                   y: [0, 20, 0],
//                   opacity: [0.3, 0.5, 0.3],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//               <motion.div
//                 className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-purple-500/20"
//                 animate={{
//                   y: [0, -20, 0],
//                   opacity: [0.3, 0.5, 0.3],
//                 }}
//                 transition={{
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 2,
//                 }}
//               />

//               <motion.h2
//                 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 relative z-10"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 Ready to transform your business?
//               </motion.h2>
//               <motion.p
//                 className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto relative z-10"
//                 whileHover={{ scale: 1.01 }}
//               >
//                 Our experts are standing by to discuss how we can help you
//                 achieve your goals.
//               </motion.p>
//               <motion.button
//                 className="relative z-10 py-3 px-8 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-bold rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px -5px rgba(255, 0, 255, 0.4)",
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Get Started Today
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ServicesPage;
