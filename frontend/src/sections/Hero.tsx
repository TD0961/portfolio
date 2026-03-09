import { useEffect, useRef, useState } from "react";

const skills = ["DevOps Enthusiast", "Web Developer", "Mobile App Developer", "Cloud Enthusiast"];

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
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-transparent"
    >
      {/* Background Image - Integrated with Masking */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop Image with radial mask and lower opacity */}
        <div
          className="absolute inset-0 hidden md:block opacity-20"
          style={{
            backgroundImage: "url('/photo/piassa.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
          }}
        />
        {/* Mobile Image with similar effect */}
        <div
          className="absolute inset-0 md:hidden opacity-30"
          style={{
            backgroundImage: "url('/photo/phono.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'radial-gradient(circle at center, black 10%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 90%)'
          }}
        />
      </div>

      {/* Global Theme Blending Gradient (Top to Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/10 to-gray-950" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-12 space-y-6">
        <h1
          className={`text-6xl md:text-8xl font-black mb-4 text-white tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          Hi, I’m <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Tensae</span>
        </h1>

        <p
          className={`text-2xl md:text-4xl font-bold text-gray-200 transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <span
            key={currentSkill}
            className="inline-block text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.3)] transition-all duration-500 transform hover:scale-105"
          >
            {skills[currentSkill]}
          </span>
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center gap-6 mt-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-blue-600/90 backdrop-blur-sm text-white rounded-2xl text-lg font-bold shadow-2xl
                       hover:bg-blue-500 transform hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-500/50 backdrop-blur-sm text-blue-400 rounded-2xl text-lg font-bold shadow-xl
                       hover:bg-blue-600 hover:text-white hover:border-blue-600 transform hover:-translate-y-1.5 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
