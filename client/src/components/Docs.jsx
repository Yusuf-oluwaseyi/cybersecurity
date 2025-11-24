import React from 'react';
import { motion } from 'framer-motion';

const Docs = () => {
    return (
        <section id="docs" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span style={{ color: 'var(--accent-color)' }}>&gt;&gt;</span> Documentation_Log
                </motion.h2>
                <div className="grid">
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>Incident Response Playbook</h3>
                        <p>Standard Operating Procedures (SOP) for handling ransomware and data breach incidents.</p>
                        <a href="#" className="btn">Read_File</a>
                    </motion.div>
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Third-Party Risk Assessment</h3>
                        <p>Methodology for evaluating vendor security posture and data handling practices.</p>
                        <a href="#" className="btn">Read_File</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Docs;
