import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
