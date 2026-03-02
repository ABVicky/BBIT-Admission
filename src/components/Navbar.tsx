"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Placements", href: "/placements" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Training", href: "/training" },
];

const WA = "https://wa.me/919999999999?text=Hi%2C%20I%20want%20guidance%20for%20BBIT%20admission.";

const WaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Top info bar */}
            <div className={styles.topBar}>
                <div className="container">
                    <div className={styles.topBarInner}>
                        <span>📍 Nischintapur, Budge Budge, Kolkata – 700137</span>
                        <span className={styles.topBarSep}>|</span>
                        <span>🎓 AICTE Approved · MAKAUT Affiliated</span>
                        <span className={styles.topBarSep}>|</span>
                        <span>📞 Admission Helpline: <strong>+91 99999 99999</strong></span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
                <div className="container">
                    <nav className={styles.navInner}>
                        {/* LOGO */}
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoImgWrapper}>
                                <Image
                                    src="/images/bbit-logo.jpg"
                                    alt="BBIT Logo"
                                    width={40}
                                    height={40}
                                    className={styles.logoImg}
                                />
                            </div>
                            <div className={styles.logoText}>
                                <span className={styles.logoPrimary}>BBIT</span>
                                <span className={styles.logoTagline}>Budge Budge Institute of Technology</span>
                            </div>
                        </Link>

                        {/* Desktop Links */}
                        <ul className={styles.links}>
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className={styles.link}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>

                        {/* Right CTAs */}
                        <div className={styles.ctas}>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
                                <WaIcon />
                                <span>WhatsApp</span>
                            </a>
                            <Link href="/apply" className={styles.applyBtn}>
                                Apply for Guidance
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Hamburger */}
                        <button className={styles.ham} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                            <span className={`${styles.hamBar} ${mobileOpen ? styles.b1 : ""}`} />
                            <span className={`${styles.hamBar} ${mobileOpen ? styles.b2 : ""}`} />
                            <span className={`${styles.hamBar} ${mobileOpen ? styles.b3 : ""}`} />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className={styles.drawer} onClick={() => setMobileOpen(false)}>
                    <div className={styles.drawerPanel} onClick={e => e.stopPropagation()}>
                        <div className={styles.drawerLogo}>
                            <div className={styles.logoImgWrapper}>
                                <Image
                                    src="/images/bbit-logo.jpg"
                                    alt="BBIT Logo"
                                    width={32}
                                    height={32}
                                    className={styles.logoImg}
                                />
                            </div>
                            <div>
                                <div className={styles.logoPrimary} style={{ color: "#fff" }}>BBIT</div>
                                <div className={styles.logoTagline} style={{ color: "rgba(255,255,255,0.5)" }}>Admission Guidance</div>
                            </div>
                        </div>
                        <ul className={styles.drawerLinks}>
                            {navLinks.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className={styles.drawerLink} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.drawerCtaGroup}>
                            <Link href="/apply" className={`${styles.applyBtn} ${styles.applyBtnFull}`} onClick={() => setMobileOpen(false)}>
                                Apply for Guidance
                            </Link>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className={`${styles.waBtn} ${styles.waBtnFull}`}>
                                <WaIcon /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
