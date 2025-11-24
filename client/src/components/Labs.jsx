import React from 'react';
import TextReveal from './TextReveal';

const labsData = [
    {
        id: 1,
        title: "Active Directory Security",
        subtitle: "Secured 10+ Users & GPO Enforcement",
        image: "https://placehold.co/400x400/EEE/333?text=AD+Security"
    },
    {
        id: 2,
        title: "DLA Piper Job Sim",
        subtitle: "Data Breach & Ransom Analysis",
        image: "https://placehold.co/400x400/EEE/333?text=DLA+Piper"
    },
    {
        id: 3,
        title: "SIEM with Wazuh",
        subtitle: "Custom Rules & Brute-Force Detection",
        image: "https://placehold.co/400x400/EEE/333?text=Wazuh"
    },
    {
        id: 4,
        title: "NerdzFactory Tutor",
        subtitle: "Ethical Hacking & Forensics Training",
        image: "https://placehold.co/400x400/EEE/333?text=Training"
    }
];

const Labs = () => {
    return (
        <section className="section labs-section" style={{ padding: '120px 40px' }}>
            <div className="container">
                <TextReveal>
                    <h2 style={{ fontSize: '1rem', marginBottom: '60px', color: '#666', fontFamily: 'var(--font-mono)' }}>03 / LABS</h2>
                </TextReveal>

                <div className="labs-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '40px'
                }}>
                    {labsData.map((lab) => (
                        <div key={lab.id} className="lab-item" style={{ cursor: 'pointer' }}>
                            <div className="lab-image" style={{
                                width: '100%',
                                height: '300px',
                                backgroundColor: '#E0E0E0',
                                marginBottom: '20px',
                                backgroundSize: 'cover',
                                backgroundImage: `url(${lab.image})`
                            }}></div>
                            <TextReveal>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{lab.title}</h3>
                            </TextReveal>
                            <TextReveal delay={0.1}>
                                <p style={{ fontFamily: 'var(--font-mono)', color: '#666' }}>{lab.subtitle}</p>
                            </TextReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Labs;
