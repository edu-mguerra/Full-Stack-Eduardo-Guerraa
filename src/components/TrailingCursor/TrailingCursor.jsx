import { useEffect, useRef } from 'react';
import './app.css'

const NUM_CIRCLES = 7;
const RADIUS = 30;

export default function TrailingCursor() {
    const circleRefs = useRef([]);
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const angleOffsets = useRef(
        Array(NUM_CIRCLES).fill(0).map((_, i) => (i * (2 * Math.PI)) / NUM_CIRCLES)
    );
    const rotation = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        document.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            rotation.current += 0.02;

            for (let i = 0; i < NUM_CIRCLES; i++) {
                const angle = rotation.current + angleOffsets.current[i];
                const x = mouse.current.x + RADIUS * Math.cos(angle);
                const y = mouse.current.y + RADIUS * Math.sin(angle);

                const el = circleRefs.current[i];
                if (el) {
                    el.style.transform = `translate(${x - 5}px, ${y - 5}px)`; //
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {Array.from({ length: NUM_CIRCLES }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (circleRefs.current[i] = el)}
                    className="orbit-circle"
                />
            ))}
        </>
    );
};


