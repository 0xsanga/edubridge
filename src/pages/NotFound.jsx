import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="pt-20 min-h-screen bg-[#f8f5ff] dark:bg-[#0D0D2B] flex items-center justify-center px-10">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Big 404 */}
        <div className="relative mb-8">
          <p className="font-headline text-[180px] font-extrabold text-[#e0e0ff] dark:text-[#1a1a3e] leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-6xl">🎓</p>
          </div>
        </div>

        {/* Message */}
        <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-[#282b51] dark:text-[#f0f0ff] mb-4">
          Looks like this lesson doesn't exist
        </h1>
        <p className="text-[#282b51]/60 dark:text-[#f0f0ff]/60 text-lg mb-10 leading-relaxed">
          The page you're looking for may have been moved, deleted, or never
          existed. Let's get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-[#0050d5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0040b5] active:scale-95 transition-all"
          >
            Back to Home
          </Link>
          <Link
            to="/courses"
            className="border-2 border-[#0050d5] text-[#0050d5] dark:text-[#7b9cff] dark:border-[#7b9cff] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0050d5] hover:text-white dark:hover:bg-[#7b9cff] dark:hover:text-[#0D0D2B] transition-all"
          >
            Explore Courses
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
