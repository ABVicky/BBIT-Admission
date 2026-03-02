import type { Metadata } from "next";
import ApplyPage from "./ApplyPage";

export const metadata: Metadata = {
    title: "Apply for Free BBIT Admission Guidance 2026",
    description:
        "Apply for free BBIT admission guidance. Get personalized counselling on courses, rank requirements, scholarships, and admission process from a BBIT senior mentor.",
    keywords: [
        "BBIT admission guidance apply",
        "BBIT counselling form",
        "free BBIT guidance",
        "BBIT admission 2026 apply",
    ],
};

export default function Page() {
    return <ApplyPage />;
}
