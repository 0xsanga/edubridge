import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar, FaUsers } from "react-icons/fa";
import { MdOndemandVideo, MdSearch } from "react-icons/md";

const instructors = [
  {
    id: 1,
    initials: "SS",
    name: "Sarah Sterling",
    title: "UX Design Lead",
    company: "Former Head of Design at TechGlobal",
    rating: 4.9,
    students: "98.4k",
    courses: 8,
    specialty: "Design & Creative",
    specialtyColor: "bg-[#fff3e0] text-[#f97316]",
    bio: "15+ years leading design teams at Fortune 500 companies. Specialist in human-centered design and design systems.",
    avatarBg: "from-[#f97316] to-[#fbbf24]",
  },
  {
    id: 2,
    initials: "JC",
    name: "Dr. James Chen",
    title: "Data Scientist",
    company: "Principal Researcher at DataCore Labs",
    rating: 4.8,
    students: "72.1k",
    courses: 12,
    specialty: "Technology",
    specialtyColor: "bg-[#e0e0ff] text-[#0050d5]",
    bio: "PhD in Computer Science from MIT. Expert in machine learning, data analysis, and Python programming.",
    avatarBg: "from-[#0050d5] to-[#7b9cff]",
  },
  {
    id: 3,
    initials: "ER",
    name: "Elena Rodriguez",
    title: "Brand Strategist",
    company: "Founder of BrandLab Agency",
    rating: 4.8,
    students: "54.3k",
    courses: 6,
    specialty: "Business Management",
    specialtyColor: "bg-[#e8f5e9] text-[#006a35]",
    bio: "Award-winning brand strategist who has worked with over 200 companies across 30 countries.",
    avatarBg: "from-[#006a35] to-[#6bfe9c]",
  },
  {
    id: 4,
    initials: "DC",
    name: "David Chen",
    title: "AI Product Designer",
    company: "Former Product Lead at OpenMind AI",
    rating: 4.9,
    students: "88.7k",
    courses: 9,
    specialty: "Technology",
    specialtyColor: "bg-[#e0e0ff] text-[#0050d5]",
    bio: "Pioneer in AI-assisted design workflows. Shipped 50+ products used by millions of users worldwide.",
    avatarBg: "from-[#7b1fa2] to-[#ce93d8]",
  },
  {
    id: 5,
    initials: "PS",
    name: "Dr. Priya Sharma",
    title: "Mindfulness Coach",
    company: "Founder of MindfulPeak Institute",
    rating: 4.6,
    students: "41.2k",
    courses: 5,
    specialty: "Personal Growth",
    specialtyColor: "bg-[#f3e5f5] text-[#7b1fa2]",
    bio: "Clinical psychologist and mindfulness expert. Helped thousands of professionals unlock peak performance.",
    avatarBg: "from-[#f97316] to-[#fbbf24]",
  },
  {
    id: 6,
    initials: "MT",
    name: "Marcus Thorne",
    title: "Business Strategist",
    company: "Senior Partner at GlobalStrategy Group",
    rating: 4.7,
    students: "63.5k",
    courses: 7,
    specialty: "Business Management",
    specialtyColor: "bg-[#e8f5e9] text-[#006a35]",
    bio: "20+ years of experience in global business strategy. Advised Fortune 100 companies across 5 continents.",
    avatarBg: "from-[#0050d5] to-[#006a35]",
  },
];

