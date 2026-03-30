import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar, FaClock, FaUsers } from "react-icons/fa";
import { HiSearch, HiAdjustments } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const categories = ["All", "Technology", "Design & Creative", "Business Management", "Personal Growth"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const courses = [
  {
    id: 1,
    badge: "Best Seller",
    badgeColor: "bg-[#0050d5] text-white",
    title: "Mastering Digital Experience: User Research & UI Design",
    desc: "Learn the fundamentals of UX design from industry leaders at...",
    instructor: "Sarah Sterling",
    rating: 4.9,
    reviews: "12.4k",
    students: "24.5k",
    price: "$89.99",
    level: "Beginner",
    category: "Design & Creative",
    duration: "18h",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop",
  },
  {
    id: 2,
    badge: "New Release",
    badgeColor: "bg-[#f97316] text-white",
    title: "Advanced Data Analysis with Python and SQL",
    desc: "Dive deep into complex datasets and learn to build predictive...",
    instructor: "Dr. James Chen",
    rating: 4.8,
    reviews: "8.2k",
    students: "15.1k",
    price: "$124.99",
    level: "Intermediate",
    category: "Technology",
    duration: "24h",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
  },
  {
    id: 3,
    badge: "Trending",
    badgeColor: "bg-[#006a35] text-white",
    title: "Leadership Fundamentals for New Managers",
    desc: "Master the essential skills needed to lead teams and drive...",
    instructor: "Marcus Aurelius",
    rating: 4.7,
    reviews: "3.1k",
    students: "5.2k",
    price: "$59.99",
    level: "Beginner",
    category: "Business Management",
    duration: "12h",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
  },
  {
    id: 4,
    badge: "Popular",
    badgeColor: "bg-[#7b1fa2] text-white",
    title: "Generative AI for Product Designers",
    desc: "Master the art of using AI tools to supercharge your design...",
    instructor: "David Chen",
    rating: 4.9,
    reviews: "9.1k",
    students: "18.3k",
    price: "$99.99",
    level: "Advanced",
    category: "Technology",
    duration: "20h",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop",
  },
  {
    id: 5,
    badge: "New Release",
    badgeColor: "bg-[#f97316] text-white",
    title: "Mindfulness & Peak Performance",
    desc: "Unlock your full potential through science-backed mindfulness...",
    instructor: "Dr. Priya Sharma",
    rating: 4.6,
    reviews: "2.8k",
    students: "7.4k",
    price: "$49.99",
    level: "Beginner",
    category: "Personal Growth",
    duration: "8h",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=240&fit=crop",
  },
  {
    id: 6,
    badge: "Best Seller",
    badgeColor: "bg-[#0050d5] text-white",
    title: "Brand Strategy & Visual Identity Design",
    desc: "Build powerful brands from scratch with proven frameworks...",
    instructor: "Elena Rodriguez",
    rating: 4.8,
    reviews: "6.5k",
    students: "11.2k",
    price: "$79.99",
    level: "Intermediate",
    category: "Design & Creative",
    duration: "16h",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("Most Popular");

  const filtered = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === "All" || c.category === selectedCategory;
    const matchLevel = selectedLevel === "All" || c.level === selectedLevel;
    const matchRating = c.rating >= minRating;
    return matchSearch && matchCategory && matchLevel && matchRating;
  });

  return (
    <main className="pt-20 min-h-screen bg-[#f8f5ff] dark:bg-[#0D0D2B]">
      {/* Search Bar */}
      <section className="px-10 py-12 bg-[#f1efff] dark:bg-[#0a0a1f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 bg-white dark:bg-[#1a1a3e] rounded-2xl px-6 py-4 shadow-sm border border-[#e0e0ff] dark:border-[#252550]">
            <HiSearch size={22} className="text-[#0050d5] flex-shrink-0" />
            <input
              type="text"
              placeholder="What would you like to learn today?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#282b51] dark:text-[#f0f0ff] placeholder:text-[#282b51]/40 dark:placeholder:text-[#f0f0ff]/40 text-lg"
            />
            {search && (
              <button onClick={() => setSearch("")}>
                <MdClose size={20} className="text-[#282b51]/40 dark:text-[#f0f0ff]/40" />
              </button>
            )}
            <button className="bg-[#0050d5] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0040b5] transition-all">
              Find Courses
            </button>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["Artificial Intelligence", "UX Design", "Business Strategy", "Data Science"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearch(tag)}
                className="px-4 py-1.5 rounded-full border border-[#e0e0ff] dark:border-[#252550] text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70 hover:border-[#0050d5] hover:text-[#0050d5] transition-all bg-white dark:bg-[#1a1a3e]"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-10 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-4 flex items-center gap-2">
                <HiAdjustments size={18} className="text-[#0050d5]" />
                Categories
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex items-center gap-3 text-sm py-2 px-3 rounded-xl transition-all ${
                      selectedCategory === cat
                        ? "bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] font-semibold"
                        : "text-[#282b51]/70 dark:text-[#f0f0ff]/70 hover:bg-[#f1efff] dark:hover:bg-[#1a1a3e]"
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                      selectedCategory === cat
                        ? "border-[#0050d5] bg-[#0050d5]"
                        : "border-[#282b51]/30 dark:border-[#f0f0ff]/30"
                    }`} />
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="mb-8">
              <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-4">
                Difficulty Level
              </h3>
              <div className="flex flex-col gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`flex items-center gap-3 text-sm py-2 px-3 rounded-xl transition-all ${
                      selectedLevel === level
                        ? "bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] font-semibold"
                        : "text-[#282b51]/70 dark:text-[#f0f0ff]/70 hover:bg-[#f1efff] dark:hover:bg-[#1a1a3e]"
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                      selectedLevel === level
                        ? "border-[#0050d5] bg-[#0050d5]"
                        : "border-[#282b51]/30 dark:border-[#f0f0ff]/30"
                    }`} />
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Minimum Rating */}
            <div className="mb-8">
              <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-4">
                Minimum Rating
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <FaStar size={14} className="text-[#f97316]" />
                <span className="text-sm font-bold text-[#282b51] dark:text-[#f0f0ff]">
                  {minRating > 0 ? `${minRating}+` : "Any"}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-full accent-[#0050d5]"
              />
              <div className="flex justify-between text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50 mt-1">
                <span>0 Stars</span>
                <span>5 Stars</span>
              </div>
            </div>

            {/* Upgrade Card */}
            <div className="bg-[#0D0D2B] rounded-2xl p-6">
              <h3 className="font-headline font-bold text-white mb-2">
                Unlock Premium Courses
              </h3>
              <p className="text-white/60 text-xs mb-4 leading-relaxed">
                Get unlimited access to 10,000+ expert-led classes with
                EduBridge Pro.
              </p>
              <button className="w-full bg-[#f97316] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-[#ea6c0a] transition-all">
                Upgrade Now
              </button>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-[#282b51]/70 dark:text-[#f0f0ff]/70 text-sm">
                Showing{" "}
                <span className="font-bold text-[#282b51] dark:text-[#f0f0ff]">
                  {filtered.length}
                </span>{" "}
                results
                {selectedCategory !== "All" && ` for "${selectedCategory}"`}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-[#1a1a3e] border border-[#e0e0ff] dark:border-[#252550] text-[#282b51] dark:text-[#f0f0ff] text-sm rounded-xl px-4 py-2 outline-none"
              >
                {["Most Popular", "Highest Rated", "Newest", "Price: Low to High"].map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Cards */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white dark:bg-[#1a1a3e] rounded-2xl overflow-hidden shadow-sm border border-[#e0e0ff] dark:border-[#252550]"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-44 object-cover"
                      />
                      <span className={`absolute top-3 left-3 ${course.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                        {course.badge}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex gap-2 mb-3">
                        <span className="text-xs bg-[#e0e0ff] dark:bg-[#252550] text-[#0050d5] dark:text-[#7b9cff] px-2 py-0.5 rounded-full font-semibold">
                          {course.level}
                        </span>
                        <span className="text-xs bg-[#f1efff] dark:bg-[#252550] text-[#282b51]/60 dark:text-[#f0f0ff]/60 px-2 py-0.5 rounded-full">
                          {course.category}
                        </span>
                      </div>

                      <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-2 leading-snug line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50 mb-4 line-clamp-2">
                        {course.desc}
                      </p>

                      <p className="text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60 mb-4">
                        {course.instructor}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <FaStar size={12} className="text-[#f97316]" />
                          <span className="text-sm font-bold text-[#282b51] dark:text-[#f0f0ff]">
                            {course.rating}
                          </span>
                          <span className="text-xs text-[#282b51]/40 dark:text-[#f0f0ff]/40">
                            ({course.reviews})
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">
                          <FaUsers size={10} />
                          {course.students}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-[#0050d5] dark:text-[#7b9cff] text-lg">
                          {course.price}
                        </span>
                        <Link
                          to={`/courses/${course.id}`}
                          className="bg-[#f97316] text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-[#ea6c0a] transition-all"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-4xl mb-4">🔍</p>
                <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-2">
                  No courses found
                </h3>
                <p className="text-[#282b51]/50 dark:text-[#f0f0ff]/50 text-sm">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setSelectedLevel("All");
                    setMinRating(0);
                  }}
                  className="mt-4 text-[#0050d5] font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
