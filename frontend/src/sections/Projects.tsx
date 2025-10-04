import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Portfolio built with React, TailwindCSS, and Vite.",
    image: "/projects/portfolio.png",
    tags: ["TailwindCSS", "Vite"],
    link: "#",
  },
  {
    title: "DevOps Pipeline",
    description: "CI/CD pipeline using GitHub Actions, Docker, and Kubernetes.",
    image: "/projects/devops.png",
    tags: ["GitHub Actions", "Docker", "Kubernetes"],
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "Full-stack app with Next.js, Django, and PostgreSQL.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Django", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Chat Application",
    description: "Realtime chat app with Socket.io and MongoDB.",
    image: "/projects/chat.png",
    tags: ["Node.js", "Socket.io", "MongoDB"],
    link: "#",
  },
  {
    title: "Monitoring Dashboard",
    description: "Grafana + Prometheus setup with Docker and Kubernetes.",
    image: "/projects/monitor.png",
    tags: ["Grafana", "Prometheus", "Kubernetes"],
    link: "#",
  },
];

const Projects = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 bg-gray-900 text-white"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-500"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
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
                viewport={{ once: false }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Animated Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                  className="text-xl font-semibold mb-2"
                >
                  {project.title}
                </motion.h3>

                {/* Animated Description */}
                <motion.p
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: false }}
                  className="text-gray-300 text-sm mb-4"
                >
                  {project.description}
                </motion.p>

                {/* Animated Tags */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: false }}
                  className="flex flex-wrap justify-center gap-2 mb-4"
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  Live Demo
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Controls with Arrows and Dots */}
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

        {/* Bullet Styling - only size, default color */}
        <style>
          {`
            .custom-pagination .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Projects;
