import React from 'react';
import TextReveal from '../components/TextReveal';

const ContactPage = () => {
    return (
        <div className="contact-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '150px' }}>
            <section className="contact container">
                <TextReveal>
                    <h1 className="contact-title massive-text" style={{ fontSize: '8vw', lineHeight: 0.9, fontWeight: 800, color: '#1C1C1C' }}>
                        <span className="font-sec" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', display: 'block' }}>Let's collaborate</span>
                        <span>and secure the future</span>
                    </h1>
                </TextReveal>
            </section>

            <footer className="contact-footer container" style={{ paddingBottom: '60px' }}>
                <div className="contact-footer__flex" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', marginTop: '100px' }}>

                    {/* Column 1: Socials Label */}
                    <div className="contact-footer__col">
                        <div className="contact-footer__item">
                            <p className="contact-footer__title" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>
                                Socials
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Social Links */}
                    <div className="contact-footer__col">
                        <div className="contact-footer__item" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <a href="https://www.linkedin.com/in/yusuf-oluwaseyifunmi/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ fontSize: '1.5rem', color: '#1C1C1C', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                LinkedIn
                                <span style={{ fontSize: '1rem' }}>↗</span>
                            </a>
                            <a href="https://github.com/Yusuf-oluwaseyi" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ fontSize: '1.5rem', color: '#1C1C1C', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                GitHub
                                <span style={{ fontSize: '1rem' }}>↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Contact Label */}
                    <div className="contact-footer__col">
                        <div className="contact-footer__item">
                            <p className="contact-footer__title" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>
                                Contact
                            </p>
                        </div>
                    </div>

                    {/* Column 4: Email */}
                    <div className="contact-footer__col">
                        <div className="contact-footer__item">
                            <a href="mailto:oluwaseyifunmiyusufofficial@gmail.com" className="contact-link" style={{ fontSize: '1.5rem', color: '#1C1C1C', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                oluwaseyifunmiyusufofficial@gmail.com
                                <span style={{ fontSize: '1rem' }}>↗</span>
                            </a>
                            <p style={{ fontFamily: 'var(--font-mono)', marginTop: '10px', color: '#1C1C1C' }}>+2347071786268</p>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default ContactPage;
