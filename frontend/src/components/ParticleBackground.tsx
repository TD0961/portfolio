import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let connectionDistance = 160;
        let count = 100;

        const initParticles = (newCount: number) => {
            const currentCount = particles.length;
            if (newCount > currentCount) {
                for (let i = 0; i < newCount - currentCount; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.45,
                        vy: (Math.random() - 0.5) * 0.45,
                        radius: Math.random() * 2 + 1,
                        opacity: Math.random() * 0.5 + 0.4,
                    });
                }
            } else if (newCount < currentCount) {
                particles = particles.slice(0, newCount);
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const width = window.innerWidth;
            if (width < 768) {
                count = 18; // Mobile
                connectionDistance = 70;
            } else if (width < 1024) {
                count = 35; // Tablet
                connectionDistance = 100;
            } else {
                count = 55; // Desktop (Dispersed/Clean look)
                connectionDistance = 120;
            }
            initParticles(count);
        };

        resize();
        window.addEventListener("resize", resize);

        let animId: number;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isMobile = window.innerWidth < 768;

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Outer glow
                ctx.shadowBlur = isMobile ? 12 : 28;
                ctx.shadowColor = `rgba(147, 197, 253, 0.9)`;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(219, 234, 254, ${p.opacity})`;
                ctx.fill();

                // Reset shadow before lines
                ctx.shadowBlur = 0;
            }

            // Connecting lines with subtle glow
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.35;
                        ctx.shadowBlur = 6;
                        ctx.shadowColor = `rgba(96, 165, 250, 0.6)`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                        ctx.shadowBlur = 0;
                    }
                }
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default ParticleBackground;
