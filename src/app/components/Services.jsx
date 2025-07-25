"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

// Import images
// import img1 from "../../../public/F5.png";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";
// import img7 from "../assets/img7.jpg";

const services = [
  {
    id: 1,
    name: "Software Development",
    description: "Custom solutions tailored to your business needs",
    features: [
      "Web Applications",
      "Mobile Apps",
      "Enterprise Software",
      "API Integration",
    ],
    image: '/img1.jpg',
  },
  {
    id: 2,
    name: "SEO & Digital Marketing",
    description: "Boost your online presence and visibility",
    features: [
      "Keyword Research",
      "Content Strategy",
      "Link Building",
      "Analytics",
    ],
    image: '/img2.jpg',
  },
  {
    id: 3,
    name: "Cloud Services",
    description: "Scalable solutions for growing businesses",
    features: [
      "Cloud Migration",
      "Server Management",
      "Data Storage",
      "Disaster Recovery",
    ],
    image: '/img3.jpg',
  },
  {
    id: 4,
    name: "Business Services",
    description: "Strategic consulting for optimal growth",
    features: [
      "Process Automation",
      "Data Analysis",
      "Market Research",
      "Workflow Optimization",
    ],
    image: '/img4.jpg',
  },
  {
    id: 5,
    name: "Outsourcing Services",
    description: "Global talent for your operational needs",
    features: [
      "Customer Support",
      "IT Services",
      "HR Management",
      "Accounting",
    ],
    image: '/img7.jpg',
  },
  {
    id: 6,
    name: "Game Development",
    description: "Immersive experiences across platforms",
    features: ["2D/3D Games", "AR/VR", "Mobile Games", "Game Design"],
    image: '/img6.jpg',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500">
      {/* Image with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {service.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <FiCheckCircle className="text-[#FF00FF] mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button className="flex items-center text-[#FF00FF] font-medium group">
          <Link href="/services">Learn more</Link>
          <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF00FF] transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-sm font-semibold text-[#FF00FF] mb-3 tracking-wider">
          OUR EXPERTISE
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Comprehensive{" "}
          <span className="text-[#FF00FF]">Digital Solutions</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Cutting-edge services designed to propel your business forward in the
          digital landscape
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation */}
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="relative cursor-pointer h-[50px] w-[50px] left-0 top-0 translate-y-0 bg-pink-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-green-300 dark:hover:bg-gray-700" />
            <CarouselNext className="relative cursor-pointer h-[50px] w-[50px] right-0 top-0 translate-y-0 bg-pink-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-green-300 dark:hover:bg-gray-700" />
          </div>
        </Carousel>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-4xl mx-auto mt-24 text-center pb-10"
      >
        <div className="bg-gradient-to-r from-[#FF00FF]/5 to-purple-500/5 dark:from-[#4B0082]/10  dark:to-[#2E1065]/10 p-8 sm:p-12 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create custom solutions tailored to your
            unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white font-medium rounded-lg transition-colors duration-300 shadow hover:shadow-lg">
              <Link href="/services">Get Services</Link>
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF]/10 font-medium rounded-lg transition-colors duration-300">
              <Link href="/contact">Contact Sales</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
