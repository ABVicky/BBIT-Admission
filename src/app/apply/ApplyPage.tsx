"use client";
import FAQItem from "@/components/FAQItem";
import styles from "./page.module.css";

const faqs = [
    { question: "Is this guidance official from BBIT management?", answer: "Yes, we are officially affiliated with BBIT for admission counselling and guidance support. While this portal is independent, we work as official support partners to help students with rank counselling, scholarship eligibility, and branch choices. You can also visit the official college website at bbit.edu.in." },
    { question: "Are there any fees for the guidance process?", answer: "No, our admission guidance is strictly free of charge. We do not charge students for any information or counselling support related to BBIT." },
    { question: "How long does it take to get a callback?", answer: "Once you submit the enquire form, a senior mentor typically calls you within 12 to 24 hours to discuss your rank and course preferences." },
    { question: "Can I get help with the WBJEE/JEE Main counselling process?", answer: "Yes, our mentors provide detailed guidance on the counselling process, rank-wise choices, and branch preferences at BBIT." },
    { question: "Is a campus visit possible before admission?", answer: "Absolutely. We encourage and even coordinate campus visits so you can see the labs, hostels, and meet the faculty before making a final decision." },
];

export default function ApplyPage() {
    const WA_LINK = "https://wa.me/917011142521?text=Hi%2C%20I%20want%20to%20apply%20for%20admission%20guidance.";

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge--gold">Admission 2026 Batch</span>
                        <h1 className={styles.title}>Apply for Free <span className="heroHeadingGold">Admission Guidance</span></h1>
                        <p className={styles.subtitle}>
                            Fill the form below or connect via WhatsApp to speak with a senior mentor.
                            Get clear, honest answers on courses, fees, and placements.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.applyGrid}>
                        {/* Form Side */}
                        <div className={styles.formCol}>
                            <div className={styles.formCard}>
                                <div className={styles.formHeader}>
                                    <h2 className={styles.formTitle}>Submit Enquiry Form</h2>
                                    <p className={styles.formSubtitle}>Our mentor will connect with you within 24 hours</p>
                                </div>

                                <div className={styles.formContainer}>
                                    <iframe
                                        src="https://docs.google.com/forms/d/e/1FAIpQLScDhwRo8pVXpsz0SuuKU0wpjuFhAtOH1EzzrRgQ6Cm-pv4QKg/viewform?embedded=true"
                                        width="100%"
                                        height="800"
                                        frameBorder="0"
                                        marginHeight={0}
                                        marginWidth={0}
                                        style={{ display: "block" }}
                                    >
                                        Loading…
                                    </iframe>
                                </div>

                                <div className={styles.formAlt}>
                                    <p>Prefer a direct conversation?</p>
                                    <a href="https://forms.gle/REFnBgCteRDtWrJd9" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg btn-full" style={{ marginBottom: "1rem" }}>
                                        Open Form in New Tab
                                    </a>
                                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg btn-full">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Info Side */}
                        <div className={styles.infoCol}>
                            <div className={styles.pointsCard}>
                                <h3 className={styles.cardHeader}>Why get guidance?</h3>
                                <div className={styles.pointsList}>
                                    {[
                                        "Honest branch-wise placement data.",
                                        "Complete help with WBJEE counselling.",
                                        "Scholarship eligibility verification.",
                                        "Guided campus & hostel tours.",
                                        "Connecting with currently studying students.",
                                    ].map((p, i) => (
                                        <div key={i} className={styles.point}>
                                            <span className={styles.pointNum}>0{i + 1}</span>
                                            <p>{p}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.helpCard}>
                                <h3 className={styles.cardHeader}>Direct Support</h3>
                                <div className={styles.helpItems}>
                                    <div className={styles.helpItem}>
                                        <strong>📞 Helpline:</strong>
                                        <span>+91 70111 42521</span>
                                    </div>
                                    <div className={styles.helpItem}>
                                        <strong>📧 Email:</strong>
                                        <span>guidance@bbitadmission.in</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.trustedBox}>
                                <div className={styles.trustTitle}>Official Counselling Support</div>
                                <p>We are officially affiliated with BBIT to provide dedicated admission guidance and counselling support to aspiring students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section--light">
                <div className="container">
                    <div className="section-hd text-center">
                        <h2 className="section-title">Common Questions</h2>
                        <p className="section-desc">Quick answers to clear your doubts about our guidance portal.</p>
                    </div>
                    <div className={styles.faqWrap}>
                        {faqs.map(f => <FAQItem key={f.question} {...f} />)}
                    </div>
                </div>
            </section>
        </>
    );
}
