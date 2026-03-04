import type { Metadata } from "next";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "BBIT Courses & Programmes 2026",
    description: "Explore all 11 undergraduate, postgraduate and diploma programmes at Budge Budge Institute of Technology (BBIT), Kolkata. Check eligibility and career prospects.",
};

const WA = "https://wa.me/917011142521?text=Hi%2C%20I%20want%20details%20about%20";

const programs = [
    {
        category: "B.Tech Programmes (4 Years)",
        desc: "Premier engineering degrees affiliated with MAKAUT, WB and approved by AICTE. Focus on industry-readiness and technical excellence.",
        courses: [
            { icon: "💻", title: "Computer Science & Engineering", code: "CSE", duration: "4 Years", seats: "120", description: "Top-tier placement in MNCs, focus on AI/ML, Cloud, and App Dev." },
            { icon: "🤖", title: "CSE (Artificial Intelligence)", code: "CSE-AI", duration: "4 Years", seats: "60", description: "Specialized training in neural nets, predictive modeling, and AI ethics." },
            { icon: "🔒", title: "CSE (Cyber Security)", code: "CSE-CS", duration: "4 Years", seats: "60", description: "Advanced focus on network security, ethical hacking, and data safety." },
            { icon: "📡", title: "Information Technology", code: "IT", duration: "4 Years", seats: "60", description: "Modern IT infrastructure, software engineering, and digital transformation focus." },
            { icon: "📻", title: "Electronics & Comm. Engg.", code: "ECE", duration: "4 Years", seats: "60", description: "Embedded systems, VLSI, and IoT. Bridge to both core and IT industries." },
            { icon: "⚡", title: "Electrical Engineering", code: "EE", duration: "4 Years", seats: "60", description: "Power systems, machines, and control engineering. Gate for PSUs." },
            { icon: "⚙️", title: "Mechanical Engineering", code: "ME", duration: "4 Years", seats: "60", description: "Robotics, Manufacturing, and Automobile focus. CAD/CAM training." },
            { icon: "🏗️", title: "Civil Engineering", code: "CE", duration: "4 Years", seats: "60", description: "Structural design, surveying, and construction management." },
        ]
    },
    {
        category: "Postgraduate & Diploma",
        desc: "Advanced specialisation for career growth and technical skill development.",
        courses: [
            { icon: "📊", title: "MBA", code: "MBA", duration: "2 Years", seats: "60", description: "Marketing, Finance, HR with industry project exposure and internships." },
            { icon: "🎓", title: "M.Tech Programs", code: "M.Tech", duration: "2 Years", seats: "18", description: "Specialisations in CSE, ECE, and EE for research and teaching careers." },
            { icon: "🔧", title: "Polytechnic Diploma", code: "Diploma", duration: "3 Years", seats: "Various", description: "Practical engineering skills for immediate industry entry after 10th/12th." },
        ]
    }
];

export default function CoursesPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge--gold">BBIT Programmes</span>
                        <h1 className={styles.title}>All Courses at <span className="heroHeadingGold">BBIT Kolkata</span></h1>
                        <p className={styles.subtitle}>
                            Detailed information on all 11 programmes — eligibility, career scope, and seat availability.
                            Get free guidance to choose your ideal engineering path.
                        </p>
                    </div>
                </div>
            </section>

            {programs.map((group, idx) => (
                <section key={group.category} className={`section ${idx % 2 !== 0 ? "section--light" : ""}`}>
                    <div className="container">
                        <div className="section-hd">
                            <span className="section-eyebrow">{group.category}</span>
                            <div className="gold-line" />
                            <h2 className="section-title">{group.category}</h2>
                            <p className="section-desc">{group.desc}</p>
                        </div>

                        <div className="grid-3">
                            {group.courses.map((c) => (
                                <CourseCard key={c.code} {...c} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section className="section">
                <div className="container">
                    <div className={styles.eligCard}>
                        <div className={styles.eligIcon}>ℹ️</div>
                        <div className={styles.eligContent}>
                            <h3 className={styles.eligTitle}>General Eligibility for B.Tech</h3>
                            <p className={styles.eligText}>
                                Candidates must have passed 10+2 with Physics, Mathematics, and one of Chemistry/Biology/Biotechnology/Technical Vocational subject.
                                Min 45% marks (40% for SC/ST/OBC) in these subjects. While a rank in <strong>WBJEE</strong> or <strong>JEE Main</strong> is preferred, it is not mandatory. Direct admission is also available for eligible candidates.
                            </p>
                            <div className={styles.eligAction}>
                                <a href={WA + "B.Tech%20Eligibility"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Verify Your Eligibility
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
