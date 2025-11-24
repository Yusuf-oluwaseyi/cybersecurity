import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const workExperience = [
    {
        id: 1,
        company: "TechStudio Consult",
        role: "Cybersecurity Tutor",
        location: "Lagos, Nigeria",
        period: "Oct 2024 - Present",
        details: [
            "Delivered comprehensive training programs preparing students for cybersecurity certifications, emphasizing SIEM administration fundamentals and incident response best practices.",
            "Mentored students in building home labs using virtualization and open-source security tools to enhance their abilities in monitoring and analyzing security events.",
            "Provided exam strategies, career advice, and continuous learning support to develop foundational skills in threat intelligence and digital forensics."
        ]
    },
    {
        id: 2,
        company: "NerdzFactory Company",
        role: "Cybersecurity Tutor (Remote)",
        location: "Remote",
        period: "Jun 2025 - Aug 2025",
        details: [
            "Delivered advanced, practice-driven cybersecurity training that equipped participants with skills in ethical hacking, threat detection, digital forensics, and initial incident response procedures.",
            "Conducted a 9-week hands-on training program covering ethical hacking, red/blue team operations, threat intelligence, malware analysis, and digital forensics.",
            "Instructed on SIEM platform use (Splunk) and tactical applications including honeypots (T-Pot), MITRE ATT&CK mapping, phishing simulations, and secure network design.",
            "Supervised capstone projects simulating real-world cyberattacks and incident response scenarios."
        ]
    },
    {
        id: 3,
        company: "GRCAfriq",
        role: "GRC Analyst (Remote)",
        location: "Remote",
        period: "Aug 2024 - Jan 2025",
        details: [
            "Supported the implementation and maintenance of Information Security Management Systems (ISMS) and conducted system audits to ensure compliance with ISO 27001.",
            "Coordinated and conducted 12+ ISO 27001 audits, remediating 15+ control gaps and reducing risk exposure by 40%.",
            "Assessed third-party risk management for 10+ vendors using GRC tools, ensuring full policy compliance.",
            "Drafted GDPR and NDPA data protection policies grounded in information security principles, cutting privacy incidents by 25%.",
            "Supported ISMS implementation with 95% alignment to ISO 27001 standards."
        ]
    },
    {
        id: 4,
        company: "Sentient Networks Limited",
        role: "Network Engineer",
        location: "Lagos, Nigeria",
        period: "Aug 2024 - Nov 2024",
        details: [
            "Designed and maintained secure network infrastructures, enforcing ISO 27001-aligned policies that blocked 50+ unauthorized access attempts monthly.",
            "Monitored network traffic using Wireshark and NAGIOS, resolving bottlenecks to improve efficiency by 30%.",
            "Configured firewalls and routers to comply with PCI DSS requirements, ensuring zero audit findings during annual assessments.",
            "Optimised network performance using Wireshark and NAGIOS, resolving bottlenecks to improve uptime by 30%."
        ]
    },
    {
        id: 5,
        company: "TotalEnergies",
        role: "Legal & Compliance Intern",
        location: "Lagos, Nigeria",
        period: "Mar 2023 - Aug 2023",
        details: [
            "Worked with the legal department, involved in GDPR and NDPR research, Confidentiality agreement and drafting of Board of resolution.",
            "Conducted research on GDPR and NDPR compliance, ensuring adherence to data privacy regulations.",
            "Drafted confidentiality agreements and board resolutions, supporting the legal department in maintaining data confidentiality."
        ]
    }
];

const WorkItem = ({ work, isOpen, toggleOpen }) => {
    return (
        <div
            className="work-item"
            onClick={() => toggleOpen(work.id)}
            style={{
                borderTop: '1px solid rgba(0,0,0,0.1)',
                padding: '40px 0',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
            }}
        >
            <div className="work-header" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', alignItems: 'baseline', gap: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#666' }}>
                    {work.period}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                    {work.company}
                    <span style={{ display: 'block', fontSize: '1rem', fontWeight: '400', marginTop: '5px', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
                        {work.role}
                    </span>
                </div>
                <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                    {work.location}
                    <span style={{ display: 'inline-block', marginLeft: '10px', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>+</span>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingTop: '30px', paddingLeft: 'calc(25% + 20px)', maxWidth: '80%' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {work.details.map((detail, index) => (
                                    <li key={index} style={{ marginBottom: '15px', position: 'relative', paddingLeft: '20px', fontSize: '1rem', lineHeight: '1.6', color: '#444' }}>
                                        <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', background: '#1C1C1C', borderRadius: '50%' }}></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Work = () => {
    const [openId, setOpenId] = useState(null);

    const toggleOpen = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="section works-section" style={{ padding: '150px 40px 100px', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ marginBottom: '100px' }}>
                    <TextReveal>
                        <h1 className="massive-text" style={{ fontSize: '10vw', lineHeight: 0.9, textTransform: 'uppercase', fontWeight: 800, color: '#1C1C1C' }}>
                            Selected <br />
                            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 400 }}>Experience</span>
                        </h1>
                    </TextReveal>
                </div>

                <div className="work-list">
                    {workExperience.map((work) => (
                        <WorkItem key={work.id} work={work} isOpen={openId === work.id} toggleOpen={toggleOpen} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
