import "./App.css";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ClassDetails from "./components/ClassDetails";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <div className="App font-Arial">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classdetails/:id" element={<ClassDetails />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </div>
  );
}

export default App;
