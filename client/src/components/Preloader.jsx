import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        if (count === 100) {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            tl.to('.preloader-count', {
                opacity: 0,
                duration: 0.5,
                delay: 0.2
            })
                .to('.preloader-text', {
                    opacity: 1,
                    duration: 0.1,
                    repeat: 3,
                    yoyo: true
                })
                .to('.preloader', {
                    yPercent: -100, // Slide up completely
                    duration: 1.5,
                    ease: 'power4.inOut', // Match huyml easing
                    delay: 0.5
                });
        }

        return () => clearInterval(interval);
    }, [count, onComplete]);

    return (
        <div className="preloader" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#F0F0F0', // Light theme bg
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#1A1A1A', // Dark text
            fontFamily: 'var(--font-mono)'
        }}>
            <div className="preloader-count" style={{ fontSize: '5rem', fontWeight: 'bold' }}>
                {count}%
            </div>
            <div className="preloader-text" style={{
                position: 'absolute',
                opacity: 0,
                fontSize: '4vw', // Smaller than before, cleaner
                fontWeight: '600',
                fontFamily: 'var(--font-display)',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#1A1A1A'
            }}>
                Oluwaseyifunmi Yusuf — GRC Analyst from Nigeria
            </div>
        </div>
    );
};

export default Preloader;
