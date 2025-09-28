import { Home, User, Folder, Mail, Award, Wrench } from "lucide-react";

const MobileNav = () => {
  const links = [
    { id: "hero", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "skills", label: "Skills", icon: <Wrench size={20} /> },
    { id: "projects", label: "Projects", icon: <Folder size={20} /> },
    { id: "certificates", label: "Certificates", icon: <Award size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center py-2 border-t border-gray-800 shadow-lg z-50">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="flex flex-col items-center text-xs hover:text-blue-400 transition"
        >
          {link.icon}
          <span className="mt-1">{link.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default MobileNav;
