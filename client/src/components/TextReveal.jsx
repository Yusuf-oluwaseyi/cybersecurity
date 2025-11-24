import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className, delay = 0 }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        const text = textRef.current;

        gsap.fromTo(text,
            { y: '100%' },
            {
                y: '0%',
                duration: 1.5,
                ease: 'power4.out',
                delay: delay,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%', // Trigger when top of element hits 90% of viewport height
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, [delay]);

    return (
        <div ref={containerRef} className={className} style={{ overflow: 'hidden' }}>
            <div ref={textRef} style={{ transform: 'translateY(100%)' }}>
                {children}
            </div>
        </div>
    );
};

export default TextReveal;
