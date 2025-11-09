import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // 30% visibility
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20 bg-gray-900 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2
            className={`text-4xl font-bold mb-6 text-blue-500 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            So, who am I?
          </h2>
          <p
            className={`text-lg text-gray-200 leading-relaxed transition-all duration-1000 delay-150 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Hi! I’m Tensae Deme. I love building{" "}
            <strong>modern web and mobile applications</strong> that people
            actually enjoy using. On top of that, I’m passionate about{" "}
            <strong>DevOps</strong>, making sure applications run smoothly,
            scale effortlessly, and stay reliable. My work is all about
            connecting <strong>development and operations</strong>, creating
            seamless user experiences, and solving real-world problems
            efficiently.
          </p>
          <div
            className={`flex justify-center md:justify-start gap-4 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#skills"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md
                       hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Explore My Skills
            </a>
            <a
              href="/Resume/Tensae_Resumes.pdf"
              download
              className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg shadow-md
                       hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right image */}
        <div
          className={`flex-1 flex justify-center transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/photo/sit-black.jpeg"
            alt="About Me"
            className="w-80 h-96 object-cover rounded-2xl shadow-2xl transform hover:rotate-3 hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
