const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm hidden md:block z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-gray-800">Tensae</h1>
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#certificates" className="hover:text-blue-500">Certificates</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
