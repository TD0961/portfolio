import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-blue-500 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        On Deployment...
      </motion.h1>
      <motion.p
        className="text-gray-300 text-xl md:text-2xl text-center animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      >
        Soon Live
      </motion.p>
    </section>
  );
};

export default ComingSoon;
