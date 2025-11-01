import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }> = [];

        const connections: Array<{
            x: number;
            y: number;
            angle: number;
            length: number;
            speed: number;
        }> = [];

        // Create particles
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }

        // Create geometric connections
        for (let i = 0; i < 15; i++) {
            connections.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                angle: Math.random() * Math.PI * 2,
                length: Math.random() * 150 + 100,
                speed: (Math.random() - 0.5) * 0.005,
            });
        }

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 15, 30, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw geometric connections
            connections.forEach((conn) => {
                conn.angle += conn.speed;
                const endX = conn.x + Math.cos(conn.angle) * conn.length;
                const endY = conn.y + Math.sin(conn.angle) * conn.length;

                ctx.beginPath();
                ctx.moveTo(conn.x, conn.y);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = 'rgba(202, 162, 74, 0.1)';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Draw nodes at connection points
                ctx.beginPath();
                ctx.arc(conn.x, conn.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(202, 162, 74, 0.3)';
                ctx.fill();
            });

            // Update and draw particles
            particles.forEach((particle, i) => {
                // Mouse interaction
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    particle.vx -= (dx / distance) * force * 0.2;
                    particle.vy -= (dy / distance) * force * 0.2;
                }

                particle.x += particle.vx;
                particle.y += particle.vy;

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(202, 162, 74, ${particle.opacity})`;
                ctx.fill();

                // Draw connections between nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[j].x - particle.x;
                    const dy = particles[j].y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(202, 162, 74, ${0.15 * (1 - distance / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }

                // Damping
                particle.vx *= 0.99;
                particle.vy *= 0.99;
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
};
