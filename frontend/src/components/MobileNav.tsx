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

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 w-full z-50 border-t border-white/5"
      style={{
        backgroundColor: 'rgba(3, 7, 18, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex justify-around items-center py-2 px-1">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all duration-200 text-xs ${isActive
                ? "text-blue-400"
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              {/* Active top accent dot */}
              <span
                className={`w-1 h-1 rounded-full mb-0.5 transition-all duration-200 ${isActive ? "bg-blue-400" : "bg-transparent"
                  }`}
              />
              <span className={`transition-transform duration-200 ${isActive ? "scale-110" : ""}`}>
                {link.icon}
              </span>
              <span className="mt-0.5 leading-none">{link.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
