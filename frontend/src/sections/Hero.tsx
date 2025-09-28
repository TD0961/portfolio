const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/photo/photo.JPG')" }}
      />

      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/photo/piassa.jpeg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Hi, I’m <span className="text-blue-500">Tensae</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          DevOps Engineer | Web & Mobile Developer | Cloud Enthusiast
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-medium shadow-lg hover:bg-blue-500 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
