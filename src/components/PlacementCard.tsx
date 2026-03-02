import styles from "./PlacementCard.module.css";

interface PlacementCardProps {
    name: string;
    company: string;
    branch: string;
    package_: string;
    year: string;
}

export default function PlacementCard({ name, company, branch, package_, year }: PlacementCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.avatarWrap}>
                <div className={styles.avatar}>{name.charAt(0)}</div>
                <div className={styles.badge}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#25d366">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Placed
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.branch}>{branch}</div>
                <div className={styles.company}>{company}</div>
                <div className={styles.pkg}>{package_} <span>/ annum</span></div>
                <div className={styles.year}>Batch {year}</div>
            </div>
        </div>
    );
}
