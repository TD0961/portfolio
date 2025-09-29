import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  { image: "/certificates/aws.png", title: "AWS Certified Solutions Architect" },
  { image: "/certificates/azure.png", title: "Azure Fundamentals" },
  { image: "/certificates/devops.png", title: "DevOps Essentials" },
  { image: "/certificates/docker.png", title: "Docker & Kubernetes" },
  { image: "/certificates/react.png", title: "React Developer" },
];

const Certificates = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  // Auto-slide every 2s
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  // Show 3 certificates at once
  const visibleCertificates = [
    certificates[index],
    certificates[(index + 1) % certificates.length],
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16 relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-10"
      >
        <span className="text-blue-500">Certificates</span>
      </motion.h2>

      {/* Carousel */}
      <div className="flex space-x-6 w-full max-w-6xl justify-center items-stretch">
        <AnimatePresence>
          {visibleCertificates.map((cert, ) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-60 object-contain p-4"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default Certificates;
