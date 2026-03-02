import styles from "./PlacementSpotlight.module.css";

interface PlacementSpotlightProps {
    name: string;
    company: string;
    package: string;
    branch: string;
    year: string;
}

export default function PlacementSpotlight({ name, company, package: pkg, branch, year }: PlacementSpotlightProps) {
    return (
        <div className={styles.spotlight}>
            <div className={styles.badge}>Success Story</div>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <div className="img-ph img-ph--dark" style={{ width: "80px", height: "80px", borderRadius: "50%", padding: 0 }}>
                        <span style={{ fontSize: "2rem" }}>🎓</span>
                    </div>
                    <div className={styles.companyLogo}>
                        <div className="img-ph img-ph--dark" style={{ width: "40px", height: "40px", borderRadius: "8px", padding: 0 }}>
                            <span style={{ fontSize: "1rem" }}>💼</span>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.details}>{branch} | Batch of {year}</p>
                    <div className={styles.stat}>
                        <span className={styles.label}>Placed At:</span>
                        <span className={styles.val}>{company}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.label}>Package:</span>
                        <span className={styles.valPkg}>{pkg}</span>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                + 150 more students placed this season
            </div>
        </div>
    );
}
