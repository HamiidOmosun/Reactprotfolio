import { useState } from "react";
import Navbar from "../components/Navbar";
import { projects } from "../projectsData"; // adjust path if you put in /data

const PortfolioSection = () => {
  const categories = ["UI/UX", "Web Dev", "Mobile Dev"];
  const [activeCategory, setActiveCategory] = useState("UI/UX");

  const filteredProjects = projects.filter(project =>
    project.categories.includes(activeCategory)
  );

  console.log("Active category:", activeCategory);
  console.log("Filtered projects:", filteredProjects);

  return (
    <div className="bg-[#021526] min-h-screen">
      <Navbar />

      {/* Heading */}
      <div className="md:px-28 lg:px-40 flex flex-col items-center pt-15">
      <h1 className="text-4xl font-black mb-4 text-white ">My Portfolio</h1>
      <p className="text-gray-400 mb-10 text-center text-xs pt-5 max-w-[50ch]">
        Step into an immersive journey where imagination meets innovation —
        turning raw ideas into elegant designs, refined code, and polished
        products ready to inspire.
      </p>
      </div>

      {/* Tabs */}
      <div className="md:px-28 lg:px-40 px-5">
      <div className="flex gap-8 mb-12 border-b border-gray-700">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              console.log("Click category:", cat);
              setActiveCategory(cat)}}
            className={`pb-2 font-semibold transition ${
              activeCategory === cat
                ? "border-b-2 border-white text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>

      {/* Project Grid */}

      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 px-5 md:px-28 lg:px-40">
        {filteredProjects.map(project => (
          <div
            key={project.slug}
            className="bg-[#0f213d] p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <span className="text-gray-400 text-sm">{project.date}</span>
            </div>
            <p className="text-gray-300">{project.description}</p>
            <a 
              href={`/projects/${project.slug}`}
              className="text-blue-400 font-medium mt-3 inline-block hover:underline"
            >
              READ CASE STUDY →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
