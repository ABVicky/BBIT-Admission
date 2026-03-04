import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://studyatbbit.wearelive04.com"),
  title: {
    default: "BBIT Admission Guidance 2026 | Budge Budge Institute of Technology",
    template: "%s | BBIT Admission Guidance",
  },
  description:
    "Expert admission guidance for Budge Budge Institute of Technology (BBIT), Kolkata. Get counselling on courses, placements, scholarships, and campus life from a BBIT senior mentor.",
  keywords: [
    "BBIT admission 2026",
    "Budge Budge Institute of Technology",
    "BBIT courses",
    "BBIT placements",
    "engineering admission Kolkata",
    "BBIT guidance",
    "BBIT counselling",
    "WB JEE admission",
    "BBIT scholarship",
  ],
  authors: [{ name: "BBIT Admission Guidance" }],
  creator: "BBIT Admission Guidance",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://studyatbbit.wearelive04.com",
    siteName: "BBIT Admission Guidance",
    title: "BBIT Admission Guidance 2026 | Expert Counselling",
    description:
      "Navigate your BBIT admission with expert guidance. Courses, placements, scholarships & campus life — all explained by a senior mentor.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BBIT Admission Guidance 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BBIT Admission Guidance 2026",
    description: "Expert admission counselling for Budge Budge Institute of Technology, Kolkata.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a3a6e" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          body { background: #f8f9fc; }
          main { padding-top: 100px; }
          @media (max-width: 768px) { main { padding-top: 66px; } }
        `}</style>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1445925476872296');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1445925476872296&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-41HK5E3ERE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-41HK5E3ERE');
          `}
        </Script>
        {/* End Google tag (gtag.js) */}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
