"use client";

import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import VideoEffect from "./components/VideoEffect";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       
      >
        <VideoEffect />
        <AboutCompany />
        <Services/>
        <Footer/>
      </motion.nav>
    </>
  );
};

export default page;
