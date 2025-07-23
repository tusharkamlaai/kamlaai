"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiFileText,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

const CareersPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "", resume: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^[0-9+\- ]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
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
      // Initialize EmailJS with your public key
      emailjs.init("TC2GdYj_iHETX9xkx"); // Replace with your public key

      // Send email using EmailJS
      await emailjs.sendForm(
        "service_xa385uf", // Your EmailJS service ID
        "template_3ovf5s8", // Your EmailJS template ID
        form.current,
        "TC2GdYj_iHETX9xkx" // Your EmailJS public key
      );

      setNotification({
        show: true,
        message:
          "Application submitted successfully! We will review your information shortly.",
        type: "success",
      });

      // Reset form
      form.current.reset();
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setNotification({
        show: true,
        message:
          "Failed to submit application. Please try again or contact us directly.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component remains the same...
  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
    //   {/* Animated background elements */}
    //   <motion.div
    //     className="fixed inset-0 overflow-hidden pointer-events-none"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //   >
    //     {[...Array(5)].map((_, i) => (
    //       <motion.div
    //         key={i}
    //         className="absolute rounded-full bg-[#FF00FF]/10"
    //         style={{
    //           width: Math.random() * 300 + 100,
    //           height: Math.random() * 300 + 100,
    //           left: `${Math.random() * 100}%`,
    //           top: `${Math.random() * 100}%`,
    //         }}
    //         animate={{
    //           x: [0, Math.random() * 100 - 50],
    //           y: [0, Math.random() * 100 - 50],
    //           opacity: [0.1, 0.2, 0.1],
    //         }}
    //         transition={{
    //           duration: Math.random() * 20 + 10,
    //           repeat: Infinity,
    //           repeatType: "reverse",
    //           ease: "easeInOut",
    //           delay: Math.random() * 5
    //         }}
    //       />
    //     ))}
    //   </motion.div>

    //   <div className="max-w-7xl mx-auto relative z-10">
    //     {/* Header */}
    //     <motion.div
    //       className="text-center mb-16"
    //       initial={{ opacity: 0, y: -20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //     >
    //       <motion.h1
    //         className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-12"
    //         whileHover={{
    //           backgroundClip: "text",
    //           WebkitBackgroundClip: "text",
    //         }}
    //         transition={{ duration: 0.3 }}
    //       >
    //         Career <span className="text-[#FF00FF]">Opportunities</span>
    //       </motion.h1>
    //       <motion.p
    //         className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.3, duration: 0.6 }}
    //       >
    //         We're always looking for talented individuals to join our growing team.
    //       </motion.p>
    //     </motion.div>

    //     {/* Application Form */}
    //     <motion.div
    //       className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden"
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.3, duration: 0.6 }}
    //     >
    //       <div className="p-8 sm:p-10">
    //         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Application Form</h3>

    //         <form ref={form} onSubmit={sendEmail} className="space-y-6">
    //           {/* Name */}
    //           <div>
    //             <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    //               Full Name
    //             </label>
    //             <div className="relative">
    //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //                 <FiUser className="text-gray-400" />
    //               </div>
    //               <input
    //                 type="text"
    //                 id="name"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleInputChange}
    //                 className={`pl-10 w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'} focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white`}
    //                 placeholder="John Doe"
    //               />
    //             </div>
    //             {errors.name && (
    //               <p className="mt-2 text-sm text-red-600">{errors.name}</p>
    //             )}
    //           </div>

    //           {/* Email */}
    //           <div>
    //             <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    //               Email Address
    //             </label>
    //             <div className="relative">
    //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //                 <FiMail className="text-gray-400" />
    //               </div>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 value={formData.email}
    //                 onChange={handleInputChange}
    //                 className={`pl-10 w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'} focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white`}
    //                 placeholder="your@email.com"
    //               />
    //             </div>
    //             {errors.email && (
    //               <p className="mt-2 text-sm text-red-600">{errors.email}</p>
    //             )}
    //           </div>

    //           {/* Phone */}
    //           <div>
    //             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    //               Phone Number
    //             </label>
    //             <div className="relative">
    //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //                 <FiPhone className="text-gray-400" />
    //               </div>
    //               <input
    //                 type="tel"
    //                 id="phone"
    //                 name="phone"
    //                 value={formData.phone}
    //                 onChange={handleInputChange}
    //                 className={`pl-10 w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'} focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white`}
    //                 placeholder="+91 9876543210"
    //               />
    //             </div>
    //             {errors.phone && (
    //               <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
    //             )}
    //           </div>

    //           {/* Resume Upload */}
    //           <div>
    //             <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    //               Resume/CV
    //             </label>
    //             <div className="relative">
    //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //                 <FiFileText className="text-gray-400" />
    //               </div>
    //               <input
    //                 type="file"
    //                 id="resume"
    //                 name="resume"
    //                 onChange={handleFileChange}
    //                 className={`pl-10 w-full px-4 py-3 rounded-lg border ${errors.resume ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'} focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#FF00FF]/10 file:text-[#FF00FF] hover:file:bg-[#FF00FF]/20`}
    //                 accept=".pdf,.doc,.docx"
    //               />
    //             </div>
    //             {errors.resume && (
    //               <p className="mt-2 text-sm text-red-600">{errors.resume}</p>
    //             )}
    //             <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
    //               Accepted file types: PDF, DOC, DOCX (Max size: 5MB)
    //             </p>
    //           </div>

    //           {/* Cover Letter */}
    //           <div>
    //             <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    //               Cover Letter
    //             </label>
    //             <div className="relative">
    //               <div className="absolute top-3 left-3">
    //                 <FiMessageSquare className="text-gray-400" />
    //               </div>
    //               <textarea
    //                 id="coverLetter"
    //                 name="coverLetter"
    //                 value={formData.coverLetter}
    //                 onChange={handleInputChange}
    //                 rows="6"
    //                 className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-[#FF00FF] focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
    //                 placeholder="Tell us why you'd be a great fit for our team..."
    //               ></textarea>
    //             </div>
    //           </div>

    //           {/* Submit Button */}
    //           <div className="pt-4">
    //             <motion.button
    //               type="submit"
    //               className="w-full flex justify-center items-center px-6 py-3 bg-gradient-to-r from-[#FF00FF] to-purple-600 hover:from-[#FF00FF]/90 hover:to-purple-600/90 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300"
    //               whileHover={{ scale: 1.02 }}
    //               whileTap={{ scale: 0.98 }}
    //               disabled={isSubmitting}
    //             >
    //               {isSubmitting ? (
    //                 <span className="flex items-center">
    //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    //                   </svg>
    //                   Submitting...
    //                 </span>
    //               ) : (
    //                 <span className="flex items-center">
    //                   Submit Application <FiSend className="ml-2" />
    //                 </span>
    //               )}
    //             </motion.button>
    //           </div>
    //         </form>
    //       </div>
    //     </motion.div>
    //   </div>

    //   {/* Notification */}
    //   <AnimatePresence>
    //     {notification.show && (
    //       <motion.div
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: 50 }}
    //         className={`fixed bottom-8 right-8 p-4 rounded-lg shadow-xl z-50 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}
    //       >
    //         <div className="flex items-center">
    //           {notification.type === 'success' ? (
    //             <FiCheckCircle className="mr-2" />
    //           ) : (
    //             <FiX className="mr-2" />
    //           )}
    //           <span>{notification.message}</span>
    //           <button
    //             onClick={() => setNotification({ ...notification, show: false })}
    //             className="ml-4"
    //           >
    //             <FiX />
    //           </button>
    //         </div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-20 px-4 text-center">
        <h1 className="text-[100px]">Coming Soon!</h1>
      </div>
    </>
  );
};

export default CareersPage;
