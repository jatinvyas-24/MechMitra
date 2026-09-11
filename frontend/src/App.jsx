import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
