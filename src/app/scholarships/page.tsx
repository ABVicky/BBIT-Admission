import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "BBIT Scholarships & WB Student Credit Card Information",
    description: "Learn about the various scholarships available at BBIT Kolkata including SVMCM, NSP, Oasis and the West Bengal Student Credit Card scheme.",
};

const scholarships = [
    {
        name: "SVMCM",
        fullName: "Swami Vivekananda Merit-cum-Means Scholarship",
        amount: "₹60,000 per year",
        elig: "60% in 10+2, Family income < 2.5L",
        desc: "The primary scholarship for West Bengal students with excellent merit."
    },
    {
        name: "NSP",
        fullName: "National Scholarship Portal (Central Govt.)",
        amount: "Varies (₹10,000 - ₹25,000)",
        elig: "Minority students, SC/ST, and MERIT categories.",
        desc: "Central Government support for various under-represented categories."
    },
    {
        name: "Kanyashree",
        fullName: "K3 Scholarship for Girl Students",
        amount: "₹25,000 per year",
        elig: "Girl students with 45% in graduation (for PG).",
        desc: "Empowering girl students for higher education in West Bengal."
    }
];

export default function ScholarshipsPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge--gold">Financial Support</span>
                        <h1 className={styles.title}>Scholarships & <span className="heroHeadingGold">Assistance</span></h1>
                        <p className={styles.subtitle}>
                            At BBIT, we believe financial constraints shouldn&apos;t stop brilliant minds.
                            Our guidance team helps you navigate all major state and central scholarships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Credit Card Banner */}
            <section className={styles.cardBanner}>
                <div className="container">
                    <div className={styles.cardBox}>
                        <div className={styles.cardInfo}>
                            <h2 className={styles.cardTitle}>West Bengal Student Credit Card</h2>
                            <p className={styles.cardDesc}>
                                Our administrative team provides full documentation support for the <strong>₹10 Lakh</strong> Student Credit Card scheme by the WB Government.
                            </p>
                            <div className={styles.cardBadges}>
                                <span>✅ Low Interest Rate</span>
                                <span>✅ 15 Year Repayment</span>
                                <span>✅ Covers Entire Course Fee</span>
                            </div>
                        </div>
                        <div className={styles.cardAction}>
                            <a href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20about%20Student%20Credit%20Card%20at%20BBIT" className="btn btn-gold btn-lg">
                                Get Documentation Support
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-hd text-center">
                        <span className="section-eyebrow">Major Opportunities</span>
                        <div className="gold-line gold-line--center" />
                        <h2 className="section-title">Scholarships at BBIT</h2>
                    </div>
                    <div className="grid-3">
                        {scholarships.map(s => (
                            <div key={s.name} className={styles.scholCard}>
                                <div className={styles.scholHead}>
                                    <h3 className={styles.scholName}>{s.name}</h3>
                                    <div className={styles.scholAmount}>{s.amount}</div>
                                </div>
                                <div className={styles.scholBody}>
                                    <p className={styles.scholFull}>{s.fullName}</p>
                                    <div className={styles.scholElig}>
                                        <strong>Eligibility:</strong> {s.elig}
                                    </div>
                                    <p className={styles.scholDesc}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection title="Confused about eligibility?" subtitle="Every year, many students miss out on scholarships due to paperwork errors. Our senior mentors guide you through the 100% correct application process." />
        </>
    );
}
