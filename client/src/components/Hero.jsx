import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';
import { generateCV } from '../utils/generateCV';
import Lottie from "lottie-react";
import animationData from "../assets/lottie/3.json";

// ... (MenuLink component remains the same)

const Hero = ({ hoveredMenu, setHoveredMenu }) => {
    return (
        <div className="wrapper" style={{ height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Overlay is in App.jsx */}

            <section className="hello section" style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', position: 'relative', zIndex: 95, paddingTop: '140px' }}>
                <div className="hello-wrap" style={{ textAlign: 'center', width: '100%' }}>
                    <div className="hello-flex" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 className="hello-title massive-text" style={{ fontSize: '10vw', lineHeight: 0.85, textTransform: 'uppercase', fontWeight: 800, textAlign: 'center', width: '100%', wordBreak: 'keep-all', color: hoveredMenu ? '#FFF' : '#1C1C1C', transition: 'color 0.3s ease', letterSpacing: '-0.05em', fontFamily: 'var(--font-primary)', display: 'flex', justifyContent: 'center', gap: '0.2em', flexWrap: 'wrap' }}>
                            <TextReveal delay={0.5}>
                                <span className="font-sec" style={{ display: 'block', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>Oluwaseyifunmi</span>
                            </TextReveal>
                            <TextReveal delay={0.65}>
                                <span>Yusuf</span>
                            </TextReveal>
                        </h1>
                        <TextReveal delay={1.0}>
                            <p className="hello-sub" style={{ fontSize: '1.5rem', marginTop: '10px', fontFamily: 'var(--font-mono)', color: hoveredMenu ? '#FFF' : '#1C1C1C', transition: 'color 0.3s ease' }}>
                                <span>(GRC Analyst and Cybersecurity Professional)</span>
                            </p>
                        </TextReveal>

                        {/* CV Download Button */}
                        <div style={{ marginTop: '30px', pointerEvents: 'auto', marginBottom: '0px' }}>
                            <button
                                onClick={generateCV}
                                style={{
                                    padding: '10px 25px',
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-mono)',
                                    background: 'transparent',
                                    border: '1px solid #1C1C1C',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    color: hoveredMenu ? '#FFF' : '#1C1C1C',
                                    borderColor: hoveredMenu ? '#FFF' : '#1C1C1C'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = hoveredMenu ? '#FFF' : '#1C1C1C';
                                    e.target.style.color = hoveredMenu ? '#000' : '#FFF';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = hoveredMenu ? '#FFF' : '#1C1C1C';
                                }}
                            >
                                Download CV
                            </button>
                        </div>

                        {/* Sitting Animation */}
                        <div style={{ width: '800px', height: '800px', marginTop: '-100px', filter: 'invert(1)' }}>
                            <Lottie animationData={animationData} loop={true} style={{ height: '100%' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="person section" style={{ padding: '20px 40px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <div className="person-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '40px', alignItems: 'center' }}>
                    <div className="person-col2" style={{ textAlign: 'center' }}>
                        <div className="person-circle" style={{ width: '80px', height: '80px', background: '#000', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                        <div className="person-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', maxWidth: '200px', margin: '0 auto' }}>
                            Oluwaseyifunmi (he/him) is a GRC Analyst and Network Engineer from Lagos, Nigeria.
                        </div>
                    </div>
                    <div className="person-col4" style={{ textAlign: 'center' }}>
                        {/* Animation moved to Hero section */}
                    </div>
                    <div className="person-col2" style={{ textAlign: 'center' }}>
                        <div className="person-circle" style={{ width: '80px', height: '80px', background: '#000', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                        <div className="person-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', maxWidth: '200px', margin: '0 auto' }}>
                            Passionate about bridging the gap between technical security and strategic compliance.
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-clone" style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <div className="container">
                    <div className="footer-flex" style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                        <p className="footer-content">Just an ordinary GRC Analyst.</p>
                        <p className="footer-content">From Lagos with love.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
