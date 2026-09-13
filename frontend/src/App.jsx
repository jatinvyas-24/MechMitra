import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BatteryAssistance from "./components/BatteryAssistance";
import BikeRepair from "./components/BikeRepair";
import CarRepair from "./components/CarRepair";
import EngineRepair from "./components/EngineRepair";
import TyreRepair from "./components/TyreRepair";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services/battery-assistance" element={<BatteryAssistance />} />
      <Route path="/services/bike-repair" element={<BikeRepair />} />
      <Route path="/services/car-repair" element={<CarRepair />} />
      <Route path="/services/engine-repair" element={<EngineRepair />} />
      <Route path="/services/tyre-repair" element={<TyreRepair />} />

    </Routes>
  );
}

export default App;
