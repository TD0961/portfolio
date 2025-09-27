import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Tensae Deme</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#certificates" className="hover:text-blue-600">Certificates</a></li>
        <li><a href="#resume" className="hover:text-blue-600">Resume</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 right-6 bg-white shadow-md rounded-md p-4 flex flex-col space-y-4 md:hidden">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
          <li><a href="#resume" onClick={() => setIsOpen(false)}>Resume</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
