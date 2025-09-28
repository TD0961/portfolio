const Skills = () => {
  const skills = [
    "DevOps & CI/CD",
    "Docker & Kubernetes",
    "React & TypeScript",
    "Node.js & Express",
    "Cloud (Azure, AWS)",
    "Database (Postgres, MongoDB)",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gray-50"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900">My Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl text-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-6 py-4 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
