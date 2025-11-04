// ✅ App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Students from "./pages/Students"; // page for student management
import ApiData from "./pages/ApiData";

// Student Dashboard
import StudentDashboard from "../student-dashboard/src/StudentDashboard.jsx";

export default function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="p-4 bg-gray-200 flex justify-center gap-6 shadow-md">
        <Link to="/" className="font-semibold hover:text-blue-600">
          Home
        </Link>
        <Link to="/main-dashboard" className="font-semibold hover:text-blue-600">
          Main Dashboard
        </Link>
        <Link to="/tasks" className="font-semibold hover:text-blue-600">
          Tasks
        </Link>
        <Link to="/students" className="font-semibold hover:text-blue-600">
          Students
        </Link>
        <Link to="/api" className="font-semibold hover:text-blue-600">
          API Data
        </Link>
      </nav>

      {/* Routes */}
      <Layout>
        <Routes>
          {/* Student Dashboard shows on home */}
          <Route path="/" element={<StudentDashboard />} />

          {/* Main dashboard */}
          <Route path="/main-dashboard" element={<Dashboard />} />

          {/* Tasks page (integrates backend) */}
          <Route path="/tasks" element={<Tasks />} />

          {/* Students page (integrates backend) */}
          <Route path="/students" element={<Students />} />

          {/* API Data page */}
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </Layout>
    </>
  );
}
