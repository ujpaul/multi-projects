import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Pharmacist from "./components/Pharmacist";
import Physician from "./components/Physician";
import Patient from "./components/Patient";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/physician" element={<Physician />} />
        <Route path="/pharmacist" element={<Pharmacist />} />
      </Routes>
    </div>
  );
}

export default App;
