import React from 'react';
import TextReveal from './TextReveal';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-wave-container">
                <TextReveal>
                    <h1 className="footer-wave-text">OPEN FOR GRC AND SECURITY ROLES</h1>
                </TextReveal>
            </div>

            <div className="footer-content container">
                <div className="footer-links">
                    <TextReveal>
                        <a href="mailto:oluwaseyifunmiyusufofficial@gmail.com" className="email-link" style={{ color: '#1A1A1A' }}>
                            oluwaseyifunmiyusufofficial@gmail.com
                        </a>
                    </TextReveal>
                    <div className="social-links">
                        <TextReveal delay={0.1}>
                            <a href="https://www.linkedin.com/in/yusuf-oluwaseyifunmi/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px', color: '#1A1A1A' }}>LINKEDIN</a>
                            <a href="https://github.com/Yusuf-oluwaseyi" target="_blank" rel="noopener noreferrer" style={{ color: '#1A1A1A' }}>GITHUB</a>
                        </TextReveal>
                    </div>
                </div>
                <div className="footer-bottom">
                    <TextReveal delay={0.2}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: '#666' }}>
                            <p>&copy; 2025 Oluwaseyifunmi Yusuf</p>
                        </div>
                    </TextReveal>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
