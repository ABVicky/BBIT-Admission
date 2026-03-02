"use client";
import styles from "./FAQItem.module.css";
import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${styles.item} ${open ? styles.open : ""}`}>
            <button className={styles.question} onClick={() => setOpen(!open)} aria-expanded={open}>
                <span>{question}</span>
                <span className={styles.chevron} aria-hidden>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            {open && (
                <div className={styles.answer}>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}
