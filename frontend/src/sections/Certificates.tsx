import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  { image: "/certificates/aws.png", title: "AWS Certified Solutions Architect" },
  { image: "/certificates/azure.png", title: "Azure Fundamentals" },
  { image: "/certificates/devops.png", title: "DevOps Essentials" },
  { image: "/certificates/docker.png", title: "Docker & Kubernetes" },
  { image: "/certificates/react.png", title: "React Developer" },
];

const Certificates = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const total = certificates.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);

  // Responsive: 1 card mobile, 2 desktop
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCertificates = Array.from({ length: cardsPerView }, (_, i) => {
    return certificates[(index + i) % total];
  });

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16 relative overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-4xl font-bold mb-12 text-blue-500"
      >
        Certificates
      </motion.h2>

      {/* Cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-${cardsPerView} gap-6 w-full max-w-5xl`}
      >
        {visibleCertificates.map((cert, i) => (
          <motion.div
            key={cert.title + i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: false }}
            className="aspect-square bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20 flex items-center justify-center"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-4/5 h-4/5 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Centered Arrows */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="text-2xl font-thin px-4 py-1 hover:scale-110 transition"
          >
            ◀
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {certificates.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full bg-white/50 ${
                  (index % total) === i ? "scale-125 bg-white" : ""
                } transition-all`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-2xl font-thin px-4 py-1 hover:scale-110 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
