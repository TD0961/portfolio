import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const Hero = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-center"
    >
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10 w-full h-full"
        init={particlesInit}
        options={{
          background: { color: { value: "#f9fafb" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#3b82f6" },
            links: { enable: true, color: "#3b82f6", distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            size: { value: 3 },
          },
        }}
      />

      <div className="z-10">
        <h1 className="text-5xl font-extrabold text-blue-600">Tensae Deme</h1>
        <p className="mt-4 text-lg text-gray-700">
          Full-Stack Developer & DevOps Engineer 🚀
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero
