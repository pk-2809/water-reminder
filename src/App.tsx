import './App.css';
import { Home } from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Otp } from "./pages/Otp/Otp";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { WaterReminder } from "./pages/WaterReminder/WaterReminder";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/otp" element={<Otp />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/water-reminder" element={<WaterReminder />}></Route>
    </Routes>
  );
}

export default App;
