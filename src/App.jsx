import React, { useEffect, useState } from "react";
import Dashboard from './pages/Dashboard'
import Mainpage from './pages/Mainpage'
import { Auth } from "@supabase/auth-ui-react"; // Supabase Auth component
import { ThemeSupa } from "@supabase/auth-ui-shared"; // Supabase theme
import { createClient } from "@supabase/supabase-js"; // Supabase client
import { BrowserRouter as Router, Routes, Route, useNavigate , Link, data} from "react-router-dom"

const supabase = createClient(
  "https://jrbdjqslhqvgbweymfcz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYmRqcXNsaHF2Z2J3ZXltZmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDE4NTMsImV4cCI6MjA0ODcxNzg1M30.peVTMjA8RH27jJWfeiw63eQcYGWqaLgi3oJdt0nvF-w"
);

const App = () => {
  
  useEffect(() => {
    const check = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log(data);
    }
    check()
  }, [/* add a dependency here, e.g. supabase.auth */])

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // To toggle between login and signup

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[#1b222d] text-white font-sans" style={{ scrollBehavior: "smooth" }}>
      {/* Navbar */}
      <div className="navbar sticky top-0 bg-transparent backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <img
            src="https://www.svgrepo.com/show/286847/road-way.svg"
            alt="Logo"
            className="h-12"
          />
          <div className="nav-items hidden md:flex gap-6">
            <Link to="/home" className="text-[#ed6054] hover:underline">
              Home
            </Link>
            <a href="#Pricing" className="text-[#ed6054] hover:underline">
              Pricing
            </a>
          </div>
          <button
            onClick={openModal}
            className="bg-[#ed6054] text-white px-6 py-2 rounded-lg hover:bg-[#d95448] transition"
          >
            Start Here
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero relative flex flex-col justify-center items-center text-center h-screen px-4 overflow-hidden">
  <h1 className="text-5xl lg:text-[100px] font-bold z-10">Hello There!</h1>
  <p className="text-2xl mt-4 z-10">Welcome to devroad</p>
  <p className="text-xl mt-4 z-10">
    Learn how to learn, what to learn, and where to learn.
  </p>
  <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
    <button
      onClick={openModal}
      className="bg-[#ed6054] px-6 py-3 rounded-lg hover:bg-[#d95448] transition"
    >
      Continue
    </button>
    <Link
      to="/home"
      className="bg-[#ed6054] px-6 py-3 rounded-lg hover:bg-[#d95448] transition"
    >
      Get Started
    </Link>
  </div>

  {/* Shooting Lines */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Horizontal Lines */}
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={`h-${i}`}
        className={`shooting-line-horizontal ${
          i % 3 === 0 ? "bg-orange-500" : i % 3 === 1 ? "bg-blue-500" : "bg-green-500"
        }`}
        style={{
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 5}s`,
          top: `${Math.random() * 100}%`,
        }}
      ></div>
    ))}
    {/* Vertical Lines */}
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={`v-${i}`}
        className={`shooting-line-vertical ${
          i % 3 === 0 ? "bg-orange-500" : i % 3 === 1 ? "bg-blue-500" : "bg-green-500"
        }`}
        style={{
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 5}s`,
          left: `${Math.random() * 100}%`,
        }}
      ></div>
    ))}
  </div>
</section>


      {/* Sections */}
      <section className="section grid lg:grid-cols-2 gap-8 p-8 m-12 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-[100px] font-bold">Learn anywhere, learn on the go</h1>
          <p className="text-xl">
            Access learning materials from any device, anytime, and stay productive on the move. Turn idle moments into opportunities to grow with mobile-friendly resources.
          </p>
        </div>
        <div className="relative">
          <div
            className="bg-cover bg-no-repeat w-full aspect-square lg:aspect-auto lg:h-[700px] bg-center rounded-lg object-cover"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/4f/b8/a3/4fb8a337e07decb8a760a11016f61552.jpg')",
            }}
          ></div>
        </div>
      </section>

      <section className="section grid lg:grid-cols-2 gap-8 p-8 m-12 items-center">
      <div className="relative">
          <div
            className="bg-cover bg-no-repeat w-full aspect-square lg:aspect-auto lg:h-[700px] bg-center rounded-lg object-cover"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/27/9e/ee/279eeeb94a52e9146a06e7cb32c06fc3.jpg')",
            }}
          ></div>
        </div>
        
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-[100px] font-bold">Learn well, learn wide</h1>
          <p className="text-xl">
            Access carefully selected resources and step-by-step pathways tailored to your growth. Master skills efficiently with structured roadmaps and progress tracking.
          </p>
        </div>
      </section>

      <section className="section grid lg:grid-cols-2 gap-8 p-8 m-12 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-[100px] font-bold">Learn smoothly, learn organized</h1>
          <p className="text-xl">
            Follow structured plans that make learning seamless and stress-free. Stay focused with organized resources tailored to your skill development.
          </p>
        </div>
        <div className="relative">
          <div
            className="bg-cover bg-no-repeat w-full aspect-square lg:aspect-auto lg:h-[700px] bg-center rounded-lg object-cover"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/93/df/15/93df1560097eedb72743d4824ff91fe5.jpg')",
            }}
          ></div>
        </div>
      </section>


      <section id="Pricing" className="section h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text-[100px] font-bold">
            Learn Free, learn now
          </h1>
          <p className="text-xl">
            No pay wall, no subscription, get started free today.
          </p>
        </div>
        <Link to="/home" className="mt-8 bg-[#ed6054] px-6 py-3 rounded-lg hover:bg-[#d95448] transition">
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer bg-[#263041] py-4">
        <p className="text-center text-xl">&copy; 2024 devroad. All rights reserved.</p>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 text-white p-3 rounded-full shadow-md backdrop-blur-md border border-gray-300 bg-transparent transition"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="m280-400 200-200 200 200H280Z" />
        </svg>
      </button>

      {/* Modal for Sign Up / Login */}
      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300 fade-in"
    onClick={closeModal}
  >
    <div
      className="bg-[#263041] p-8 m-8 rounded-lg w-full max-w-md flex flex-col justify-center items-center"
      onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
    >
      {isLogin ? (
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl text-[#ed6054] font-bold mb-4">Login</h2>
          {/* Supabase Login */}
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
          <p
            onClick={() => setIsLogin(false)}
            className="text-center text-[#ed6054] mt-4 cursor-pointer hover:underline"
          >
            Don't have an account? Sign Up.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl text-[#ed6054] font-bold mb-4">Sign Up</h2>
          {/* Supabase Sign Up */}
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
          <p
            onClick={() => setIsLogin(true)}
            className="text-center text-[#ed6054] mt-4 cursor-pointer hover:underline"
          >
            Already have an account? Login.
          </p>
        </div>
      )}

      <button
        onClick={closeModal}
        className="text-[#ed6054] text-center mt-4 hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
    </div>
  </div>
)}

    </main>
  );
};

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={< Mainpage/>} />
    </Routes>
  </Router>
);

export default Root;
