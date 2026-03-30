import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaStar, FaClock, FaTrophy,
  FaBookOpen, FaCertificate,
} from "react-icons/fa";
import {
  MdDashboard, MdSchool, MdTimeline,
  MdSettings, MdHelp, MdLogout,
  MdRecommend,
} from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

const sidebarLinks = [
  { icon: <MdDashboard size={20} />, label: "My Dashboard", active: true },
  { icon: <MdSchool size={20} />, label: "Enrolled Courses" },
  { icon: <MdTimeline size={20} />, label: "Learning Path" },
  { icon: <FaCertificate size={16} />, label: "Certificates" },
  { icon: <MdSettings size={20} />, label: "Settings" },
];

const stats = [
  {
    icon: <FaBookOpen size={24} />,
    value: "12",
    label: "Courses in Progress",
    tag: "+2 this month",
    tagColor: "text-[#006a35]",
    iconBg: "bg-[#e0e0ff]",
    iconColor: "text-[#0050d5]",
  },
  {
    icon: <FaTrophy size={24} />,
    value: "08",
    label: "Certificates Earned",
    tag: "Top 5% Student",
    tagColor: "text-[#f97316]",
    iconBg: "bg-[#fff3e0]",
    iconColor: "text-[#f97316]",
  },
  {
    icon: <FaClock size={24} />,
    value: "24.5",
    label: "Hours This Week",
    tag: "128h Total",
    tagColor: "text-[#0050d5]",
    iconBg: "bg-[#e8f5e9]",
    iconColor: "text-[#006a35]",
  },
];

const continueLearning = [
  {
    id: 1,
    category: "DEVELOPMENT",
    categoryColor: "text-[#0050d5]",
    title: "Advanced React Frameworks & State Management",
    progress: 74,
    progressColor: "from-[#0050d5] to-[#7b9cff]",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=180&fit=crop",
  },
  {
    id: 2,
    category: "DESIGN",
    categoryColor: "text-[#f97316]",
    title: "Human-Centered Design: Beyond Accessibility",
    progress: 42,
    progressColor: "from-[#f97316] to-[#fbbf24]",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=180&fit=crop",
  },
];

const recommended = [
  {
    id: 3,
    level: "Intermediate",
    title: "Neural Networks and AI Fundamentals",
    desc: "Master the core concepts of machine learning and build your first...",
    instructor: "Dr. Sarah Chen",
    duration: "18 Hours",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop",
  },
  {
    id: 4,
    level: "Advanced",
    title: "Global Market Dynamics & Strategy",
    desc: "Understand the complex systems that drive international business in...",
    instructor: "Marcus Thorne",
    duration: "12 Hours",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
  },
  {
    id: 5,
    level: "Beginner",
    title: "Viral Narrative & Digital Storytelling",
    desc: "Learn how to craft stories that resonate with social platforms and...",
    instructor: "Elena Rodriguez",
    duration: "8 Hours",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
  },
];

export default function Dashboard() {
  const [activeLink, setActiveLink] = useState("My Dashboard");

  return (
    <main className="pt-20 min-h-screen bg-[#f8f5ff] dark:bg-[#0D0D2B]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-white dark:bg-[#0a0a1f] border-r border-[#e0e0ff] dark:border-[#1a1a3e] px-4 py-8 fixed top-20 left-0">
          {/* User */}
          <div className="flex items-center gap-3 px-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0050d5] to-[#7b9cff] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              AJ
            </div>
            <div>
              <p className="font-bold text-sm text-[#282b51] dark:text-[#f0f0ff]">
                Alex Johnson
              </p>
              <p className="text-xs text-[#f97316] font-semibold">
                Premium Member
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-1 flex-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveLink(link.label)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeLink === link.label
                    ? "bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] dark:text-[#7b9cff] font-bold"
                    : "text-[#282b51]/70 dark:text-[#f0f0ff]/70 hover:bg-[#f1efff] dark:hover:bg-[#1a1a3e]"
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </div>

          {/* Upgrade */}
          <button className="w-full bg-[#f97316] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#ea6c0a] transition-all mb-6">
            Upgrade to Pro
          </button>

          {/* Bottom Links */}
          <div className="flex flex-col gap-1">
            <button className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70 hover:bg-[#f1efff] dark:hover:bg-[#1a1a3e] transition-all">
              <MdHelp size={20} /> Help Center
            </button>
            <button className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70 hover:bg-[#f1efff] dark:hover:bg-[#1a1a3e] transition-all">
              <MdLogout size={20} /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:ml-64 px-8 py-10">
          {/* Greeting */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] mb-2">
              Hello, Alex! Ready to keep learning? 👋
            </h1>
            <p className="text-[#282b51]/60 dark:text-[#f0f0ff]/60">
              You're making great progress. You've completed{" "}
              <span className="text-[#006a35] font-bold">85%</span> of your
              weekly goal.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white dark:bg-[#1a1a3e] rounded-2xl p-6 border border-[#e0e0ff] dark:border-[#252550] shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.iconBg} ${stat.iconColor} rounded-xl flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-bold ${stat.tagColor}`}>
                    {stat.tag}
                  </span>
                </div>
                <p className="font-headline text-4xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-[#282b51]/60 dark:text-[#f0f0ff]/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Continue Learning */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-headline text-2xl font-extrabold text-[#282b51] dark:text-[#f0f0ff]">
                  Continue Learning
                </h2>
                <p className="text-sm text-[#282b51]/60 dark:text-[#f0f0ff]/60">
                  Pick up exactly where you left off.
                </p>
              </div>
              <Link
                to="/courses"
                className="hidden md:flex items-center gap-2 text-[#0050d5] dark:text-[#7b9cff] font-semibold text-sm hover:gap-3 transition-all"
              >
                View All <HiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {continueLearning.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white dark:bg-[#1a1a3e] rounded-2xl overflow-hidden border border-[#e0e0ff] dark:border-[#252550] shadow-sm flex gap-4 p-4"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-28 h-20 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className={`text-xs font-bold ${course.categoryColor} mb-1`}>
                      {course.category}
                    </p>
                    <h3 className="font-headline font-bold text-sm text-[#282b51] dark:text-[#f0f0ff] mb-3 leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">
                        Progress
                      </span>
                      <span className="text-xs font-bold text-[#282b51] dark:text-[#f0f0ff]">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#e0e0ff] dark:bg-[#252550] rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${course.progressColor} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recommended */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-headline text-2xl font-extrabold text-[#282b51] dark:text-[#f0f0ff]">
                Recommended for You
              </h2>
              <span className="bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                New Arrivals
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommended.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-[#1a1a3e] rounded-2xl overflow-hidden border border-[#e0e0ff] dark:border-[#252550] shadow-sm cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#0050d5] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-2 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50 mb-4 line-clamp-2">
                      {course.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60">
                        {course.instructor}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">
                        <FaClock size={10} />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
