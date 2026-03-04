import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const WA = "https://wa.me/917011142521?text=Hi%2C%20I%20want%20guidance%20for%20BBIT%20admission.";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        {/* Brand */}
                        <div className={styles.brandCol}>
                            <div className={styles.footerLogo}>
                                <div className={styles.footerLogoImgWrapper}>
                                    <Image
                                        src="/images/bbit-logo.jpg"
                                        alt="BBIT Logo"
                                        width={48}
                                        height={48}
                                        className={styles.footerLogoImg}
                                    />
                                </div>
                                <div>
                                    <div className={styles.footerLogoName}>BBIT</div>
                                    <div className={styles.footerLogoTagline}>Admission Guidance Portal</div>
                                </div>
                            </div>
                            <p className={styles.brandDesc}>
                                Your trusted admission guidance partner for Budge Budge Institute of Technology,
                                Kolkata. Expert counselling by BBIT senior mentors — completely free.
                            </p>
                            <div className={styles.disclaimer}>
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>
                                    <strong>Disclaimer:</strong> This is an independent admission guidance platform. For official college information, visit <a href="https://www.bbit.edu.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "underline" }}>bbit.edu.in</a>. We are officially affiliated with BBIT for admission counselling and guidance support.
                                </span>
                            </div>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.footerWa}>
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp Helpline
                            </a>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.linksCol}>
                            <h3 className={styles.colTitle}>Quick Links</h3>
                            <ul className={styles.linkList}>
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "All Courses", href: "/courses" },
                                    { label: "Placements", href: "/placements" },
                                    { label: "Campus Life", href: "/campus-life" },
                                    { label: "Scholarships", href: "/scholarships" },
                                    { label: "Training & Career", href: "/training" },
                                    { label: "Apply for Guidance", href: "/apply" },
                                ].map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className={styles.footerLink}>
                                            <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Courses */}
                        <div className={styles.linksCol}>
                            <h3 className={styles.colTitle}>Programmes at BBIT</h3>
                            <ul className={styles.linkList}>
                                {["B.Tech CSE", "CSE (AI)", "CSE (Cyber Security)", "B.Tech IT", "B.Tech ECE", "B.Tech EE", "B.Tech ME", "B.Tech CE", "MBA", "M.Tech", "Polytechnic Diploma"].map(c => (
                                    <li key={c}>
                                        <Link href="/courses" className={styles.footerLink}>
                                            <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                            {c}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className={styles.contactCol}>
                            <h3 className={styles.colTitle}>Contact & Location</h3>
                            <div className={styles.contactList}>
                                <div className={styles.contactItem}>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Nischintapur, Budge Budge, Kolkata – 700137, West Bengal</span>
                                </div>
                                <a href="tel:+917011142521" className={styles.contactItem}>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 70111 42521</span>
                                </a>
                                <a href="mailto:guidance@bbitadmission.in" className={styles.contactItem}>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>guidance@bbitadmission.in</span>
                                </a>
                            </div>
                            <div className={styles.accredFooter}>
                                <div className={styles.accredFooterTitle}>Recognised by</div>
                                <div className={styles.accredFooterBadges}>
                                    {["AICTE", "MAKAUT", "NBA", "UGC"].map(b => (
                                        <span key={b} className={styles.accredFooterBadge}>{b}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomRow}>
                        <p>© 2026 BBIT Admission Guidance. All rights reserved.</p>
                        <p>Made with ❤️ by BBIT Senior Mentors | Built and maintained by <a href="https://wearelive04.com" target="_blank" rel="noopener noreferrer" style={{ color: "#f59e0b", fontWeight: "700", textDecoration: "none" }}>wearelive04.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
