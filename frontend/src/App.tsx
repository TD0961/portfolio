import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen text-white flex">
      {/* Root background color at lowest z-index */}
      <div className="fixed inset-0 bg-gray-950 -z-20" />

      {/* Global particle canvas — fixed behind everything */}
      <ParticleBackground />

      {/* Sidebar (desktop) */}
      <Sidebar />

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

