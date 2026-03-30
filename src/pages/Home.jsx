import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import {
  MdCode,
  MdBusiness,
  MdBrush,
  MdPeople,
} from "react-icons/md";
import { FaStar, FaClock, FaUserGraduate } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const categories = [
  {
    icon: <MdCode size={28} />,
    label: "Tech & Coding",
    desc: "Full-stack dev and Data Science from experts",
    bg: "bg-[#e0e0ff] dark:bg-[#1a1a3e]",
    color: "text-[#0050d5]",
  },
  {
    icon: <MdBusiness size={28} />,
    label: "Business",
    desc: "Leadership, Strategy, and Digital Marketing",
    bg: "bg-[#fff3e0] dark:bg-[#2a1a0a]",
    color: "text-[#f97316]",
  },
  {
    icon: <MdBrush size={28} />,
    label: "Design",
    desc: "UI/UX, Motion, and Visual Storytelling",
    bg: "bg-[#e8f5e9] dark:bg-[#0a2a0a]",
    color: "text-[#006a35]",
  },
  {
    icon: <MdPeople size={28} />,
    label: "Soft Skills",
    desc: "Communication, Mindset, and Time Management",
    bg: "bg-[#f3e5f5] dark:bg-[#1a0a2a]",
    color: "text-[#7b1fa2]",
  },
];

const courses = [
  {
    id: 1,
    badge: "Best Seller",
    badgeColor: "bg-[#0050d5] text-white",
    title: "Generative AI for Product Designers",
    instructor: "David Chen",
    rating: 4.9,
    reviews: "8.1k",
    price: "$89.99",
    level: "Advanced",
    duration: "12h 41m",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop",
  },
  {
    id: 2,
    badge: "New",
    badgeColor: "bg-[#f97316] text-white",
    title: "Data-Driven Decision Making",
    instructor: "Dr. Sarah Miller",
    rating: 4.8,
    reviews: "3.1k",
    price: "$124.99",
    level: "Intermediate",
    duration: "24h 20m",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
  },
  {
    id: 3,
    badge: "Trending",
    badgeColor: "bg-[#006a35] text-white",
    title: "Agile Leadership Fundamentals",
    instructor: "Elena Rodriguez",
    rating: 4.7,
    reviews: "5.9k",
    price: "$59.99",
    level: "Beginner",
    duration: "8h 15m",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
  },
];

