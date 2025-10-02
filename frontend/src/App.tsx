import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (desktop) */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 md:ml-64 w-full ">
        <Hero />
        <About />
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
