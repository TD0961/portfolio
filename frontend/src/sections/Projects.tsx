import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, Tailwind CSS, and Vite.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: "/projects/portfolio.png",
    demo: "https://your-portfolio-link.com",
  },
  {
    title: "DevOps Pipeline",
    description: "CI/CD pipeline using GitHub Actions, Docker, and Kubernetes.",
    tech: ["GitHub Actions", "Docker", "Kubernetes"],
    image: "/projects/devops.png",
    demo: "https://your-devops-link.com",
  },
  {
    title: "E-commerce App",
    description: "Full-stack app with Next.js, Django, and PostgreSQL.",
    tech: ["Next.js", "Django", "PostgreSQL"],
    image: "/projects/ecommerce.png",
    demo: "https://your-ecommerce-link.com",
  },
  {
    title: "Chat Application",
    description: "Realtime chat app with Socket.io and MongoDB.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    image: "/projects/chat.png",
    demo: "https://your-chat-link.com",
  },
  {
    title: "Monitoring Dashboard",
    description: "Grafana + Prometheus setup with Docker and Kubernetes.",
    tech: ["Grafana", "Prometheus", "Kubernetes"],
    image: "/projects/monitor.png",
    demo: "https://your-dashboard-link.com",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-slide every 2s
  useEffect(() => {
    const interval = setInterval(nextProject, 10000);
    return () => clearInterval(interval);
  }, []);

  // Show 3 projects at once
  const visibleProjects = [
    projects[index],
    projects[(index + 1) % projects.length],
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16 relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-10"
      >
        <span className="text-blue-500">Projects</span>
      </motion.h2>

      {/* Carousel */}
      <div className="flex space-x-6 w-full max-w-6xl justify-center items-stretch">
        <AnimatePresence>
          {visibleProjects.map((project, ) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-40 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-lg font-bold mb-2"
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-300 text-sm mb-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-lg bg-blue-600/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Live Demo Button */}
                <div className="flex justify-center mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500/20 text-sm transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextProject}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default Projects;
