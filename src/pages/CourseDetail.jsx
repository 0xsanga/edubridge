import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  FaStar, FaUsers, FaClock, FaPlay,
  FaLock, FaCheckCircle, FaCertificate,
} from "react-icons/fa";
import {
  HiChevronDown, HiChevronUp, HiArrowLeft,
} from "react-icons/hi";
import {
  MdOndemandVideo, MdPhoneAndroid, MdAssignment,
} from "react-icons/md";

const courseData = {
  1: {
    badge: "Professional Certificate",
    title: "Mastering Digital Experience: User Research & UI Design",
    desc: "Master the fundamentals of UX design from industry leaders. Learn to conduct user research, build wireframes, and design pixel-perfect interfaces that delight users.",
    rating: 4.9,
    reviews: "12,450",
    students: "24,500",
    duration: "18 Hours",
    level: "Beginner",
    price: "$89.99",
    originalPrice: "$199.99",
    discount: "55% OFF",
    instructor: {
      name: "Sarah Sterling",
      title: "Former Head of Design at TechGlobal",
      avatar: "SS",
      rating: 4.9,
      students: "98,400",
      courses: 8,
      bio: "Sarah has spent over 15 years leading design teams at Fortune 500 companies. She specializes in human-centered design and has shipped products used by millions worldwide. Her teaching philosophy focuses on practical, real-world application over theory.",
    },
    learns: [
      "Design highly available user interfaces using modern frameworks",
      "Master user research methodologies and usability testing",
      "Build interactive prototypes with Figma and Adobe XD",
      "Apply accessibility best practices to all your designs",
      "Create and maintain comprehensive design systems",
      "Handle client presentations and design critiques confidently",
    ],
    includes: [
      { icon: <MdOndemandVideo />, text: "18 hours on-demand video" },
      { icon: <MdPhoneAndroid />, text: "Access on mobile and TV" },
      { icon: <MdAssignment />, text: "12 Assignments & 3 Projects" },
      { icon: <FaCertificate />, text: "Certificate of completion" },
    ],
    curriculum: [
      {
        title: "Section 1: Foundations of UX Design",
        lessons: 4,
        duration: "1h 45m",
        items: [
          { title: "What is UX Design?", duration: "12:30", free: true },
          { title: "The Design Thinking Process", duration: "18:45", free: true },
          { title: "Tools of the Trade", duration: "22:00", free: false },
          { title: "Setting Up Your Workspace", duration: "15:20", free: false },
        ],
      },
      {
        title: "Section 2: User Research Methods",
        lessons: 6,
        duration: "2h 30m",
        items: [
          { title: "Qualitative vs Quantitative Research", duration: "20:00", free: false },
          { title: "Conducting User Interviews", duration: "25:30", free: false },
          { title: "Surveys and Analytics", duration: "18:45", free: false },
          { title: "Creating User Personas", duration: "22:15", free: true },
          { title: "Journey Mapping", duration: "19:30", free: false },
          { title: "Synthesizing Research Data", duration: "24:00", free: false },
        ],
      },
      {
        title: "Section 3: Wireframing & Prototyping",
        lessons: 8,
        duration: "3h 45m",
        items: [
          { title: "Lo-Fi vs Hi-Fi Wireframes", duration: "15:20", free: false },
          { title: "Figma Masterclass", duration: "45:00", free: false },
          { title: "Building Interactive Prototypes", duration: "38:15", free: false },
          { title: "Usability Testing Your Prototypes", duration: "28:30", free: false },
        ],
      },
    ],
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id] || courseData[1];
  const [openSections, setOpenSections] = useState([1]);

  const toggleSection = (i) => {
    setOpenSections((prev) =>
      prev.includes(i) ? prev.filter((s) => s !== i) : [...prev, i]
    );
  };

  return (
    <main className="pt-20 min-h-screen bg-[#f8f5ff] dark:bg-[#0D0D2B]">
      {/* Hero */}
      <section className="px-10 py-16 bg-[#f1efff] dark:bg-[#0a0a1f]">
        <div className="max-w-7xl mx-auto">
          {/* Back */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[#0050d5] dark:text-[#7b9cff] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            <HiArrowLeft /> Back to Courses
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] dark:text-[#7b9cff] text-xs font-bold mb-6 uppercase tracking-wider">
                {course.badge}
              </span>

              {/* Title */}
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] leading-tight mb-6">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-[#282b51]/70 dark:text-[#f0f0ff]/70 text-lg leading-relaxed mb-8 max-w-2xl">
                {course.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70">
                <div className="flex items-center gap-2">
                  <FaStar className="text-[#f97316]" />
                  <span className="font-bold text-[#282b51] dark:text-[#f0f0ff]">
                    {course.rating}
                  </span>
                  <span>({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#0050d5]" />
                  <span>{course.students} students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#006a35]" />
                  <span>{course.duration} on-demand video</span>
                </div>
              </div>
            </motion.div>

            {/* Right — Video Thumbnail */}
            <motion.div
              className="w-full lg:w-96 flex-shrink-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop"
                  alt="Course Preview"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0D0D2B]/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <FaPlay size={20} className="text-[#0050d5] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-[#1a1a3e]/90 backdrop-blur-md rounded-xl px-3 py-2">
                  <p className="text-xs font-bold text-[#282b51] dark:text-[#f0f0ff]">
                    Preview this course
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-10 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left Content */}
          <div className="flex-1">
            {/* What You'll Learn */}
            <motion.div
              className="bg-white dark:bg-[#1a1a3e] rounded-2xl p-8 mb-8 border border-[#e0e0ff] dark:border-[#252550]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline text-2xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] mb-6">
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learns.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheckCircle
                      size={16}
                      className="text-[#006a35] flex-shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-[#282b51]/80 dark:text-[#f0f0ff]/80 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Curriculum */}
            <motion.div
              className="bg-white dark:bg-[#1a1a3e] rounded-2xl p-8 mb-8 border border-[#e0e0ff] dark:border-[#252550]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-2xl font-extrabold text-[#282b51] dark:text-[#f0f0ff]">
                  Course Curriculum
                </h2>
                <button
                  onClick={() =>
                    setOpenSections(
                      openSections.length === course.curriculum.length
                        ? []
                        : course.curriculum.map((_, i) => i)
                    )
                  }
                  className="text-[#0050d5] dark:text-[#7b9cff] text-sm font-semibold hover:underline"
                >
                  {openSections.length === course.curriculum.length
                    ? "Collapse all"
                    : "Expand all"}
                </button>
              </div>

              <p className="text-sm text-[#282b51]/60 dark:text-[#f0f0ff]/60 mb-6">
                {course.curriculum.length} sections •{" "}
                {course.curriculum.reduce((a, s) => a + s.lessons, 0)} lessons
              </p>

              <div className="flex flex-col gap-3">
                {course.curriculum.map((section, i) => (
                  <div
                    key={i}
                    className="border border-[#e0e0ff] dark:border-[#252550] rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(i)}
                      className="w-full flex items-center justify-between p-4 bg-[#f8f5ff] dark:bg-[#252550] hover:bg-[#f1efff] dark:hover:bg-[#2a2560] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {openSections.includes(i) ? (
                          <HiChevronUp className="text-[#0050d5]" />
                        ) : (
                          <HiChevronDown className="text-[#0050d5]" />
                        )}
                        <span className="font-bold text-sm text-[#282b51] dark:text-[#f0f0ff] text-left">
                          {section.title}
                        </span>
                      </div>
                      <span className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50 flex-shrink-0 ml-4">
                        {section.lessons} lessons • {section.duration}
                      </span>
                    </button>

                    {openSections.includes(i) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {section.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-center justify-between px-6 py-3 border-t border-[#e0e0ff] dark:border-[#252550]"
                          >
                            <div className="flex items-center gap-3">
                              {item.free ? (
                                <FaPlay
                                  size={10}
                                  className="text-[#0050d5] flex-shrink-0"
                                />
                              ) : (
                                <FaLock
                                  size={10}
                                  className="text-[#282b51]/30 dark:text-[#f0f0ff]/30 flex-shrink-0"
                                />
                              )}
                              <span
                                className={`text-sm ${
                                  item.free
                                    ? "text-[#0050d5] dark:text-[#7b9cff] font-semibold"
                                    : "text-[#282b51]/70 dark:text-[#f0f0ff]/70"
                                }`}
                              >
                                {item.title}
                              </span>
                              {item.free && (
                                <span className="text-xs bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] px-2 py-0.5 rounded-full">
                                  Preview
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">
                              {item.duration}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Instructor */}
            <motion.div
              className="bg-white dark:bg-[#1a1a3e] rounded-2xl p-8 border border-[#e0e0ff] dark:border-[#252550]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline text-2xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] mb-6">
                Meet your instructor
              </h2>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0050d5] to-[#7b9cff] flex items-center justify-center text-white font-extrabold text-2xl flex-shrink-0">
                  {course.instructor.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-xl font-extrabold text-[#282b51] dark:text-[#f0f0ff]">
                    {course.instructor.name}
                  </h3>
                  <p className="text-[#0050d5] dark:text-[#7b9cff] text-sm font-semibold mb-4">
                    {course.instructor.title}
                  </p>
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70">
                      <FaStar className="text-[#f97316]" size={14} />
                      <span>{course.instructor.rating} Rating</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70">
                      <FaUsers className="text-[#0050d5]" size={14} />
                      <span>{course.instructor.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70">
                      <MdOndemandVideo className="text-[#006a35]" size={14} />
                      <span>{course.instructor.courses} Courses</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70 leading-relaxed">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-28">
              <motion.div
                className="bg-white dark:bg-[#1a1a3e] rounded-2xl p-6 shadow-xl border border-[#e0e0ff] dark:border-[#252550]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Price */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-extrabold text-4xl text-[#282b51] dark:text-[#f0f0ff]">
                    {course.price}
                  </span>
                  <span className="text-[#282b51]/40 dark:text-[#f0f0ff]/40 line-through text-lg">
                    {course.originalPrice}
                  </span>
                  <span className="bg-[#f97316] text-white text-xs font-bold px-2 py-1 rounded-lg">
                    {course.discount}
                  </span>
                </div>
                <p className="text-xs text-red-500 font-semibold mb-6">
                  ⏰ 2 days left at this price!
                </p>

                {/* Buttons */}
                <button className="w-full bg-[#f97316] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#ea6c0a] active:scale-95 transition-all mb-3">
                  Enroll Now
                </button>
                <button className="w-full bg-[#0050d5] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0040b5] active:scale-95 transition-all mb-6">
                  Add to Cart
                </button>

                {/* Includes */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-[#282b51] dark:text-[#f0f0ff] mb-4">
                    This course includes:
                  </p>
                  <div className="flex flex-col gap-3">
                    {course.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70">
                        <span className="text-[#0050d5] dark:text-[#7b9cff]">
                          {item.icon}
                        </span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-[#e0e0ff] dark:border-[#252550] mb-6" />

                {/* Share */}
                <button className="w-full text-[#0050d5] dark:text-[#7b9cff] font-semibold text-sm hover:underline mb-6">
                  Share this course
                </button>

                {/* Team Training */}
                <div className="bg-[#f1efff] dark:bg-[#252550] rounded-xl p-4 text-center">
                  <p className="text-sm font-bold text-[#282b51] dark:text-[#f0f0ff] mb-1">
                    Training for a team?
                  </p>
                  <p className="text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60 mb-3">
                    Get this course plus 12,000+ of our top courses for your team.
                  </p>
                  <button className="text-[#0050d5] dark:text-[#7b9cff] font-bold text-sm hover:underline">
                    EduBridge for Business
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
