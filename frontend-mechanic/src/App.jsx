import { Route, Routes } from "react-router-dom";
import Earning from "./pages/Earning";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/earning" element={<Earning />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
