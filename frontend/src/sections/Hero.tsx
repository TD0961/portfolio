import { useEffect, useRef, useState } from "react";

const skills = ["DevOps Engineer", "Web Developer", "Mobile App Developer", "Cloud Enthusiast"];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  // Scroll-triggered animation for text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Rotate skills every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/photo/phono.JPG')" }}
      />

      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/photo/piassa.jpeg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4 space-y-6">
        <h1
          className={`text-6xl md:text-7xl font-extrabold mb-4 text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          Hi, I’m <span className="text-blue-500">Tensae</span>
        </h1>

        <p
          className={`text-2xl md:text-3xl font-bold text-gray-200 transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <span
            key={currentSkill}
            className="inline-block text-blue-400 transition-transform duration-500 transform scale-105"
          >
            {skills[currentSkill]}
          </span>
        </p>

        <div
          className={`flex justify-center gap-4 mt-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-medium shadow-lg
                       hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl text-lg font-medium shadow-lg
                       hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
