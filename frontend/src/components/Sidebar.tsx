import { useEffect, useState } from "react";
import { Home, User, Folder, Mail, Award, Wrench, Briefcase } from "lucide-react";

const links = [
  { id: "hero", label: "Home", icon: <Home size={18} /> },
  { id: "about", label: "About", icon: <User size={18} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
  { id: "skills", label: "Skills", icon: <Wrench size={18} /> },
  { id: "projects", label: "Projects", icon: <Folder size={18} /> },
  { id: "certificates", label: "Certificates", icon: <Award size={18} /> },
  { id: "contact", label: "Contact", icon: <Mail size={18} /> },
];

interface SidebarProps {
  onProfileClick?: () => void;
}

const Sidebar = ({ onProfileClick }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="hidden lg:flex fixed top-0 left-0 h-screen w-64 text-white flex-col justify-between z-50 border-r border-white/5 shadow-2xl bg-transparent"
      style={{
        backgroundColor: 'rgba(3, 7, 18, 0.15)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      {/* Top Section */}
      <div>
        <div className="flex flex-col items-center pt-8 pb-6 px-4 border-b border-white/5">
          <button
            onClick={onProfileClick}
            className="relative mb-4 group cursor-pointer focus:outline-none"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            <img
              src="/photo/black-shemiz.jpg"
              alt="Profile"
              className="relative w-20 h-20 rounded-full border-2 border-blue-500 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </button>
          <h1 className="text-lg font-bold tracking-wide">Tensae Deme</h1>
          <p className="text-xs text-gray-400 mt-1 text-center leading-relaxed">
            Full-stack dev & DevOps Enthusiast
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-1 px-3">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden ${isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {/* Active gradient background */}
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-xl border border-white/20" />
                )}
                {/* Hover background */}
                {!isActive && (
                  <span className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}
                {/* Active left glow bar */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full opacity-80" />
                )}
                <span className="relative z-10">{link.icon}</span>
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-white/5">
        <p className="text-center text-gray-500 text-[10px] uppercase tracking-widest opacity-50">
          © {new Date().getFullYear()} Tensae Deme
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
