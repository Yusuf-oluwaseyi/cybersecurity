import { jsPDF } from "jspdf";

export const generateCV = () => {
    const doc = new jsPDF();
    const lineHeight = 5;
    let y = 10;

    // Helper to add text and increment y
    const addText = (text, fontSize = 10, isBold = false, indent = 0) => {
        doc.setFontSize(fontSize);
        doc.setFont("helvetica", isBold ? "bold" : "normal");

        const splitText = doc.splitTextToSize(text, 180 - indent); // Wrap text

        // Check for page break
        if (y + (splitText.length * lineHeight) > 280) {
            doc.addPage();
            y = 10;
        }

        doc.text(splitText, 15 + indent, y);
        y += (splitText.length * lineHeight) + 2;
    };

    // Header
    addText("OLUWASEYIFUNMI O. YUSUF", 16, true);
    addText("Lagos, Nigeria. | +2347071786268 | oluwaseyifunmiyusufofficial@gmail.com", 10, false);
    addText("LinkedIn.com | GitHub", 10, false);
    y += 5;

    // Professional Summary
    addText("PROFESSIONAL SUMMARY", 12, true);
    addText("GRC Junior Analyst with experience managing SOC 1, SOC 2, ISO/IEC 27001, and CSA STAR compliance programs. Developed and updated policies, control designs, and risk treatment plans to ensure ongoing regulatory alignment. Conducted risk assessments and maintained risk registers, closing 15+ control gaps and reducing exposure by 40%. Streamlined audit readiness processes, managed external auditor engagements, and communicated compliance metrics to leadership.");
    y += 3;

    // Core Competencies
    addText("CORE COMPETENCIES", 12, true);
    addText("• Operational & Incident Response: Threat Intelligence, Incident Response, Vulnerability Management, Penetration Testing, Malware Analysis, Digital Forensics", 10, false, 5);
    addText("• Security Administration: SIEM Administration, Splunk, ELK, QRadar, Firewall, IDS/IPS, VPN Configuration, Network & Endpoint Security Hardening", 10, false, 5);
    addText("• Cloud & Identity Management: Cloud Security, AWS, Azure, GCP, Identity & Access Management, IAM, MFA, Zero Trust", 10, false, 5);
    addText("• Compliance & Governance: Security Policy Development, Risk Assessment, GDPR, HIPAA, PCI DSS, NIST, ISO 27001, Audit Coordination", 10, false, 5);
    y += 3;

    // Professional Experience
    addText("PROFESSIONAL EXPERIENCE", 12, true);

    addText("TechStudio Consult | Cybersecurity Tutor | Oct 2024 - Present", 11, true);
    addText("• Delivered comprehensive training programs preparing students for cybersecurity certifications.", 10, false, 5);
    addText("• Mentored students in building home labs using virtualization and open-source security tools.", 10, false, 5);
    y += 2;

    addText("NerdzFactory Company | Cybersecurity Tutor (Remote) | Jun 2025 - Aug 2025", 11, true);
    addText("• Delivered advanced, practice-driven cybersecurity training in ethical hacking and threat detection.", 10, false, 5);
    addText("• Conducted a 9-week hands-on training program covering ethical hacking, red/blue team operations.", 10, false, 5);
    addText("• Instructed on SIEM platform use (Splunk) and tactical applications including honeypots.", 10, false, 5);
    y += 2;

    addText("GRCAfriq | GRC Analyst (Remote) | Aug 2024 - Jan 2025", 11, true);
    addText("• Supported ISMS implementation and conducted system audits for ISO 27001 compliance.", 10, false, 5);
    addText("• Coordinated 12+ ISO 27001 audits, remediating 15+ control gaps.", 10, false, 5);
    addText("• Assessed third-party risk management for 10+ vendors using GRC tools.", 10, false, 5);
    y += 2;

    addText("Sentient Networks Limited | Network Engineer | Aug 2024 - Nov 2024", 11, true);
    addText("• Designed and maintained secure network infrastructures, enforcing ISO 27001-aligned policies.", 10, false, 5);
    addText("• Monitored network traffic using Wireshark and NAGIOS, resolving bottlenecks.", 10, false, 5);
    y += 2;

    addText("TotalEnergies | Legal & Compliance Intern | Mar 2023 - Aug 2023", 11, true);
    addText("• Conducted research on GDPR and NDPR compliance.", 10, false, 5);
    y += 3;

    // Education
    addText("EDUCATION", 12, true);
    addText("Federal University of Technology, Akure | B.Sc. Cybersecurity | Sep 2017 - Apr 2024", 10, false);
    y += 3;

    // Projects
    addText("PROJECTS", 12, true);
    addText("• Data Privacy Job Simulation (DLA Piper): Analysed data breach scenarios, advised on GDPR compliance.", 10, false, 5);
    addText("• Active Directory Security & Monitoring: Built secured AD domain, enforced GPOs, integrated with Splunk.", 10, false, 5);
    addText("• SIEM Implementation with Wazuh: Developed custom rules to detect anomalous activities.", 10, false, 5);
    y += 3;

    // Certifications
    addText("CERTIFICATIONS", 12, true);
    addText("• CompTIA Security+ (Ongoing)", 10, false, 5);
    addText("• Microsoft Certified: Azure Administrator Associate (Ongoing)", 10, false, 5);
    addText("• Certified Network Security Practitioner (CNSP) - 04/2025", 10, false, 5);
    addText("• ISO/IEC 27001 Information Security Associate - 09/2024", 10, false, 5);
    addText("• ISC2 Certified in Cybersecurity (CC) - 08/2024", 10, false, 5);
    addText("• Google IT Support Professional Certificate - 07/2022", 10, false, 5);

    doc.save("Oluwaseyifunmi_Yusuf_CV.pdf");
};
