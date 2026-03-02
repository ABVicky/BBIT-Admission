import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Training & Career Support at BBIT | Industry Ready Engineers",
    description: "Learn about the extensive training programs at BBIT Kolkata — including soft skills, aptitude training, industry workshops, and the 4-year career roadmap.",
};

const trainingModules = [
    { icon: "📢", title: "Soft Skills & Communication", desc: "Expert-led sessions to improve professional language, body language, and interview skills from 1st year." },
    { icon: "🧩", title: "Aptitude & Logical Reasoning", desc: "Focus on problem-solving, numerical ability, and logical thinking required for top MNC recruitment tests." },
    { icon: "💻", title: "Technical Upskilling", desc: "Special batches for C++, Java, Python, AI/ML, and Data Structures to stay ahead in the tech industry." },
    { icon: "🏭", title: "Industry Certifications", desc: "Collaborations with global tech leaders for certified training in emerging technologies." },
];

export default function TrainingPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge--gold">Career Readiness</span>
                        <h1 className={styles.title}>Training & <span className="heroHeadingGold">Skill Support</span></h1>
                        <p className={styles.subtitle}>
                            At BBIT, we don&apos;t just teach engineering; we build careers. Our specialized
                            Training & Placement (T&P) cell works from Day 1 to make you industry-ready.
                        </p>
                    </div>
                </div>
            </section>

            {/* Roadmap Section */}
            <section className="section">
                <div className="container">
                    <div className="section-hd text-center">
                        <span className="section-eyebrow">The 4-Year Journey</span>
                        <div className="gold-line gold-line--center" />
                        <h2 className="section-title">Your Career Roadmap at BBIT</h2>
                    </div>
                    <div className={styles.roadmapGrid}>
                        {[
                            { year: "1st Year", focus: "Foundation & Language", icon: "🌱", items: ["Spoken English", "Basic Quant", "Personality Development"] },
                            { year: "2nd Year", focus: "Core Technical Skills", icon: "🌿", items: ["Advanced Coding", "Core Domain workshops", "Logical Reasoning"] },
                            { year: "3rd Year", focus: "Pre-Placement Training", icon: "🌳", items: ["Mock Interviews", "Company Specific Prep", "Mini Projects"] },
                            { year: "4th Year", focus: "Corporate Entry", icon: "🏢", items: ["Final Placements", "Internships", "MNC Assessment Tests"] },
                        ].map(r => (
                            <div key={r.year} className={styles.roadCard}>
                                <div className={styles.roadIcon}>{r.icon}</div>
                                <h3 className={styles.roadYear}>{r.year}</h3>
                                <div className={styles.roadFocus}>{r.focus}</div>
                                <div className={styles.roadItems}>
                                    {r.items.map(i => <div key={i} className={styles.roadItem}>✓ {i}</div>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Modules */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-hd text-center">
                        <h2 className="section-title">Specialised Training Modules</h2>
                    </div>
                    <div className="grid-2">
                        {trainingModules.map(m => (
                            <div key={m.title} className={styles.trainCard}>
                                <div className={styles.trainIcon}>{m.icon}</div>
                                <div className={styles.trainContent}>
                                    <h3 className={styles.trainTitle}>{m.title}</h3>
                                    <p className={styles.trainDesc}>{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
