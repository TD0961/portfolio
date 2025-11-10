import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Simple ComingSoon component directly inside Projects.tsx
const ComingSoon = ({ onClose }: { onClose: () => void }) => (
  <div className="bg-gray-800 p-6 rounded-2xl w-96 text-center shadow-lg border border-gray-700">
    <h3 className="text-2xl font-semibold text-blue-400 mb-3">
      Deployment Ongoing...
    </h3>
    <p className="text-gray-300 text-sm mb-5">
      This project will be live soon! Stay tuned.
    </p>
    <button
      onClick={onClose}
      className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
    >
      Close
    </button>
  </div>
);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and achievements. Built with React, TailwindCSS, and Vite, it highlights my web development expertise, UI/UX design approach, and professional experience. The site includes interactive project showcases, smooth animations, and a responsive design for all devices.",
    image: "/photo/portfolio.png",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite", "vercel"],
    link: "https://tensaes.vercel.app/",
  },
  {
    title: "eGebeya",
    description:
      "E-Gebeya is a digital marketplace platform connecting buyers and sellers efficiently, featuring a sleek cyberpunk-inspired interface with neon accents and real-time transaction tracking. Built with React and Node.js, it supports secure payments with Chapa and Stripe, intelligent product listings, and a smooth user experience for both vendors and customers.",
    image: "/photo/egebeya.png",
    tags: ["React", "TypeScript", "Fiber/Go", "Gorm", "PostgreSQL", "Chapa", "Stripe", "Docker"],
    link: "https://egebeya.fly.dev/",
  },
  {
    title: "Event Easy",
    description:
      "Event Easy is an all-in-one event management platform that simplifies planning, ticketing, and attendee engagement. Create, promote, and manage your events effortlessly with our intuitive tools and real-time analytics.",
    image: "/photo/event-easy2.png",
    tags: ["Mern stack", "Map", "chapa", "cloudinary", "vercel", "Render"],
    link: "https://eventeasy-f.vercel.app/",
  },
  {
    title: "Stadipass",
    description:
      "STADIPASS is a stadium ticketing platform for sports events, designed to simplify ticket purchases, entry management, and event tracking. Fans can easily buy tickets online, receive digital passes, and enjoy a seamless experience at stadium entrances, while organizers efficiently manage attendance and access control.",
    image: "/photo/stadipass.png",
    tags: ["Mern stack", "QR Scan", "CI/CD", "Docker", "Github Actions"],
    comingSoon: true,
    link: "#",
  },
  {
    title: "CineHack",
    description:
      "A cyberpunk-inspired movie explorer that transforms your screen into a futuristic cinema terminal. Search films through a pulsating neon interface, watch movie cards tilt in 3D space, and reveal ratings with glowing holographic bars—all powered by real-time data from the OMDb API.",
    image: "/photo/cinehack.png",
    tags: ["OMDb API", "React", "TypeScript", "TailwindCSS", "CI/CD", "Docker", "Docker Registry"],
    comingSoon: true,
    link: "#",
  },
];

const Projects = () => {
  const swiperRef = useRef<any>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.comingSoon) {
      setShowComingSoon(true);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 bg-gray-900 text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-500"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="w-full max-w-6xl relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full pb-20"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleProjectClick(project)}
                  className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  Details
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows and Dots */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-xl font-thin px-4 py-1 text-blue-500 hover:text-blue-400 transition"
            >
              ◀
            </button>
            <div className="custom-pagination flex items-center gap-2"></div>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-xl font-thin px-4 py-1 text-blue-500 hover:text-blue-400 transition"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Bullet Styling */}
        <style>
          {`
            .custom-pagination .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
            }
          `}
        </style>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
          <div className="bg-gray-800 p-6 rounded-2xl w-96 text-center shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition mb-3"
            >
              Live Demo
            </a>
            <br />
            <button
              onClick={() => setSelectedProject(null)}
              className="text-gray-400 text-sm hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
          <ComingSoon onClose={() => setShowComingSoon(false)} />
        </div>
      )}
    </section>
  );
};

export default Projects;
