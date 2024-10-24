import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TutorProfile from "./pages/TutorProfile";
import Subjects from "./pages/Subjects";
import Authentication from "./pages/Authentication";
import { UserProvider } from "./context/UserContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorprofile" element={<TutorProfile />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;