import { useEffect, useRef } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      const amount = Math.min(110, Math.floor(window.innerWidth / 14));

      particles = Array.from({ length: amount }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: Math.random() * 0.35 + 0.08,
        opacity: Math.random() * 0.7 + 0.2,
      }));
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 115) {
            context.beginPath();
            context.strokeStyle = `rgba(139, 92, 246, ${0.11 - distance / 1200})`;
            context.lineWidth = 1;
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.y > canvas.height + 10) particle.y = -10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.x < -10) particle.x = canvas.width + 10;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(167, 139, 250, ${particle.opacity})`;
        context.shadowBlur = 12;
        context.shadowColor = "rgba(139, 92, 246, 0.9)";
        context.fill();
      });

      context.shadowBlur = 0;
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="particle-canvas" ref={canvasRef} />;
}

export default ParticleBackground;
