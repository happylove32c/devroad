import React from "react";

const App = () => {
  return (
    <main className="min-h-screen bg-[#1b222d] text-white font-sans">
      {/* Navbar */}
      <div className="navbar sticky top-0 bg-transparent backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <img
            src="https://www.svgrepo.com/show/286847/road-way.svg"
            alt="Logo"
            className="h-12"
          />
          <div className="nav-items hidden md:flex gap-6">
            <a href="#" className="text-[#ed6054] hover:underline">
              Home
            </a>
            <a href="#Features" className="text-[#ed6054] hover:underline">
              Features
            </a>
          </div>
          <button className="bg-[#ed6054] text-white px-6 py-2 rounded-lg hover:bg-[#d95448] transition">
            Start Here
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero flex flex-col justify-center items-center text-center h-screen px-4">
        <h1 className="text-5xl lg:text-[100px] font-bold">Hello There!</h1>
        <p className="text-2xl mt-4">Welcome to devroad</p>
        <p className="text-xl mt-4">
          Learn how to learn, what to learn, and where to learn.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-[#ed6054] px-6 py-3 rounded-lg hover:bg-[#d95448] transition">
            Continue
          </button>
          <button className="bg-[#ed6054] px-6 py-3 rounded-lg hover:bg-[#d95448] transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Sections */}
      {[
        {
          title: "Learn anywhere, learn on the go",
          text: "Access learning materials from any device, anytime, and stay productive on the move. Turn idle moments into opportunities to grow with mobile-friendly resources.",
          image: "https://i.pinimg.com/736x/4f/b8/a3/4fb8a337e07decb8a760a11016f61552.jpg",
        },
        {
          title: "Learn well, learn wide",
          text: "Access carefully selected resources and step-by-step pathways tailored to your growth. Master skills efficiently with structured roadmaps and progress tracking.",
          image: "https://i.pinimg.com/736x/27/9e/ee/279eeeb94a52e9146a06e7cb32c06fc3.jpg",
        },
        {
          title: "Learn smoothly, learn organized",
          text: "Follow structured plans that make learning seamless and stress-free. Stay focused with organized resources tailored to your skill development.",
          image: "https://i.pinimg.com/736x/93/df/15/93df1560097eedb72743d4824ff91fe5.jpg",
        },
      ].map((section, index) => (
        <section
          key={index}
          className="section grid lg:grid-cols-2 gap-8 p-8 m-12 items-center"
        >
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl lg:text-[100px] font-bold">{section.title}</h1>
            <p className="text-xl">{section.text}</p>
          </div>
          <div className="relative">
            <div
              className="bg-cover bg-no-repeat w-full aspect-square lg:aspect-auto lg:h-[700px] bg-center rounded-lg object-cover"
              style={{ backgroundImage: `url(${section.image})` }}
            ></div>
          </div>
        </section>
      ))}

      <section className="section h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text-[100px] font-bold">
            Learn early, learn now
          </h1>
          <p className="text-xl">
            No pay wall, no subscription, get started free today.
          </p>
        </div>
        <button className="mt-8 bg-[#ed6054] px-6 py-3 rounded-lg hover:bg-[#d95448] transition">
          Get Started
        </button>
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
    </main>
  );
};

export default App;