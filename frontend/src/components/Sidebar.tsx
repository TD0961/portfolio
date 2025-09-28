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
    <aside className="hidden md:flex flex-col justify-between w-72 bg-gradient-to-b from-gray-900 to-black text-white p-6 shadow-2xl sticky top-0 h-screen">
      <div>
        {/* Profile */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="/photo/black-shemiz.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
          />
          <h1 className="text-xl font-bold">Tensae Deme</h1>
          <p className="text-gray-400 text-sm">Full-stack dev & DevOps Engineer</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
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

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tensae Deme
      </div>
    </aside>
  );
};

export default Sidebar;
