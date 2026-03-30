import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<div className="pt-24 px-10 text-[#282b51] dark:text-[#f0f0ff]">Home Page Coming Soon</div>} />
      </Routes>
    </>
  );
}

export default App;
