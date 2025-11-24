import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page-container">
            {/* Intro Section */}
            <section className="about sec-animate" style={{ padding: '150px 0 100px' }}>
                <div className="container">
                    <h3 className="about-title">
                        <span className="dot dot-white"></span>
                        Based in Lagos, Nigeria. I am a GRC Analyst and Network Engineer dedicated to securing digital infrastructures and ensuring strategic compliance.
                    </h3>
                    <div className="about-image">
                        <div className="about-mask img1">
                            <img src="https://placehold.co/1216x1555/1a1a1a/FFF?text=GRC+Focus" alt="GRC Focus" className="lazyload" />
                        </div>
                        <div className="about-mask img2">
                            <img src="https://placehold.co/1216x1555/1a1a1a/FFF?text=Network+Security" alt="Network Security" className="lazyload" />
                        </div>
                        <div className="about-mask img3">
                            <img src="https://placehold.co/1216x1555/1a1a1a/FFF?text=Strategy" alt="Strategy" className="lazyload" />
                        </div>
                    </div>
                    <div className="about-hobby">
                        Enthusiastic about crafting
                        <span className="font-sec"> security frameworks, </span>
                        <span className="font-sec">risk assessments,</span>
                        <span className="font-sec">compliance strategies,</span>
                        and
                        <span className="font-sec">network architectures</span>
                        into resilient systems.
                    </div>
                    <div className="about-text">This is me, doing my daily things</div>
                </div>
            </section>

            {/* Hobbies Section */}
            <section className="about-full sec-animate hobby">
                <div className="container">
                    <div className="hobby-flex">
                        <div className="hobby-image">
                            {/* Placeholder images for hobbies */}
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div key={num} className="hobby-image__item">
                                    <img src={`https://placehold.co/783x1080/222/FFF?text=Hobby+${num}`} alt={`Hobby ${num}`} />
                                </div>
                            ))}
                        </div>
                        <div className="hobby-list">
                            <h3 className="hobby-content">
                                <span className="hobby-hover active">
                                    <span>Cybersecurity</span>
                                </span>
                                <span> enthusiast,</span>
                            </h3>
                            <h3 className="hobby-content">
                                <span className="hobby-hover">
                                    <span>Tech</span>
                                </span>
                                <span> explorer,</span>
                            </h3>
                            <h3 className="hobby-content">
                                addicted to
                                <span className="hobby-hover">
                                    <span> Problem Solving</span>
                                </span>
                            </h3>
                            <h3 className="hobby-content">
                                and a lifelong
                                <span className="hobby-hover">
                                    <span> Learner.</span>
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="sec-animate process parallax-section" id="section-sticky">
                <div className="container">
                    <div className="process-flex">
                        <div className="process-fixed">
                            <div className="process-inner">
                                <h3 className="process-title">
                                    <span className="dot"></span>
                                    Risk Management, Compliance Auditing, Network Security, Incident Response, Cloud Security, Policy Development.
                                </h3>
                            </div>
                        </div>
                        <div className="process-list">
                            <div className="process-list__item">
                                <div className="process-list__title"><span>(a)</span></div>
                                <div className="process-list__text">
                                    <div className="process-list__title"><span>Assessment</span></div>
                                    <div className="process-list__desc">
                                        Understanding the organization's landscape is crucial. I begin by identifying assets, threats, and vulnerabilities. This stage involves thorough risk assessments and gap analyses against standards like ISO 27001 and NIST to determine the current security posture.
                                    </div>
                                </div>
                            </div>
                            <div className="process-list__item">
                                <div className="process-list__title"><span>(b)</span></div>
                                <div className="process-list__text">
                                    <div className="process-list__title"><span>Strategy</span></div>
                                    <div className="process-list__desc">
                                        Based on the assessment, I develop a tailored GRC strategy. This includes defining security policies, selecting appropriate controls, and designing a roadmap for compliance and risk mitigation that aligns with business objectives.
                                    </div>
                                </div>
                            </div>
                            <div className="process-list__item">
                                <div className="process-list__title"><span>(c)</span></div>
                                <div className="process-list__text">
                                    <div className="process-list__title"><span>Implementation</span></div>
                                    <div className="process-list__desc">
                                        I oversee the deployment of security controls and technologies. Whether it's configuring firewalls, setting up SIEM solutions like Splunk, or establishing access controls, I ensure that the theoretical strategy is effectively translated into operational reality.
                                    </div>
                                </div>
                            </div>
                            <div className="process-list__item">
                                <div className="process-list__title"><span>(d)</span></div>
                                <div className="process-list__text">
                                    <div className="process-list__title"><span>Monitoring</span></div>
                                    <div className="process-list__desc">
                                        Security is an ongoing process. I implement continuous monitoring mechanisms to detect anomalies and ensure ongoing compliance. Regular audits and reviews help in adapting to new threats and maintaining a robust security posture.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards/Certifications Section */}
            <section className="award-full sec-animate">
                <div className="container">
                    <div className="award">
                        <div className="award-title">
                            <span class="dot"></span>
                            <h3>
                                Continuous professional development is key in cybersecurity. Here are some of the certifications and recognitions I have achieved.
                            </h3>
                        </div>
                        <div className="award-table">
                            {[
                                { org: "CompTIA", title: "Security+", year: "Ongoing" },
                                { org: "Microsoft", title: "Azure Administrator Associate", year: "Ongoing" },
                                { org: "Forage", title: "DLA Piper Global Cyber Job Simulation", year: "11/2025" },
                                { org: "Elastic", title: "Security For SIEM (On-Demand)", year: "10/2025" },
                                { org: "The SecOps Group", title: "Certified Network Security Practioner (CNSP)", year: "04/2025" },
                                { org: "APMG", title: "ISO/IEC 20000 IT Service Management", year: "01/2025" },
                                { org: "APMG", title: "ISO/IEC 27001 Information Security", year: "09/2024" },
                                { org: "ISC2", title: "Certified in Cybersecurity (CC)", year: "08/2024" },
                                { org: "Google", title: "IT Support Professional Certificate", year: "07/2022" },
                            ].map((item, index) => (
                                <div className="award-item" key={index}>
                                    <div className="award-item__line"></div>
                                    <div className="award-item__content">
                                        <div className="award-item__text">{item.org}</div>
                                        <div className="award-item__text award-item__title">{item.title}</div>
                                        <div className="award-item__text">{item.year}</div>
                                    </div>
                                </div>
                            ))}
                            <div className="award-item__line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients sec-animate">
                <div className="container">
                    <div className="clients-wrap">
                        <h1 className="clients-title">
                            I have had the privilege of working with various organizations to enhance their security posture.
                        </h1>
                        <ul className="clients-list">
                            <li className="clients-item">GRCAfriq</li>
                            <li className="clients-item">Sentient Networks</li>
                            <li className="clients-item">TechStudio</li>
                            <li className="clients-item">TotalEnergies</li>
                            <li className="clients-item">Lagos State Gov</li>
                            <li className="clients-item">Access Bank</li>
                            <p className="clients-more">And more...</p>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Email Section */}
            <section className="about-full email sec-animate">
                <div className="email-wrap about-full__inner">
                    <div className="email-top">
                        <p>Don't be shy.</p>
                        <a href="mailto:oluwaseyifunmi@example.com">
                            <span className="font-sec">Say</span>
                            <span> Hello </span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
