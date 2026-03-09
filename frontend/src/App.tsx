import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import ImageModal from "./components/ImageModal";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function App() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30">
      {/* Global particle canvas — fixed behind everything */}
      <ParticleBackground />

      <Sidebar onProfileClick={() => setModalImage("/photo/black-shemiz.jpg")} />

      <ImageModal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage || ""}
      />

      {/* Main content */}
      <main className="relative z-10 flex-1 lg:ml-64 w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}

export default App;

