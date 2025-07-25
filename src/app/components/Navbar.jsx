"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (item) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
  };

  const navItems = [
    { name: "Home", href: "/" },
    // {
    //   name: "Products",
    //   href: "#",
    //   submenu: [
    //     { name: "All Products", href: "/products" },
    //     { name: "Featured", href: "/products/featured" },
    //     { name: "New Arrivals", href: "/products/new" },
    //   ],
    // },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/teams" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
  ];

  // Check if a link is active
const isActive = (href) => {
  // Normalize both the href and pathname by removing trailing slashes
  const normalizedHref = href.replace(/\/+$/, "");
  const normalizedPathname = pathname.replace(/\/+$/, "");
  
  // Special case for home page
  if (normalizedHref === "") {
    return normalizedPathname === "";
  }
  
  return normalizedPathname === normalizedHref;
};
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 border-b ${
        scrolled
          ? "bg-white shadow-lg border-purple-100 dark:dark:bg-gray-800"
          : "bg-white/95 backdrop-blur-sm border-purple-50 dark:dark:bg-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" className="flex items-center">
              <div className="w-40 h-18 relative mr-3">
                <Image
                  src={logo}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center mx-auto space-x-3">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                        openSubmenu === item.name
                          ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
                          : isActive(item.href)
                          ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
                          : "text-gray-800 hover:text-purple-700 hover:bg-purple-50"
                      }`}
                    >
                      {item.name}
                      {openSubmenu === item.name ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {openSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2  w-48 bg-white rounded-md shadow-xl py-1 z-50 border border-purple-100"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors ${
                                isActive(subItem.href) ? "bg-purple-50 text-purple-600" : ""
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 dark:text-white py-2 rounded-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
                        : "text-gray-800 hover:text-white hover:bg-gradient-to-r from-purple-600 to-pink-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="md:hidden flex items-center ">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg text-gray-700 hover:text-white dark:hover:text-black dark:bg-white hover:bg-purple-600 transition-colors shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-xl border-t border-purple-100 overflow-hidden"
          >
            <div className="px-4 dark:bg-slate-800  pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-purple-50 last:border-0 "
                >
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={`w-full flex justify-between items-center py-3 px-2 rounded-lg ${
                          openSubmenu === item.name || isActive(item.href)
                            ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
                            : "text-gray-800 hover:text-purple-700"
                        }`}
                      >
                        {item.name}
                        {openSubmenu === item.name ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2 bg-purple-50 rounded-lg my-2 "
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block py-2 px-4 hover:text-purple-600 hover:bg-white transition-colors rounded-lg ${
                                  isActive(subItem.href)
                                    ? "bg-white text-purple-600"
                                    : "text-gray-700"
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-3 px-2 rounded-lg dark:text-white font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-white bg-gradient-to-r from-purple-600 to-pink-500"
                          : "hover:text-white hover:bg-purple-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex space-x-4 pt-4 px-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2  text-gray-700 dark:text-white hover:text-white transition-colors "
                >
                  <div className=" md:flex items-center space-x-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                          <span className="sr-only">Toggle theme</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                          Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                          System
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
















// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ChevronUp,
//   ShoppingCart,
//   Search,
//   User,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../assets/logo.svg";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null);
//   const { setTheme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleSubmenu = (item) => {
//     setOpenSubmenu(openSubmenu === item ? null : item);
//   };

//   const navItems = [
//     { name: "Home", href: "/" },
//     // {
//     //   name: "Products",
//     //   href: "#",
//     //   submenu: [
//     //     { name: "All Products", href: "/products" },
//     //     { name: "Featured", href: "/products/featured" },
//     //     { name: "New Arrivals", href: "/products/new" },
//     //   ],
//     // },
//     { name: "Features", href: "/features" },
//     { name: "Services", href: "/services" },
//     { name: "About", href: "/about" },
//     { name: "Team", href: "/teams" },
//     { name: "Contact", href: "/contact" },
//     { name: "Career", href: "/career" },
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed w-full z-50 border-b ${
//         scrolled
//           ? "bg-white shadow-lg border-purple-100 dark:dark:bg-gray-800"
//           : "bg-white/95 backdrop-blur-sm border-purple-50 dark:dark:bg-gray-800"
//       }`}
//     >
//       {/* Gradient accent bar using logo colors */}
//       {/* <div className="h-1 w-full bg-gradient-to-r  from-purple-600 via-pink-500 to-purple-400"></div> */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex-shrink-0 flex items-center"
//           >
//             <Link href="/" className="flex items-center">
//               <div className="w-40 h-18 relative mr-3">
//                 <Image
//                   src={logo}
//                   alt="Company Logo"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center mx-auto space-x-3">
//             {navItems.map((item) => (
//               <div key={item.name} className="relative">
//                 {item.submenu ? (
//                   <div className="relative">
//                     <button
//                       onClick={() => toggleSubmenu(item.name)}
//                       className={`flex items-center px-4 py-2 rounded-lg transition-all ${
//                         openSubmenu === item.name
//                           ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
//                           : "text-gray-800 hover:text-purple-700 hover:bg-purple-50 "
//                       }`}
//                     >
//                       {item.name}
//                       {openSubmenu === item.name ? (
//                         <ChevronUp className="ml-1 h-4 w-4" />
//                       ) : (
//                         <ChevronDown className="ml-1 h-4 w-4" />
//                       )}
//                     </button>

