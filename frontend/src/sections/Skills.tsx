"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSvelte,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiTypescript,
  SiDjango,
  SiGo,
  SiLaravel,
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiJenkins,
  SiGitlab,
  SiGithubactions,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiTerraform,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    color: "text-blue-400",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400 w-8 h-8" /> },
      { name: "Svelte", icon: <SiSvelte className="text-orange-500 w-8 h-8" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-8 h-8" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white w-8 h-8" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400 w-8 h-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-8 h-8" /> },
    ],
  },
  {
    title: "Backend",
    color: "text-green-400",
    skills: [
      { name: "Django", icon: <SiDjango className="text-green-600 w-8 h-8" /> },
      { name: "Express / Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
      { name: "Gin (Go)", icon: <SiGo className="text-cyan-400 w-8 h-8" /> },
      { name: "Fiber (Go)", icon: <SiGo className="text-teal-400 w-8 h-8" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500 w-8 h-8" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400 w-8 h-8" /> },
      { name: "Nest.js", icon: <SiNestjs className="text-red-600 w-8 h-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-8 h-8" /> },
    ],
  },
  {
    title: "Databases",
    color: "text-purple-400",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 w-8 h-8" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600 w-8 h-8" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-8 h-8" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500 w-8 h-8" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-8 h-8" /> },
    ],
  },
  {
    title: "DevOps",
    color: "text-red-400",
    skills: [
      { name: "Jenkins", icon: <SiJenkins className="text-red-500 w-8 h-8" /> },
      { name: "GitLab CI", icon: <SiGitlab className="text-orange-500 w-8 h-8" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-200 w-8 h-8" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400 w-8 h-8" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 w-8 h-8" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400 w-8 h-8" /> },
      { name: "Prometheus", icon: <SiPrometheus className="text-orange-500 w-8 h-8" /> },
      { name: "Grafana", icon: <SiGrafana className="text-yellow-400 w-8 h-8" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-500 w-8 h-8" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gray-900 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold mb-16 text-blue-400"
      >
        MY SKILLS
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 relative">
        {/* Tree vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Category Title */}
            <h3 className={`text-2xl font-semibold mb-6 ${cat.color}`}>{cat.title}</h3>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {cat.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-lg
                             hover:scale-105 transition-transform duration-300"
                >
                  {skill.icon}
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
