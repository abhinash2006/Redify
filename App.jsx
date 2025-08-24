import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Landing";
import Explore from "./pages/Explore";
import Workspace from "./pages/Workspace";
import Assistant from "./pages/Assistant";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const location = useLocation();

  // Hide Navbar on login and signup pages
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="bg-[#f5f1e3] min-h-screen">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