const reasons = [
  {
    icon: "🚀",
    title: "Accelerated Growth",
    desc: "Our curriculum is built for speed. Focus on high-impact skills that employers actually ask for in 2024.",
  },
  {
    icon: "✅",
    title: "Industry Verified",
    desc: "Get certificates co-signed by leading tech companies, ensuring your new skills are recognized globally.",
  },
  {
    icon: "🌍",
    title: "Elite Community",
    desc: "Network with a global community of ambitious learners and get exclusive access to mentorship circles.",
  },
];

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative px-10 py-24 md:py-32 bg-[#f8f5ff] dark:bg-[#0D0D2B] overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0050d5]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <motion.div
            className="flex-1 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] dark:text-[#7b9cff] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f97316] inline-block animate-pulse" />
              Future-Ready Learning
            </span>

            {/* Headline */}
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] leading-[1.1] mb-6">
              Master the skills for{" "}
              <span className="text-[#f97316]">your future</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-[#282b51]/70 dark:text-[#f0f0ff]/70 max-w-xl mb-10 leading-relaxed">
              Join 2M+ learners worldwide in an immersive digital academy.
              Personalized paths, industry mentors, and certificates that
              open doors.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/courses"
                className="bg-gradient-to-r from-[#0050d5] to-[#7b9cff] text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#0050d5]/20"
              >
                Explore Courses
              </Link>
              <button className="bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] dark:text-[#7b9cff] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d0d0ff] dark:hover:bg-[#252550] transition-all">
                How it works
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-[#f97316]", "bg-[#0050d5]", "bg-[#006a35]", "bg-[#7b1fa2]"].map((color, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${color} border-2 border-white dark:border-[#0D0D2B] flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} className="text-[#f97316]" />
                  ))}
                </div>
                <p className="text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60">
                  4.9/5 from 12k+ reviews
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Hero Image */}
          <motion.div
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-[#0050d5]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e0e0ff] dark:border-[#1a1a3e]">
              <img
                src={hero}
                alt="Students learning together"
                className="w-full h-auto object-cover"
              />
              {/* Floating Achievement Card */}
              <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-[#1a1a3e]/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#006a35] flex items-center justify-center">
                  <FaUserGraduate size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#282b51] dark:text-[#f0f0ff]">Top Achievement</p>
                  <p className="text-xs text-[#006a35] font-semibold">94% Career Pivot Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-10 bg-[#f1efff] dark:bg-[#0a0a1f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-[#282b51] dark:text-[#f0f0ff]">
                Focus on what <span className="text-[#0050d5]">matters</span>
              </h2>
              <p className="text-[#282b51]/60 dark:text-[#f0f0ff]/60 mt-2">
                Hand-picked categories for the modern workforce.
              </p>
            </div>
            <Link
              to="/courses"
              className="hidden md:flex items-center gap-2 text-[#0050d5] font-semibold text-sm hover:gap-3 transition-all"
            >
              View all categories <HiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`${cat.bg} rounded-2xl p-6 cursor-pointer`}
              >
                <div className={`${cat.color} mb-4`}>{cat.icon}</div>
                <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-2">
                  {cat.label}
                </h3>
                <p className="text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60 leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="py-20 px-10 bg-[#f8f5ff] dark:bg-[#0D0D2B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-[#282b51] dark:text-[#f0f0ff]">
              Trending <span className="text-[#f97316]">Right Now</span>
            </h2>
            <p className="text-[#282b51]/60 dark:text-[#f0f0ff]/60 mt-2">
              Our most popular learning paths, chosen by thousands of
              professionals this month.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#1a1a3e] rounded-2xl overflow-hidden shadow-sm border border-[#e0e0ff] dark:border-[#252550] cursor-pointer"
              >
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className={`absolute top-3 left-3 ${course.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                    {course.badge}
                  </span>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50 flex items-center gap-1">
                      <FaClock size={10} /> {course.duration}
                    </span>
                    <span className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">•</span>
                    <span className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-3 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60 mb-4">
                    {course.instructor}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaStar size={12} className="text-[#f97316]" />
                      <span className="text-sm font-bold text-[#282b51] dark:text-[#f0f0ff]">
                        {course.rating}
                      </span>
                      <span className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">
                        ({course.reviews})
                      </span>
                    </div>
                    <span className="font-extrabold text-[#0050d5] dark:text-[#7b9cff]">
                      {course.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EduBridge */}
      <section className="py-20 px-10 bg-[#0D0D2B]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
              Why thousands choose{" "}
              <span className="text-[#7b9cff]">EduBridge</span> to level up
            </h2>
            <div className="flex flex-col gap-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1a1a3e] flex items-center justify-center text-2xl flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Progress Dashboard */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1a1a3e] rounded-3xl p-8 border border-[#252550]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold">Your Progress</h3>
                <span className="bg-[#006a35]/20 text-[#6bfe9c] text-xs font-bold px-3 py-1 rounded-full">
                  In Progress
                </span>
              </div>

              {[
                { label: "Full Stack Mastery", percent: 82, color: "from-[#006a35] to-[#6bfe9c]" },
                { label: "Strategic Marketing", percent: 45, color: "from-[#0050d5] to-[#7b9cff]" },
                { label: "UX Design Principles", percent: 67, color: "from-[#f97316] to-[#fbbf24]" },
              ].map((item) => (
                <div key={item.label} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70 text-sm">{item.label}</span>
                    <span className="text-white font-bold text-sm">{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-[#252550] rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#252550] rounded-2xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-white">12</p>
                  <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">Skills Unlocked</p>
                </div>
                <div className="bg-[#252550] rounded-2xl p-4 text-center">
                  <p className="text-3xl font-extrabold text-[#7b9cff]">04</p>
                  <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">Certificates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-10 bg-[#f1efff] dark:bg-[#0a0a1f]">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#0050d5] to-[#7b9cff] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to bridge the gap?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
              Start your journey today and get 30% off your first 3 months
              with our annual plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/courses"
                className="bg-white text-[#0050d5] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#f0f0ff] active:scale-95 transition-all"
              >
                Get Pro Access
              </Link>
              <button className="bg-white/10 text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 active:scale-95 transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#0a0a1f] border-t border-[#e0e0ff] dark:border-[#1a1a3e] py-12 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline text-lg font-extrabold text-[#0050d5]">
              EduBridge
            </span>
            <p className="text-[#282b51]/50 dark:text-[#f0f0ff]/50 text-xs">
              © 2024 EduBridge Global Academy. All rights reserved.
            </p>
            <p className="text-[#282b51]/40 dark:text-[#f0f0ff]/40 text-xs">
              Built by{" "}
              <a
                href="https://github.com/0xsanga"
                target="_blank"
                rel="noreferrer"
                className="text-[#0050d5] font-semibold hover:underline"
              >
                Idaramfon Usanga
              </a>{" "}
              for LZ Flex Digital Solutions
            </p>
            <a
              href="mailto:Lzflexdigital@outlook.com"
              className="text-[#282b51]/40 dark:text-[#f0f0ff]/40 text-xs hover:text-[#0050d5] transition-colors"
            >
              Lzflexdigital@outlook.com
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings", "Contact Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#282b51]/50 dark:text-[#f0f0ff]/50 text-xs hover:text-[#0050d5] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
