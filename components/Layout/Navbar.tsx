// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="fixed top-6 left-0 w-full z-50 px-4 flex flex-col items-center">
//       <nav
//         className={`pill-nav w-full max-w-5xl flex items-center justify-between p-3 md:px-6 transition-all duration-300 
//         ${
//           scrolled
//             ? "bg-white/70 backdrop-blur-xl shadow-lg"
//             : "bg-white/95"
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <Link href="#" className="text-[#004d2c] font-bold text-lg">
//             _Dev
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="#about" className="nav-link-item">_About</Link>
//           <Link href="#experience" className="nav-link-item">_Experience</Link>
//           <Link href="#skills" className="nav-link-item">_Skills</Link>
//           <Link href="#projects" className="nav-link-item">_Projects</Link>
//         </div>

//         <div className="hidden md:block">
//           <Link href="#contact" className="get-started-btn">Contact</Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-[#004d2c] p-2"
//         >
//           ☰
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <div className="w-full max-w-5xl md:hidden">
//         <div
//           className={`mobile-card-menu p-6 flex flex-col space-y-6 ${
//             isOpen ? "is-open" : ""
//           }`}
//         >
//           <Link href="#about">_About</Link>
//           <Link href="#experience">_Experience</Link>
//           <Link href="#skills">_Skills</Link>
//           <Link href="#projects">_Projects</Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPath = (id: string) => {
    return pathname === "/" ? `#${id}` : `/#${id}`;
  };


  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" // TypeScript ab ise accept karega
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4 flex flex-col items-center">
      <nav
        className={`pill-nav w-full max-w-5xl flex items-center justify-between p-3 md:px-6 transition-all duration-300 
        ${scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-gray-200/50"
            : "bg-white/95"
          }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-[#004d2c] font-bold text-lg">
            _Dev
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href={getPath("about")} className="nav-link-item hover:text-[#4ade80] transition-colors">_About</Link>
          <Link href={getPath("experience")} className="nav-link-item hover:text-[#4ade80] transition-colors">_Experience</Link>
          <Link href={getPath("skills")} className="nav-link-item hover:text-[#4ade80] transition-colors">_Skills</Link>
          <Link href={getPath("projects")} className="nav-link-item hover:text-[#4ade80] transition-colors">_Projects</Link>
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`px-6 py-2 rounded-full font-bold transition-all ${pathname === '/contact'
              ? 'bg-[#4ade80] text-[#004d2c]'
              : 'bg-[#004d2c] text-white hover:bg-[#0a613b]'
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#004d2c] p-2 text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu - 100% Working Fix */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-5xl md:hidden mt-2 origin-top"
          >
            <div className="p-6 flex flex-col space-y-6 bg-white/95 backdrop-blur-xl rounded-[20px] shadow-2xl border border-gray-100">
              <Link
                href={getPath("about")}
                onClick={() => setIsOpen(false)}
                className="text-[#004d2c] font-medium text-lg hover:text-[#4ade80] transition-colors"
              >
                _About
              </Link>
              <Link
                href={getPath("experience")}
                onClick={() => setIsOpen(false)}
                className="text-[#004d2c] font-medium text-lg hover:text-[#4ade80] transition-colors"
              >
                _Experience
              </Link>
              <Link
                href={getPath("skills")}
                onClick={() => setIsOpen(false)}
                className="text-[#004d2c] font-medium text-lg hover:text-[#4ade80] transition-colors"
              >
                _Skills
              </Link>
              <Link
                href={getPath("projects")}
                onClick={() => setIsOpen(false)}
                className="text-[#004d2c] font-medium text-lg hover:text-[#4ade80] transition-colors"
              >
                _Projects
              </Link>

              <div className="h-[1px] w-full bg-gray-100 my-2"></div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-center font-bold text-[#004d2c] bg-[#4ade80] py-3 rounded-xl shadow-md active:scale-95 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}