const specialties = ["All", "Technology", "Design & Creative", "Business Management", "Personal Growth"];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Instructors() {
  const [search, setSearch] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filtered = instructors.filter((inst) => {
    const matchSearch =
      inst.name.toLowerCase().includes(search.toLowerCase()) ||
      inst.title.toLowerCase().includes(search.toLowerCase());
    const matchSpecialty =
      selectedSpecialty === "All" || inst.specialty === selectedSpecialty;
    return matchSearch && matchSpecialty;
  });

  return (
    <main className="pt-20 min-h-screen bg-[#f8f5ff] dark:bg-[#0D0D2B]">
      {/* Header */}
      <section className="px-10 py-16 bg-[#f1efff] dark:bg-[#0a0a1f]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0e0ff] dark:bg-[#1a1a3e] text-[#0050d5] dark:text-[#7b9cff] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f97316] inline-block" />
              World-Class Instructors
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] mb-4">
              Learn from the{" "}
              <span className="text-[#0050d5]">best in the field</span>
            </h1>
            <p className="text-[#282b51]/60 dark:text-[#f0f0ff]/60 text-lg max-w-xl mx-auto mb-10">
              Our instructors are industry veterans, researchers, and
              practitioners who bring real-world expertise to every lesson.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto flex items-center gap-4 bg-white dark:bg-[#1a1a3e] rounded-2xl px-6 py-4 shadow-sm border border-[#e0e0ff] dark:border-[#252550]">
              <MdSearch size={22} className="text-[#0050d5] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search instructors by name or expertise..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[#282b51] dark:text-[#f0f0ff] placeholder:text-[#282b51]/40 dark:placeholder:text-[#f0f0ff]/40"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="px-10 py-6 bg-[#f8f5ff] dark:bg-[#0D0D2B] border-b border-[#e0e0ff] dark:border-[#1a1a3e]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedSpecialty === spec
                  ? "bg-[#0050d5] text-white"
                  : "bg-white dark:bg-[#1a1a3e] text-[#282b51]/70 dark:text-[#f0f0ff]/70 border border-[#e0e0ff] dark:border-[#252550] hover:border-[#0050d5] hover:text-[#0050d5]"
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </section>

      {/* Instructor Cards */}
      <section className="px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-[#282b51]/60 dark:text-[#f0f0ff]/60 mb-8">
            Showing{" "}
            <span className="font-bold text-[#282b51] dark:text-[#f0f0ff]">
              {filtered.length}
            </span>{" "}
            instructors
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((inst, i) => (
                <motion.div
                  key={inst.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-[#1a1a3e] rounded-2xl p-8 shadow-sm border border-[#e0e0ff] dark:border-[#252550] flex flex-col gap-5"
                >
                  {/* Avatar & Name */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${inst.avatarBg} flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0`}
                    >
                      {inst.initials}
                    </div>
                    <div>
                      <h3 className="font-headline font-extrabold text-[#282b51] dark:text-[#f0f0ff]">
                        {inst.name}
                      </h3>
                      <p className="text-sm text-[#0050d5] dark:text-[#7b9cff] font-semibold">
                        {inst.title}
                      </p>
                      <p className="text-xs text-[#282b51]/50 dark:text-[#f0f0ff]/50">
                        {inst.company}
                      </p>
                    </div>
                  </div>

                  {/* Specialty Tag */}
                  <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${inst.specialtyColor}`}>
                    {inst.specialty}
                  </span>

                  {/* Bio */}
                  <p className="text-sm text-[#282b51]/70 dark:text-[#f0f0ff]/70 leading-relaxed">
                    {inst.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#e0e0ff] dark:border-[#252550]">
                    <div className="flex items-center gap-1 text-sm">
                      <FaStar size={12} className="text-[#f97316]" />
                      <span className="font-bold text-[#282b51] dark:text-[#f0f0ff]">
                        {inst.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60">
                      <FaUsers size={10} />
                      {inst.students} students
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#282b51]/60 dark:text-[#f0f0ff]/60">
                      <MdOndemandVideo size={12} />
                      {inst.courses} courses
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/courses"
                    className="w-full text-center bg-[#0050d5] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#0040b5] active:scale-95 transition-all"
                  >
                    View Courses
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="font-headline font-bold text-[#282b51] dark:text-[#f0f0ff] mb-2">
                No instructors found
              </h3>
              <p className="text-[#282b51]/50 dark:text-[#f0f0ff]/50 text-sm">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => { setSearch(""); setSelectedSpecialty("All"); }}
                className="mt-4 text-[#0050d5] font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
