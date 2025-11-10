import { Home, User, Folder, Mail, Award, Wrench } from "lucide-react";

const Sidebar = () => {
  const links = [
    { id: "hero", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "skills", label: "Skills", icon: <Wrench size={20} /> },
    { id: "projects", label: "Projects", icon: <Folder size={20} /> },
    { id: "certificates", label: "Certificates", icon: <Award size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex-col justify-between shadow-lg z-50">
      {/* Top Section */}
      <div>
        {/* Profile */}
        <div className="flex flex-col items-center mb-10 mt-6">
          <img
            src="/photo/black-shemiz.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
          />
          <h1 className="text-xl font-bold">Tensae Deme</h1>
          <p className="text-gray-400 text-sm">
            Full-stack dev & DevOps Enthusiast
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 px-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section (Footer) */}
      <div className="p-4 text-center text-gray-500 text-xs border-t border-gray-700">
        © {new Date().getFullYear()} Tensae Deme. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
