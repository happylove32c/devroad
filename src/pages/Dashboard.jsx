import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom" // Import useNavigate
import { UserContext } from "../myContext/context"
import { Auth } from "@supabase/auth-ui-react" 
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  "https://jrbdjqslhqvgbweymfcz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYmRqcXNsaHF2Z2J3ZXltZmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDE4NTMsImV4cCI6MjA0ODcxNzg1M30.peVTMjA8RH27jJWfeiw63eQcYGWqaLgi3oJdt0nvF-w"
);

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext); // Added setUser to update the context
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Handle Logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut(); // Supabase logout method
    if (error) {
      console.error("Error logging out:", error.message);
      return;
    }
    setUser(null); // Clear user from context
    navigate("/"); // Redirect to landing page
  };

  return (
    <div className="min-h-screen bg-[#1b222d] text-white">
      {user ? (
        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`w-64 bg-[#263041] p-6 flex flex-col gap-6 fixed md:sticky z-50 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out h-screen top-0 left-0`}
          >
            <div className="flex items-center gap-4">
              <img
                src="https://www.svgrepo.com/show/286847/road-way.svg"
                alt="Logo"
                className="h-10"
              />
              <h1 className="text-2xl font-bold">devroad</h1>
            </div>
            <nav className="flex flex-col gap-4 mt-6">
              <a
                href="#"
                className={`text-[#ed6054] px-4 py-2 rounded-md hover:bg-[#1b222d] transition ${
                  activeTab === "dashboard" ? "bg-[#1b222d]" : ""
                }`}
                onClick={() => setActiveTab("dashboard")}
              >
                Dashboard
              </a>
              <a
                href="#"
                className={`text-[#ed6054] px-4 py-2 rounded-md hover:bg-[#1b222d] transition ${
                  activeTab === "progress" ? "bg-[#1b222d]" : ""
                }`}
                onClick={() => setActiveTab("progress")}
              >
                Progress Tracker
              </a>
              <a
                href="#"
                className={`text-[#ed6054] px-4 py-2 rounded-md hover:bg-[#1b222d] transition ${
                  activeTab === "settings" ? "bg-[#1b222d]" : ""
                }`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="text-[#ed6054] px-4 py-2 rounded-md hover:bg-[#1b222d] transition text-left"
              >
                Log Out
              </button>
            </nav>
          </aside>

          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeSidebar}
            ></div>
          )}

          {/* Main Content */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "ml-0" : ""
            }`}
          >
            {/* Header */}
            <header className="bg-[#263041] p-4 flex justify-between items-center sticky top-0 z-30">
              <button
                onClick={toggleSidebar}
                className="md:hidden text-[#ed6054] p-3 rounded-md"
                aria-label="Toggle Sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  fill="#ed6054"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="#ed6054" strokeWidth="2" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold">Welcome Back, {user?.name}</h1>
              <button className="bg-[#ed6054] px-4 py-2 rounded-md hover:bg-[#d95448] transition">
                View profile
              </button>
            </header>

            {/* Content Based on Active Tab */}
            <main className="p-6">
              {activeTab === "dashboard" && <h2 className="text-3xl">Dashboard Content</h2>}
              {activeTab === "progress" && <h2 className="text-3xl">Progress Content</h2>}
              {activeTab === "settings" && <h2 className="text-3xl">Settings Content</h2>}
            </main>
          </div>
        </div>
      ) : (
<div className="flex items-center justify-center min-h-screen">
  <div className="bg-[#263041] shadow-lg border border-gray-700 rounded-lg p-8 text-center w-full max-w-md">
    <h2 className="text-2xl font-bold text-[#ed6054] mb-4">Welcome to DevRoad</h2>
    <p className="text-gray-300 mb-6">Sign in to continue</p>
    <Auth supabaseClient={supabase} providers={["google"]} appearance={{ theme: ThemeSupa }} theme="dark" />
  </div>
</div>

      )}
    </div>
  );
};

export default Dashboard;
