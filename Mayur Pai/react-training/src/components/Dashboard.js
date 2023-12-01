import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Overview from "./Overview";
import Reports from "./Reports";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard/reports">Reports</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
