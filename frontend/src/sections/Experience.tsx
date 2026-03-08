import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface Job {
    company: string;
    role: string;
    period: string;
    type: string;
    bullets: string[];
    tags: string[];
}

const jobs: Job[] = [
    {
        company: "Hundaf Digital Ekub",
        role: "Full Stack Developer & Dev Team Lead",
        period: "Sep 2025 – Present",
        type: "Remote",
        bullets: [
            "Lead the development team, coordinating sprint planning and code reviews",
            "Architect and develop core product features from requirements to deployment",
            "Own deployment pipelines and monitor production system health",
        ],
        tags: ["Team Lead", "Product Development", "Deployment", "Monitoring"],
    },
    {
        company: "EsseFirst Technologies",
        role: "Full Stack Developer",
        period: "Nov 2025 – Present",
        type: "Hybrid",
        bullets: [
            "Building a multi-tenant SaaS platform serving enterprise clients",
            "Developing a fintech product with secure payment flows and real-time data",
            "Contributing to an ERP system covering HR, inventory, and reporting modules",
        ],
        tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 text-white"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-16 text-blue-400"
            >
                EXPERIENCE
            </motion.h2>

            {/* Timeline */}
            <div className="w-full max-w-3xl relative">
                {/* Vertical line */}
                <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 -translate-x-1/2" />

                <div className="flex flex-col gap-16">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                }`}
                        >
                            {/* Dot on timeline */}
                            <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-950 shadow-lg shadow-blue-500/50 top-2" />

                            {/* Card */}
                            <div
                                className={`ml-14 lg:ml-0 lg:w-[46%] ${i % 2 === 0 ? "lg:mr-auto lg:pr-10" : "lg:ml-auto lg:pl-10"
                                    }`}
                            >
                                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/40">
                                    {/* Company & Role */}
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="p-2 bg-blue-600/20 rounded-lg mt-0.5">
                                            <Briefcase className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white leading-tight">
                                                {job.company}
                                            </h3>
                                            <p className="text-blue-400 font-medium text-sm">
                                                {job.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Meta info */}
                                    <div className="flex flex-wrap gap-4 text-gray-400 text-xs mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {job.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {job.type}
                                        </span>
                                    </div>

                                    {/* Bullets */}
                                    <ul className="space-y-2 mb-4">
                                        {job.bullets.map((b, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-gray-300 text-sm"
                                            >
                                                <span className="text-blue-400 mt-1 shrink-0">▸</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-600/15 text-blue-300 text-xs rounded-full border border-blue-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
