import type { Metadata } from "next";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "BBIT Admission Guidance 2026 | Official Counselling Portal",
  description:
    "Official admission guidance portal for Budge Budge Institute of Technology (BBIT), Kolkata. Get expert counselling on B.Tech courses, placements, scholarships, and campus life from a BBIT senior mentor.",
};

const WA = "https://wa.me/919999999999?text=Hi%2C%20I%20want%20guidance%20for%20BBIT%20admission.";

const courses = [
  { icon: "💻", title: "Computer Science & Engineering", code: "B.Tech CSE", duration: "4 Years", seats: "120", description: "Software development, AI/ML, data science, and modern computing. Highest demand branch with top placement records." },
  { icon: "📡", title: "Information Technology", code: "B.Tech IT", duration: "4 Years", seats: "60", description: "Web technologies, networking, cloud computing, and IT management. Strong industry connections." },
  { icon: "📻", title: "Electronics & Comm. Engg.", code: "B.Tech ECE", duration: "4 Years", seats: "60", description: "Embedded systems, VLSI, communication systems, and IoT. Bridge between hardware and software." },
  { icon: "⚡", title: "Electrical Engineering", code: "B.Tech EE", duration: "4 Years", seats: "60", description: "Power systems, control engineering, and electrical machines. Gateway to PSUs." },
  { icon: "⚙️", title: "Mechanical Engineering", code: "B.Tech ME", duration: "4 Years", seats: "60", description: "Design, manufacturing, thermodynamics. CAD/CAM training included." },
  { icon: "🏗️", title: "Civil Engineering", code: "B.Tech CE", duration: "4 Years", seats: "60", description: "Structural design, construction management, AutoCAD training. Govt. opportunities." },
];

const testimonials = [
  { name: "Rahul Mondal", branch: "B.Tech CSE", year: "2024", rating: 5, text: "I was confused between CSE and IT. The guidance I got here helped me understand the difference clearly. Got into CSE and loving it!" },
  { name: "Priya Sen", branch: "B.Tech ECE", year: "2023", rating: 5, text: "The senior mentor explained the entire WB JEE counselling process step by step. I wouldn't have managed without this support." },
  { name: "Aman Das", branch: "MBA", year: "2024", rating: 5, text: "Joined MBA at BBIT with their guidance. They even helped me understand all scholarship options. Worth every bit!" },
];

const whyBBIT = [
  { icon: "🏆", title: "NBA Accredited Departments", desc: "Multiple departments are NBA accredited, ensuring global standard education quality." },
  { icon: "🏙️", title: "Prime Kolkata Location", desc: "Located in Budge Budge, just 25km from Kolkata city — easily accessible by metro, bus and train." },
  { icon: "🌿", title: "10+ Acre Green Campus", desc: "A sprawling, lush green campus with modern infrastructure, state-of-the-art labs, and serene environment." },
  { icon: "💼", title: "Active T&P Cell", desc: "A dedicated Training & Placement Cell with 200+ recruiting companies visiting every year." },
  { icon: "🎓", title: "Expert Faculty", desc: "Industry-experienced faculty with PhDs from premier institutions ensuring top-class education." },
  { icon: "🤝", title: "Industry MoUs", desc: "Strategic MoUs with leading IT companies and PSUs for internship, training, and placement." },
];

const campusHighlights = [
  { icon: "🏠", label: "Boys & Girls Hostel" },
  { icon: "🔬", label: "Modern Labs" },
  { icon: "📚", label: "Digital Library" },
  { icon: "⚽", label: "Sports Complex" },
  { icon: "🍽️", label: "College Canteen" },
  { icon: "🌐", label: "Campus Wi-Fi" },
  { icon: "🎭", label: "Auditorium" },
  { icon: "🚐", label: "Transport Facility" },
];

