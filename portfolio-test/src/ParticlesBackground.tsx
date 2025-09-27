import Particles from "@tsparticles/react";
import type { Options } from "tsparticles";
import type { RecursivePartial } from "tsparticles-engine";

const particlesOptions: RecursivePartial<Options> = {
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
};

export const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles-background"
      className="fixed inset-0 -z-10 w-full h-full"
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;