const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-20 bg-white"
    >
      {/* Left content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">So, who am I?</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I’m Tensae Deme, a passionate DevOps Engineer and software developer.  
          My mission is to build scalable, modern solutions that bring real value.  
          I specialize in creating efficient infrastructures, full-stack applications,  
          and delivering impactful projects that merge development with operations.  
        </p>
        <a
          href="#skills"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Explore My Skills
        </a>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center">
        <img
          src="/photo/a1.jpeg"
          alt="About Me"
          className="w-80 h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
