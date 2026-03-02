import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Campus Life at BBIT | Best Engineering Campus in Kolkata",
    description: "Experience the vibrant student life at Budge Budge Institute of Technology (BBIT). Explore our 10+ acre green campus, hostels, facilities, and the annual MAGNUS fest.",
};

const amenities = [
    { icon: "🏠", title: "Boys & Girls Hostels", desc: "Separate, secure hostels with modern mess facilities, high-speed Wi-Fi, and common rooms." },
    { icon: "🔬", title: "Advanced Labs", desc: "State-of-the-art laboratories for all departments including AI/ML, Robotics, and core engg. labs." },
    { icon: "📚", title: "Central Library", desc: "Extensive physical & digital library with 50,000+ volumes and national/international journals." },
    { icon: "⚽", title: "Sports Complex", desc: "Basketball, football, badminton, and indoor games facilities for all student athletes." },
    { icon: "🍽️", title: "College Canteen", desc: "Hygienic, multi-cuisine canteen serving nutritious meals at affordable student rates." },
    { icon: "🚐", title: "Transport Support", desc: "Dedicated bus service connecting the campus to key points across Kolkata and suburbs." },
];

const festHighlights = [
    { artist: "Jubin Nautiyal", year: "2023" },
    { artist: "Arijit Singh", year: "2022" },
    { artist: "Neha Kakkar", year: "2021" },
    { artist: "Diljit Dosanjh", year: "2019" },
];

export default function CampusLifePage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge--gold">The BBIT Experience</span>
                        <h1 className={styles.title}>Vibrant Campus & <span className="heroHeadingGold">Student Culture</span></h1>
                        <p className={styles.subtitle}>
                            Sprawling 10-acre green campus, modern infrastructure, and an energetic student
                            community. BBIT offers more than just education — it offers a lifestyle.
                        </p>
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-hd text-center">
                        <span className="section-eyebrow">World-class infrastructure</span>
                        <div className="gold-line gold-line--center" />
                        <h2 className="section-title">Excellent Campus Facilities</h2>
                        <p className="section-desc">Designed to support your academic journey and personal growth.</p>
                    </div>
                    <div className="grid-3">
                        {amenities.map(a => (
                            <div key={a.title} className={styles.amenCard}>
                                <div className={styles.amenIcon}>{a.icon}</div>
                                <h3 className={styles.amenTitle}>{a.title}</h3>
                                <p className={styles.amenDesc}>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAGNUS SECTION */}
            <section className={styles.festSection}>
                <div className="container">
                    <div className={styles.festLayout}>
                        <div className={styles.festContent}>
                            <span className={styles.festBadge}>🎵 Annual Fest</span>
                            <h2 className={styles.festTitle}>MAGNUS</h2>
                            <p className={styles.festDesc}>
                                MAGNUS is not just a fest; it&apos;s a BBIT legend. It&apos;s the time of year when the campus
                                turns into a massive concert venue. With performances by legendary Bollywood and trending
                                celebrities, it&apos;s one of the most awaited cultural events in Kolkata.
                            </p>
                            <div className={styles.festFeatures}>
                                <div className={styles.festFeature}>🎤 Live Concerts</div>
                                <div className={styles.festFeature}>👗 Personality Hunt</div>
                                <div className={styles.festFeature}>🎸 Band Competition</div>
                                <div className={styles.festFeature}>💃 Cultural Dance</div>
                            </div>
                        </div>

                        <div className={styles.festRight}>
                            <div className={styles.festCard}>
                                <h3 className={styles.festCardTitle}>⭐ Past Performers</h3>
                                <div className={styles.performerList}>
                                    {festHighlights.map(f => (
                                        <div key={f.artist} className={styles.performerItem}>
                                            <span className={styles.performerName}>{f.artist}</span>
                                            <span className={styles.performerYear}>Magnus {f.year}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.festPlaceholder}>
                                    <div className="img-ph img-ph--dark" style={{ height: "160px" }}>
                                        <span className="ph-icon">🎸</span>
                                        <span className="ph-label">MAGNUS EVENT PHOTO</span>
                                        <span className="ph-hint">Replace with concert image</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Life */}
            <section className="section section--light">
                <div className="container">
                    <div className={styles.lifeGrid}>
                        <div className={styles.lifeImage}>
                            <div className="img-ph" style={{ height: "400px" }}>
                                <span className="ph-icon">🌳</span>
                                <span className="ph-label">BEAUTIFUL CAMPUS LIFE</span>
                                <span className="ph-hint">Replace with campus photo</span>
                            </div>
                        </div>
                        <div className={styles.lifeContent}>
                            <h2 className="section-title">Beyond the Classroom</h2>
                            <p className="section-desc">
                                From technical clubs (Coding Cell, Robotics) to cultural committees, every student
                                gets a chance to explore their passions. Our campus is a blend of
                                traditional discipline and modern freedom.
                            </p>
                            <ul className={styles.lifeList}>
                                <li>✅ Technical Hackathons & Workshops</li>
                                <li>✅ Annual Sports & Cricket Tournaments</li>
                                <li>✅ Seminar Hall & Modern Auditorium</li>
                                <li>✅ Entrepreneurship Development Cell</li>
                            </ul>
                            <Link href="/apply" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                                Experience BBIT Firsthand
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
