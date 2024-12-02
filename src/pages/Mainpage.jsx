import React, { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    image: "https://i.pinimg.com/736x/07/e0/60/07e06042ca853939e942e707f81dd9b7.jpg",
    details: {
      definition: "This course introduces the fundamental technologies for building web pages and applications.",
      paths: ["HTML Basics", "CSS Fundamentals", "JavaScript Essentials"],
      resources: { videos: 12, tests: 4 },
    },
  },
  {
    id: 2,
    title: "Mastering React",
    description: "Dive deep into React.js and build dynamic web applications and websites quicly and easily.",
    image: "https://i.pinimg.com/736x/18/9e/7c/189e7c6391ee492e584fc98d16da8241.jpg",
    details: {
      definition: "This course covers advanced concepts in React for building modern, stateful applications.",
      paths: ["Component Lifecycle", "State Management", "Hooks"],
      resources: { videos: 18, tests: 5 },
    },
  },
  {
    id: 3,
    title: "Backend Development with Node.js",
    description: "Understand server-side development using Node.js and Express.",
    image: "https://i.pinimg.com/736x/46/97/d3/4697d39acf3595d374f3114802482de8.jpg",
    details: {
      definition: "Learn to create server-side applications and RESTful APIs using Node.js and Express.",
      paths: ["Introduction to Node.js", "Building APIs", "Database Integration"],
      resources: { videos: 15, tests: 6 },
    },
  },
];

const Homepage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const closeModal = () => setSelectedCourse(null);

  return (
    <main className="min-h-screen bg-[#1b222d] text-white font-sans">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Explore Courses & Resources
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#263041] rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <button
                  className="bg-[#ed6054] text-white px-4 py-2 rounded-lg hover:bg-[#d95448] transition"
                  onClick={() => setSelectedCourse(course)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#263041] rounded-lg w-full max-w-lg p-8 m-3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-[#ed6054] mb-4">
              {selectedCourse.title}
            </h2>
            <p className="mb-4 text-lg">{selectedCourse.details.definition}</p>
            <h3 className="text-xl font-bold text-[#ed6054]">Paths to be Taken:</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedCourse.details.paths.map((path, index) => (
                <li key={index} className="text-gray-400">
                  {path}
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-[#ed6054]">Resources:</h3>
            <p className="text-gray-400 mb-4">
              Videos: {selectedCourse.details.resources.videos}, Tests:{" "}
              {selectedCourse.details.resources.tests}
            </p>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-[#ed6054] hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
            <a
              className="w-full bg-[#ed6054] text-white px-4 py-2 rounded-lg hover:bg-[#d95448] transition mt-6"
              href="/dashboard"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Homepage;
