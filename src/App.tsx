import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TutorProfile from "./pages/TutorProfile";
import Subjects from "./pages/Subjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorprofile" element={<TutorProfile />} />{" "}
        <Route path="/subjects" element={<Subjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
