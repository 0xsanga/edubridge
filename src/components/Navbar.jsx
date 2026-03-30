import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/EduBridge_Logo.png";

const navLinks = [
  { label: "Explore", href: "/courses" },
  { label: "Mentors", href: "/mentors" },
  { label: "Business", href: "/business" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0D0D2B]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              src={logo}
              alt="EduBridge"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[#282b51] dark:text-[#f0f0ff] font-medium hover:text-[#0050d5] dark:hover:text-[#7b9cff] transition-colors duration-200 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#282b51] dark:text-[#f0f0ff] hover:text-[#0050d5] dark:hover:text-[#7b9cff] transition-colors p-2">
            <Bell size={20} />
          </button>
          <button className="text-[#282b51] dark:text-[#f0f0ff] hover:text-[#0050d5] dark:hover:text-[#7b9cff] transition-colors p-2">
            <ShoppingCart size={20} />
          </button>
          <Link
            to="/courses"
            className="bg-gradient-to-r from-[#0050d5] to-[#7b9cff] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md shadow-[#0050d5]/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#282b51]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-[#0D0D2B]/95 backdrop-blur-md border-t border-[#e0e0ff] dark:border-[#1a1a3e] px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#282b51] font-medium hover:text-[#0050d5] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[#e0e0ff]" />
            <div className="flex items-center gap-4">
              <button className="text-[#282b51]">
                <Bell size={20} />
              </button>
              <button className="text-[#282b51]">
                <ShoppingCart size={20} />
              </button>
            </div>
            <Link
              to="/courses"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-[#0050d5] to-[#7b9cff] text-white px-6 py-3 rounded-full font-bold text-sm text-center"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
