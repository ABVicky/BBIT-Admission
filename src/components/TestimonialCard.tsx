import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
    name: string;
    branch: string;
    year: string;
    text: string;
    rating?: number;
}

export default function TestimonialCard({
    name,
    branch,
    year,
    text,
    rating = 5,
}: TestimonialCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.quote}>&ldquo;</div>
            <p className={styles.text}>{text}</p>
            <div className={styles.stars}>
                {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
            <div className={styles.author}>
                <div className={styles.avatar}>
                    {name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.branch}>
                        {branch} · Batch {year}
                    </div>
                </div>
            </div>
        </div>
    );
}
