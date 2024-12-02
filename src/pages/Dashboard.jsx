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
        <p className="text-gray-300 mb-4">Master the fundamentals of JavaScript before diving deeper into advanced topics!</p>
        <button className="bg-[#ed6054] px-4 py-2 rounded-md hover:bg-[#d95448] transition">
          Continue Course
        </button>
        <p className="mt-2 text-gray-500">Next Lesson: Loops and Arrays</p>
      </div>

      {/* Video Progress Widget */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h2 className="text-xl font-bold">Video Progress</h2>
        <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/07/e0/60/07e06042ca853939e942e707f81dd9b7.jpg"
            alt="Video Preview"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mt-4 w-full h-4 bg-[#1b222d] rounded-full">
          <div
            className="bg-[#ed6054] h-4 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
        <p className="mt-2 text-gray-300">45% Video Progress</p>
      </div>

      {/* Quote Section Widget */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h2 className="text-xl font-bold">Quote of the Day</h2>
        <p className="text-gray-300 italic">"The best way to predict the future is to create it." - Peter Drucker</p>
      </div>

      {/* Try Later Section */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h2 className="text-xl font-bold">Try Later</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Advanced React Techniques</span>
            <button className="bg-[#d95448] text-white px-3 py-1 rounded-md">Try Later</button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Building APIs with Node.js</span>
            <button className="bg-[#d95448] text-white px-3 py-1 rounded-md">Try Later</button>
          </div>
        </div>
      </div>

      {/* Additional Section - Featured Courses */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h2 className="text-xl font-bold">Featured Courses</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">React for Beginners</span>
            <button className="bg-[#ed6054] text-white px-3 py-1 rounded-md">Enroll</button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Node.js and Express</span>
            <button className="bg-[#ed6054] text-white px-3 py-1 rounded-md">Enroll</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


{activeTab === "progress" && (
  <div>
    <h2 className="text-3xl font-bold mb-6">Progress Tracker</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Learning Progress */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold">Learning Progress</h3>
        <div className="relative w-full h-4 bg-[#1b222d] rounded-full">
          <div className="bg-[#ed6054] h-4 rounded-full" style={{ width: "70%" }}></div>
        </div>
        <div className="mt-2 text-center">
          <span className="text-xl font-bold text-[#ed6054]">70% Complete</span>
        </div>

        {/* Circular Progress Bar */}
        <div className="relative w-24 h-24 mx-auto mt-4">
          <svg className="absolute w-full h-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <circle className="text-[#1b222d]" strokeWidth="4" fill="none" cx="18" cy="18" r="16"></circle>
            <circle className="text-[#ed6054] stroke-[#ed6054]" strokeWidth="4" fill="none" cx="18" cy="18" r="16" strokeDasharray="100, 100" strokeDashoffset="30"></circle>
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <span className="text-xl font-bold text-[#ed6054]">70%</span>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold">Next Steps</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Review JavaScript Basics</li>
          <li>Complete React Components</li>
          <li>Build a Portfolio Project</li>
        </ul>
        <button className="mt-4 bg-[#ed6054] px-4 py-2 rounded-md hover:bg-[#d95448] transition">Mark as Complete</button>
      </div>

      {/* Skill Progress Tracker */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold">Skill Progress Tracker</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">HTML</span>
            <div className="relative w-24 h-4 bg-[#1b222d] rounded-full">
              <div className="bg-[#ed6054] h-4 rounded-full" style={{ width: "80%" }}></div>
            </div>
            <span className="text-gray-300">80%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">CSS</span>
            <div className="relative w-24 h-4 bg-[#1b222d] rounded-full">
              <div className="bg-[#ed6054] h-4 rounded-full" style={{ width: "60%" }}></div>
            </div>
            <span className="text-gray-300">60%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">JavaScript</span>
            <div className="relative w-24 h-4 bg-[#1b222d] rounded-full">
              <div className="bg-[#ed6054] h-4 rounded-full" style={{ width: "70%" }}></div>
            </div>
            <span className="text-gray-300">70%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">React</span>
            <div className="relative w-24 h-4 bg-[#1b222d] rounded-full">
              <div className="bg-[#ed6054] h-4 rounded-full" style={{ width: "50%" }}></div>
            </div>
            <span className="text-gray-300">50%</span>
          </div>
        </div>
      </div>

      {/* Milestone Achievements */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold">Milestone Achievements</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">JavaScript Basics Complete</span>
            <span className="text-green-500 font-bold">✔</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Calculator App Built</span>
            <span className="text-green-500 font-bold">✔</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">DOM Manipulation Mastered</span>
            <span className="text-yellow-400 font-bold">✔</span>
          </div>
        </div>
      </div>

      {/* Learning Calendar */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold">Learning Schedule</h3>
        <div className="grid grid-cols-7 gap-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={index} className="text-center text-gray-300">{day}</div>
          ))}
          {[...Array(15)].map((_, index) => (
            <div key={index} className="text-center text-gray-300">{index + 1}</div>
          ))}
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <h3 className="text-xl font-bold">Quote of the Day</h3>
        <p className="text-gray-300 italic">"Success is the sum of small efforts, repeated day in and day out." - Robert Collier</p>
      </div>

    </div>

    <div className="bg-[#263041] p-6 mt-5 rounded-lg shadow-lg flex flex-col gap-4">
  <h3 className="text-xl font-bold text-white">Videos Watched</h3>
  <div className="grid grid-cols-4 gap-4 text-white font-medium border-b border-gray-500 pb-2">
    <span>Video Name</span>
    <span>Length</span>
    <span>Link to Video</span>
    <span>Completed</span>
  </div>
  {/* Example video entries */}
  {[
    { name: "React Basics", length: "10:45", link: "https://example.com/video1", completed: true },
    { name: "Advanced Hooks", length: "15:30", link: "https://example.com/video2", completed: false },
    { name: "State Management", length: "20:00", link: "https://example.com/video3", completed: true },
    { name: "Deploying React Apps", length: "12:15", link: "https://example.com/video4", completed: false },
  ].map((video, index) => (
    <div
      key={index}
      className="grid grid-cols-4 gap-4 text-white items-center bg-[#1E2835] p-2 rounded-md"
    >
      <span>{video.name}</span>
      <span>{video.length}</span>
      <a
        href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        Watch
      </a>
      <input
        type="checkbox"
        className="w-5 h-5"
        checked={video.completed}
        onChange={() => {}}
      />
    </div>
  ))}
</div>

  </div>
)}




{activeTab === "settings" && (
  <div className="p-8 bg-[#1b222d] min-h-screen">
    {/* Settings Tab */}
    <h2 className="text-3xl font-bold text-[#ed6054] mb-6">Settings</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Update Profile Widget */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-2xl flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#ed6054]">Update Profile</h2>
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Username" 
            className="px-4 py-2 bg-[#1b222d] border border-[#444] rounded-md text-gray-300 focus:outline-none focus:border-[#ed6054] transition"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="px-4 py-2 bg-[#1b222d] border border-[#444] rounded-md text-gray-300 focus:outline-none focus:border-[#ed6054] transition"
          />
        </div>
        <button className="bg-[#ed6054] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#d95448] transition transform hover:scale-105 duration-300">
          Save Changes
        </button>
      </div>

      {/* Change Password Widget */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-2xl flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#ed6054]">Change Password</h2>
        <div className="flex flex-col gap-4">
          <input 
            type="password" 
            placeholder="Current Password" 
            className="px-4 py-2 bg-[#1b222d] border border-[#444] rounded-md text-gray-300 focus:outline-none focus:border-[#ed6054] transition"
          />
          <input 
            type="password" 
            placeholder="New Password" 
            className="px-4 py-2 bg-[#1b222d] border border-[#444] rounded-md text-gray-300 focus:outline-none focus:border-[#ed6054] transition"
          />
          <input 
            type="password" 
            placeholder="Confirm New Password" 
            className="px-4 py-2 bg-[#1b222d] border border-[#444] rounded-md text-gray-300 focus:outline-none focus:border-[#ed6054] transition"
          />
        </div>
        <button className="bg-[#ed6054] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#d95448] transition transform hover:scale-105 duration-300">
          Update Password
        </button>
      </div>

      {/* Notification Settings Widget */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-2xl flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#ed6054]">Notification Settings</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Email Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" />
              <div className="w-10 h-5 bg-[#444] rounded-full"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#ed6054] rounded-full transition"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Push Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" />
              <div className="w-10 h-5 bg-[#444] rounded-full"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#ed6054] rounded-full transition"></div>
            </label>
          </div>
        </div>
        <button className="bg-[#ed6054] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#d95448] transition transform hover:scale-105 duration-300">
          Save Notifications Settings
        </button>
      </div>

      {/* Theme Preferences Widget */}
      <div className="bg-[#263041] p-6 rounded-lg shadow-2xl flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#ed6054]">Theme Preferences</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" />
              <div className="w-10 h-5 bg-[#444] rounded-full"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#ed6054] rounded-full transition"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Light Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" />
              <div className="w-10 h-5 bg-[#444] rounded-full"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#ed6054] rounded-full transition"></div>
            </label>
          </div>
        </div>
        <button className="bg-[#ed6054] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#d95448] transition transform hover:scale-105 duration-300">
          Save Theme Preferences
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
