import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "BBIT Placement Statistics & Recruiters",
    description: "Check official placement statistics of BBIT Kolkata. Highest package 15 LPA, 90%+ placement rate, and 200+ top recruiters including TCS, Infosys, and Wipro.",
};

const stats = [
    { label: "Overall Placement", num: "90%+" },
    { label: "Recruiting Companies", num: "200+" },
    { label: "Highest Package", num: "15 LPA" },
    { label: "Average Package", num: "5.0 LPA" },
];

const recruiters = [
    "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Tech Mahindra", "Accenture", "IBM",
    "Capgemini", "L&T", "Deloitte", "Siemens", "BHEL", "WBSEDCL", "Oracle", "Amazon",
    "Paytm", "Zomato", "Byju's", "Mindtree", "Virtusa", "Persistent", "Hexaware", "Publicis Sapient"
];

const branchStats = [
    { branch: "Comp. Science (CSE)", rate: 96, avg: "5.2 LPA", highest: "15 LPA" },
    { branch: "Information Tech (IT)", rate: 94, avg: "5.0 LPA", highest: "12 LPA" },
    { branch: "Electronics (ECE)", rate: 88, avg: "4.5 LPA", highest: "10 LPA" },
    { branch: "Electrical (EE)", rate: 82, avg: "4.2 LPA", highest: "8 LPA" },
    { branch: "Mechanical (ME)", rate: 80, avg: "4.0 LPA", highest: "7.5 LPA" },
    { branch: "Civil (CE)", rate: 78, avg: "3.8 LPA", highest: "6 LPA" },
];

export default function PlacementsPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge--gold">Official Records</span>
                        <h1 className={styles.title}>Placements at <span className="heroHeadingGold">BBIT Kolkata</span></h1>
                        <p className={styles.subtitle}>
                            Consistently strong placement outcomes year after year. Our dedicated Training & Placement Cell
                            ensures every student is industry-ready with skills that matter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Ribbon */}
            <section className={styles.statsStrip}>
                <div className="container">
                    <div className={styles.statsRow}>
                        {stats.map(s => (
                            <div key={s.label} className={styles.statItem}>
                                <div className={styles.statNum}>{s.num}</div>
                                <div className={styles.statLabel}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branch Wise */}
            <section className="section">
                <div className="container">
                    <div className="section-hd text-center">
                        <span className="section-eyebrow">Data by Branch</span>
                        <div className="gold-line gold-line--center" />
                        <h2 className="section-title">Branch-wise Placement Stats</h2>
                    </div>
                    <div className={styles.branchGrid}>
                        {branchStats.map(b => (
                            <div key={b.branch} className={styles.branchCard}>
                                <h3 className={styles.branchTitle}>{b.branch}</h3>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: `${b.rate}%` }} />
                                </div>
                                <div className={styles.branchMeta}>
                                    <div className={styles.metaBox}>
                                        <span className={styles.metaLabel}>Placement Rate</span>
                                        <span className={styles.metaVal}>{b.rate}%</span>
                                    </div>
                                    <div className={styles.metaBox}>
                                        <span className={styles.metaLabel}>Avg. Package</span>
                                        <span className={styles.metaVal}>{b.avg}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruiters */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-hd text-center">
                        <h2 className="section-title">Top Recruiting Companies</h2>
                        <p className="section-desc">Leading MNCs and core engineering firms recruit from BBIT campus.</p>
                    </div>
                    <div className={styles.recruiterGrid}>
                        {recruiters.map(r => (
                            <div key={r} className={styles.recruiterChip}>{r}</div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