//                     <AnimatePresence>
//                       {openSubmenu === item.name && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                           className="absolute left-0 mt-2  w-48 bg-white rounded-md shadow-xl py-1 z-50 border border-purple-100"
//                         >
//                           {item.submenu.map((subItem) => (
//                             <Link
//                               key={subItem.name}
//                               href={subItem.href}
//                               className="block px-4 py-2  text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
//                             >
//                               {subItem.name}
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="px-4 dark:text-white py-2 rounded-lg text-gray-800 hover:text-purple-700 hover:bg-purple-800 transition-colors font-medium"
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//                   <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//                   <span className="sr-only">Toggle theme</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem onClick={() => setTheme("light")}>
//                   Light
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("dark")}>
//                   Dark
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("system")}>
//                   System
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {/* Icons with brand colors */}

//           <div className="md:hidden flex items-center ">
//             <motion.button
//               onClick={() => setIsOpen(!isOpen)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 rounded-lg text-gray-700 hover:text-white dark:hover:text-black dark:bg-white hover:bg-purple-600 transition-colors shadow-sm"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white shadow-xl border-t border-purple-100 overflow-hidden"
//           >
//             <div className="px-4 dark:bg-slate-800  pt-2 pb-6 space-y-2">
//               {navItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="border-b border-purple-50 last:border-0 "
//                 >
//                   {item.submenu ? (
//                     <div>
//                       <button
//                         onClick={() => toggleSubmenu(item.name)}
//                         className={`w-full flex justify-between items-center py-3 px-2 rounded-lg ${
//                           openSubmenu === item.name
//                             ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
//                             : "text-gray-800 hover:text-purple-700"
//                         }`}
//                       >
//                         {item.name}
//                         {openSubmenu === item.name ? (
//                           <ChevronUp className="h-5 w-5" />
//                         ) : (
//                           <ChevronDown className="h-5 w-5" />
//                         )}
//                       </button>
//                       <AnimatePresence>
//                         {openSubmenu === item.name && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.2 }}
//                             className="pl-4 space-y-2 bg-purple-50 rounded-lg my-2 "
//                           >
//                             {item.submenu.map((subItem) => (
//                               <Link
//                                 key={subItem.name}
//                                 href={subItem.href}
//                                 className="block  py-2 px-4 text-gray-700 hover:text-purple-600 hover:bg-white transition-colors rounded-lg"
//                                 onClick={() => setIsOpen(false)}
//                               >
//                                 {subItem.name}
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className="block py-3 px-2 rounded-lg dark:text-white  hover:text-white hover:bg-purple-600 transition-colors font-medium"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//               <div className="flex space-x-4 pt-4 px-2">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="p-2  text-gray-700 dark:text-white hover:text-white transition-colors "
//                 >
//                   <div className=" md:flex items-center space-x-4">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="outline" size="icon">
//                           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//                           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//                           <span className="sr-only">Toggle theme</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => setTheme("light")}>
//                           Light
//                         </DropdownMenuItem>
//                         <DropdownMenuItem onClick={() => setTheme("dark")}>
//                           Dark
//                         </DropdownMenuItem>
//                         <DropdownMenuItem onClick={() => setTheme("system")}>
//                           System
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </div>
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
