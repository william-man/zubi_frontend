import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TutorProfile from "./pages/TutorProfile";
import Authentication from "./pages/Authentication"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorprofile" element={<TutorProfile />} />{" "}
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
