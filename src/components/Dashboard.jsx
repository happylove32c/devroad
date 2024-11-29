import React, { useState } from "react";

const Dashboard = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("dashboard");

  // State to control the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close Sidebar
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-[#1b222d] text-white flex">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#263041] p-6 flex flex-col gap-6 fixed md:relative z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out h-screen`}
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
          <a
            href="#"
            className="text-[#ed6054] px-4 py-2 rounded-md hover:bg-[#1b222d] transition"
          >
            Log Out
          </a>
        </nav>
      </aside>

      {/* Overlay (Visible when sidebar is open on small screens) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
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
        <header className="bg-[#263041] p-4 flex justify-between items-center">
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
          <h1 className="text-2xl font-bold">Welcome Back, User!</h1>
          <button className="bg-[#ed6054] px-4 py-2 rounded-md hover:bg-[#d95448] transition">
            View profile
          </button>
        </header>

        {/* Conditional Rendering Based on Active Tab */}
        <main className="p-6">
          {activeTab === "dashboard" && (
            <div>
              {/* Dashboard Tab */}
              <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Learning Progress Widget */}
                <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
                  <h2 className="text-xl font-bold">Learning Progress</h2>
                  <div className="w-full h-4 bg-[#1b222d] rounded-full">
                    <div
                      className="bg-[#ed6054] h-4 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <p>70% Complete</p>
                </div>

                {/* Current Course Widget */}
                <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
                  <h2 className="text-xl font-bold">Current Course</h2>
                  <p>JavaScript Fundamentals</p>
                  <button className="bg-[#ed6054] px-4 py-2 rounded-md hover:bg-[#d95448] transition">
                    Continue Course
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "progress" && (
            <div>
              {/* Progress Tracker Tab */}
              <h2 className="text-3xl font-bold mb-6">Progress Tracker</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Progress Widget */}
                <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
                  <h2 className="text-xl font-bold">Learning Progress</h2>
                  <div className="w-full h-4 bg-[#1b222d] rounded-full">
                    <div
                      className="bg-[#ed6054] h-4 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <p>70% Complete</p>
                </div>

                {/* Next Steps Widget */}
                <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
                  <h2 className="text-xl font-bold">Next Steps</h2>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Review JavaScript Fundamentals</li>
                    <li>Complete React Components</li>
                    <li>Build a Portfolio Project</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              {/* Settings Tab */}
              <h2 className="text-3xl font-bold mb-6">Settings</h2>

              <div className="grid grid-cols-1 gap-6">
                {/* Update Profile Widget */}
                <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
                  <h2 className="text-xl font-bold">Update Profile</h2>
                  <button className="bg-[#ed6054] px-4 py-2 rounded-md hover:bg-[#d95448] transition">
                    Edit Profile
                  </button>
                </div>

                {/* Change Password Widget */}
                <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
                  <h2 className="text-xl font-bold">Change Password</h2>
                  <button className="bg-[#ed6054] px-4 py-2 rounded-md hover:bg-[#d95448] transition">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
