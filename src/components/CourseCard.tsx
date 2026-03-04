import styles from "./CourseCard.module.css";

interface CourseCardProps {
    icon: string;
    title: string;
    code: string;
    duration: string;
    seats: string;
    description: string;
}

const WA = "https://wa.me/919999999999?text=Hi%2C%20I%20want%20guidance%20for%20BBIT%20admission.";

export default function CourseCard({ icon, title, code, duration, seats, description }: CourseCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.icon}>{icon}</div>
                <span className={styles.code}>{code}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{description}</p>
            <div className={styles.meta}>
                <div className={styles.metaItem}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {duration}
                </div>
                <div className={styles.metaItem}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {seats} Seats
                </div>
            </div>
            <div className={styles.actions}>
                <a href="https://forms.gle/REFnBgCteRDtWrJd9" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                    Enquire Now
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>WhatsApp</a>
            </div>
        </div>
    );
}