const magnusPerformers = [
  { name: "Yo Yo Honey Singh", genre: "Pop / Punjabi" },
  { name: "Badshah", genre: "Hip-Hop / Rap" },
  { name: "Guru Randhawa", genre: "Pop / Punjabi" },
  { name: "Ayushman Khurrana", genre: "Bollywood / Pop" },
  { name: "Vishal Shekhar", genre: "Bollywood / Music Director" },
  { name: "Hardy Sandhu", genre: "Pop / Punjabi" },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* Background image placeholder */}
        <div className={styles.heroBgImg}>
          <div className={styles.heroBgOverlay} />
          <div className={styles.heroBgPlaceholder}>
            <span className={styles.heroBgIcon}>🏛️</span>
            <span className={styles.heroBgLabel}>BBIT CAMPUS PHOTO</span>
            <span className={styles.heroBgHint}>Replace with actual campus aerial or gate photo</span>
          </div>
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroPill}>
              <span className={styles.heroPillDot} />
              Admissions Open — 2026 Batch
            </div>

            <h1 className={styles.heroHeading}>
              Your Gateway to<br />
              <span className={styles.heroHeadingGold}>BBIT Kolkata</span>
            </h1>

            <p className={styles.heroSub}>
              Budge Budge Institute of Technology — one of West Bengal&apos;s finest engineering colleges.
              Get <strong>free, expert guidance</strong> on admission, courses, scholarships &amp; placement from our senior mentor team.
            </p>

            <div className={styles.heroBtns}>
              <Link href="/apply" className="btn btn-gold btn-xl">
                Apply for Guidance
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <Link href="/courses" className="btn btn-outline-white btn-xl">
                Explore Courses
              </Link>
            </div>

            <div className={styles.heroNote}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#4ade80" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              100% Free Guidance · No Consultancy Fee · By BBIT Senior Mentors
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div className={styles.heroStats}>
          <div className="container">
            <div className={styles.heroStatsRow}>
              {[
                { num: "20+", label: "Years of Excellence" },
                { num: "5000+", label: "Alumni Network" },
                { num: "90%+", label: "Placement Rate" },
                { num: "200+", label: "Recruiting Companies" },
                { num: "15 LPA", label: "Highest Package" },
                { num: "7+", label: "Programmes Offered" },
              ].map(s => (
                <div key={s.label} className={styles.heroStat}>
                  <div className={styles.heroStatNum}>{s.num}</div>
                  <div className={styles.heroStatLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACCREDITATIONS STRIP
      ════════════════════════════════════════ */}
      <div className={styles.accredStrip}>
        <div className="container">
          <div className={styles.accredRow}>
            <span className={styles.accredTitle}>Recognised & Approved by:</span>
            {["AICTE, New Delhi", "MAKAUT, West Bengal", "NBA Accredited", "UGC Listed", "WB Govt. Approved"].map(b => (
              <div key={b} className={styles.accredBadge}>{b}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          WHY BBIT IS THE BEST
      ════════════════════════════════════════ */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={`${styles.whyHeader} text-center section-hd`}>
            <span className="section-eyebrow">Why Choose BBIT</span>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title">West Bengal&apos;s Premier Engineering College</h2>
            <p className="section-desc">
              BBIT has been shaping engineers for over 20 years with a strong focus on quality education,
              industry readiness, and holistic student development.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {whyBBIT.map((w) => (
              <div key={w.title} className={styles.whyCard}>
                <div className={styles.whyIcon}>{w.icon}</div>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CAMPUS LIFE SHOWCASE
      ════════════════════════════════════════ */}
      <section className={styles.campusSection}>
        <div className="container">
          <div className={styles.campusLayout}>
            {/* Left: content */}
            <div className={styles.campusContent}>
              <span className="section-eyebrow section-eyebrow--gold">Campus Life</span>
              <div className="gold-line" />
              <h2 className={`section-title section-title--white`}>
                Beautiful Campus,<br />Vibrant Student Life
              </h2>
              <p className="section-desc section-desc--white" style={{ marginBottom: "2rem" }}>
                Step into a campus designed for modern learning — lush greens, modern architecture,
                top-class labs, energetic student community, and a culture that goes beyond textbooks.
              </p>
              <div className={styles.campusFacilities}>
                {campusHighlights.map(h => (
                  <div key={h.label} className={styles.facilityChip}>
                    <span>{h.icon}</span>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/campus-life" className="btn btn-gold" style={{ marginTop: "2rem" }}>
                Explore Campus Life
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Right: photo grid */}
            <div className={styles.campusPhotoGrid}>
              <div className={`${styles.campusPhoto} ${styles.campusPhoto1}`}>
                <div className="img-ph img-ph--dark" style={{ height: "100%" }}>
                  <span className="ph-icon">🏛️</span>
                  <span className="ph-label">Main Building</span>
                  <span className="ph-hint">Replace with campus photo</span>
                </div>
              </div>
              <div className={`${styles.campusPhoto} ${styles.campusPhoto2}`}>
                <div className="img-ph img-ph--dark" style={{ height: "100%" }}>
                  <span className="ph-icon">🔬</span>
                  <span className="ph-label">Labs & Facilities</span>
                  <span className="ph-hint">Replace with lab photo</span>
                </div>
              </div>
              <div className={`${styles.campusPhoto} ${styles.campusPhoto3}`}>
                <div className="img-ph img-ph--dark" style={{ height: "100%" }}>
                  <span className="ph-icon">🌿</span>
                  <span className="ph-label">Campus Grounds</span>
                  <span className="ph-hint">Replace with outdoor photo</span>
                </div>
              </div>
              <div className={`${styles.campusPhoto} ${styles.campusPhoto4}`}>
                <div className="img-ph img-ph--dark" style={{ height: "100%" }}>
                  <span className="ph-icon">🏠</span>
                  <span className="ph-label">Student Hostel</span>
                  <span className="ph-hint">Replace with hostel photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MAGNUS ANNUAL FEST
      ════════════════════════════════════════ */}
      <section className={styles.magnusSection}>
        <div className={styles.magnusBg}>
          <div className={styles.magnusOverlay} />
          <div className="img-ph img-ph--dark" style={{ position: "absolute", inset: 0, border: "none", borderRadius: 0 }}>
            <span className="ph-icon" style={{ fontSize: "4rem" }}>🎸</span>
            <span className="ph-label" style={{ fontSize: "1rem" }}>MAGNUS CONCERT PHOTO</span>
            <span className="ph-hint">Replace with actual MAGNUS event banner/photo</span>
          </div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.magnusContent}>
            <div className={styles.magnusLeft}>
              <span className={styles.magnusBadge}>🎵 Annual Cultural Extravaganza</span>
              <h2 className={styles.magnusTitle}>
                <span className={styles.magnusTitleBig}>MAGNUS</span>
                <span className={styles.magnusTitleSub}>BBIT&apos;s Biggest Celebration of the Year</span>
              </h2>
              <p className={styles.magnusDesc}>
                MAGNUS is BBIT&apos;s crown jewel — a massive annual fest that brings together thousands of
                students, stunning performances by Bollywood and pop celebrities, jaw-dropping stage setups,
                competitions, and memories that last a lifetime.
              </p>
              <div className={styles.magnusFeatures}>
                {[
                  { icon: "🎤", text: "Celebrity Performances" },
                  { icon: "🏆", text: "Competitions & Events" },
                  { icon: "🌟", text: "5000+ Attendees" },
                  { icon: "🎭", text: "Cultural Extravaganza" },
                  { icon: "🎸", text: "Live Band & DJ Nights" },
                  { icon: "📸", text: "Unforgettable Memories" },
                ].map(f => (
                  <div key={f.text} className={styles.magnusFeature}>
                    <span>{f.icon}</span> {f.text}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.magnusRight}>
              <div className={styles.magnusCardTitle}>⭐ Past Performers at MAGNUS</div>
              <div className={styles.magnusPerformers}>
                {magnusPerformers.map((p) => (
                  <div key={p.name} className={styles.magnusPerformerCard}>
                    <div className={styles.magnusAvatar}>
                      <div className="img-ph img-ph--dark" style={{ width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0, padding: 0 }}>
                        <span style={{ fontSize: "1.25rem" }}>🎤</span>
                      </div>
                    </div>
                    <div>
                      <div className={styles.magnusPerformerName}>{p.name}</div>
                      <div className={styles.magnusPerformerInfo}>{p.genre}</div>
                    </div>
                  </div>
                ))}
                <div className={styles.magnusMoreNote}>
                  + Many more trending artists every year
                </div>
              </div>

              <div className={styles.magnusPhotos}>
                {["Concert Stage", "Crowd", "Backstage", "Finale"].map(label => (
                  <div key={label} className={styles.magnusThumb}>
                    <div className="img-ph img-ph--dark" style={{ height: "100%", fontSize: "0.65rem", borderRadius: "10px" }}>
                      <span>📷</span>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          COURSES OVERVIEW
      ════════════════════════════════════════ */}
      <section className={`section ${styles.coursesSection}`}>
        <div className="container">
          <div className="text-center section-hd">
            <span className="section-eyebrow">B.Tech & More</span>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title">Programmes Offered at BBIT</h2>
            <p className="section-desc">
              Choose from 9 programmes across engineering, management, and technology —
              guided by our experts to pick the right stream for your career.
            </p>
          </div>
          <div className={styles.coursesGrid}>
            {courses.map(c => <CourseCard key={c.code} {...c} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/courses" className="btn btn-outline-navy btn-lg">
              View All 9 Programmes & Details
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PLACEMENTS STRIP
      ════════════════════════════════════════ */}
      <section className={styles.placementsStrip}>
        <div className="container">
          <div className={styles.placementsLayout}>
            <div className={styles.placementsLeft}>
              <span className="section-eyebrow section-eyebrow--gold">Placements</span>
              <div className="gold-line" />
              <h2 className="section-title section-title--white">Consistently Strong Placement Record</h2>
              <p className="section-desc section-desc--white" style={{ marginBottom: "2rem" }}>
                BBIT&apos;s Training & Placement Cell ensures students are industry-ready from Day 1.
                Top MNCs, PSUs, and core engineering firms recruit from BBIT every year.
              </p>
              <div className={styles.placementStats}>
                {[
                  { num: "90%+", label: "Overall Rate" },
                  { num: "15 LPA", label: "Highest Package" },
                  { num: "5.0 LPA", label: "Avg Package" },
                  { num: "200+", label: "Companies" },
                ].map(s => (
                  <div key={s.label} className={styles.placeStat}>
                    <div className={styles.placeStatNum}>{s.num}</div>
                    <div className={styles.placeStatLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/placements" className="btn btn-gold">
                View Detailed Placements
              </Link>
            </div>

            <div className={styles.placementsRight}>
              <div className={styles.recruiterHeader}>
                <div className={styles.recruiterTitle}>Top Recruiting Companies</div>
                <div className={styles.recruiterLogoGrid}>
                  {["TCS", "Infosys", "Wipro", "Cognizant", "HCL", "IBM", "Accenture", "L&T", "Deloitte", "Amazon", "Capgemini", "Tech Mahindra"].map(logo => (
                    <div key={logo} className={styles.logoBox}>
                      <div className="img-ph img-ph--dark" style={{ height: "46px", border: "none" }}>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, opacity: 0.4 }}>{logo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GUIDANCE PROCESS
      ════════════════════════════════════════ */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className="text-center section-hd">
            <span className="section-eyebrow">How It Works</span>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title">Our 5-Step Guidance Process</h2>
            <p className="section-desc">Simple, transparent, and completely free.</p>
          </div>
          <div className={styles.processSteps}>
            {[
              { n: "01", icon: "📋", title: "Submit Enquiry", desc: "Fill our quick query form or message us on WhatsApp." },
              { n: "02", icon: "📞", title: "Get a Callback", desc: "Our senior mentor will call you within 24 hours." },
              { n: "03", icon: "🎯", title: "Personalised Guidance", desc: "Understand courses, rank, eligibility & branch choices." },
              { n: "04", icon: "📝", title: "Admission Support", desc: "Step-by-step help with counselling & documentation." },
              { n: "05", icon: "🏫", title: "Campus Visit", desc: "We coordinate your campus visit and community introduction." },
            ].map((step, i) => (
              <div key={step.n} className={styles.processStep}>
                <div className={styles.processCircle}>{step.icon}</div>
                <div className={styles.processNum}>{step.n}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
                {i < 4 && <div className={styles.processLine} />}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/apply" className="btn btn-gold btn-lg">
              Start Your Guidance Now
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className={`section ${styles.testimSection}`}>
        <div className="container">
          <div className="text-center section-hd">
            <span className="section-eyebrow">Student Stories</span>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title">What Students Say About Us</h2>
          </div>
          <div className="grid-3">
            {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </>
  );
}
