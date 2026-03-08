import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Clock } from "lucide-react";

const ComingSoon = ({ onClose }: { onClose: () => void }) => (
  <div className="bg-gray-900 p-6 rounded-2xl w-96 text-center shadow-2xl border border-gray-700">
    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
      <Clock className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">Deployment in Progress</h3>
    <p className="text-gray-400 text-sm mb-5">This project will be live soon. Stay tuned!</p>
    <button
      onClick={onClose}
      className="px-5 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition text-sm"
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
    tags: ["React", "TypeScript", "TailwindCSS", "Vite", "Vercel"],
    link: "https://tensaes.vercel.app/",
  },
  {
    title: "eGebeya",
    description:
      "E-Gebeya is a digital marketplace platform connecting buyers and sellers efficiently, featuring a sleek cyberpunk-inspired interface with neon accents and real-time transaction tracking. Built with React and Node.js, it supports secure payments with Chapa and Stripe, intelligent product listings, and a smooth user experience for both vendors and customers.",
    image: "/photo/egebeya.png",
    tags: ["React", "TypeScript", "Fiber/Go", "GORM", "PostgreSQL", "Chapa", "Stripe", "Docker"],
    link: "https://egebeya.fly.dev/",
  },
  {
    title: "Event Easy",
    description:
      "Event Easy is an all-in-one event management platform that simplifies planning, ticketing, and attendee engagement. Create, promote, and manage your events effortlessly with our intuitive tools and real-time analytics.",
    image: "/photo/event-easy2.png",
    tags: ["MERN Stack", "Maps API", "Chapa", "Cloudinary", "Vercel", "Render"],
    link: "https://eventeasy-f.vercel.app/",
  },
  {
    title: "Stadipass",
    description:
      "STADIPASS is a stadium ticketing platform for sports events, designed to simplify ticket purchases, entry management, and event tracking. Fans can easily buy tickets online, receive digital passes, and enjoy a seamless experience at stadium entrances, while organizers efficiently manage attendance and access control.",
    image: "/photo/stadipass.png",
    tags: ["MERN Stack", "QR Scan", "CI/CD", "Docker", "GitHub Actions"],
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.comingSoon) setShowComingSoon(true);
    else setSelectedProject(project);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-2 text-blue-400"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <p className="text-gray-500 text-sm mb-12 tracking-wide">
        {currentIndex + 1} / {projects.length}
      </p>

      <div className="w-full max-w-2xl relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          effect="cards"
          grabCursor
          centeredSlides
          loop
          modules={[EffectCards]}
          className="w-full pb-4"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-900 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                  {project.comingSoon && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-xs text-blue-300 border border-blue-400/40 px-3 py-1 rounded-full tracking-widest uppercase">
                        Deploying Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-blue-600/10 text-blue-300 text-xs rounded-full border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.comingSoon ? "View Status" : "View Project"}
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`rounded-full transition-all duration-300 ${i === currentIndex
                  ? "w-6 h-2 bg-blue-500"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-gray-700/50 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{selectedProject.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 bg-blue-600/10 text-blue-300 text-xs rounded-full border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-white text-sm transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {showComingSoon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm z-50">
          <ComingSoon onClose={() => setShowComingSoon(false)} />
        </div>
      )}
    </section>
  );
};

export default Projects;
