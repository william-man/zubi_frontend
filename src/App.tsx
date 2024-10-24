import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TutorProfile from "./pages/TutorProfile";
import Subjects from "./pages/Subjects";
import Authentication from "./pages/Authentication";
import { UserProvider } from "./context/UserContext";
import Tutors from "./pages/Tutors";
import FAQ from "./pages/FAQ";
import Partners from "./pages/Partners";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorprofile" element={<TutorProfile />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;