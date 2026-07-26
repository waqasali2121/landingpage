import type { Metadata } from "next";
import { Outfit, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaleeq",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://waqasali.dev"),
  title: "Waqas Ali — Cybersecurity Researcher & AI Specialist",
  description:
    "Portfolio of Waqas Ali — Computer Engineer specializing in AI, Cybersecurity, Wireless Sensor Networks, Federated Learning, and Explainable AI.",
  keywords: [
    "Waqas Ali",
    "Cybersecurity",
    "AI",
    "Machine Learning",
    "WSN",
    "IoT",
    "Federated Learning",
    "Portfolio",
  ],
  openGraph: {
    title: "Waqas Ali — Cybersecurity Researcher & AI Specialist",
    description: "Portfolio of Waqas Ali — Computer Engineer specializing in AI, Cybersecurity, Wireless Sensor Networks, Federated Learning, and Explainable AI.",
    url: "https://waqasali.dev",
    siteName: "Waqas Ali Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waqas Ali — Cybersecurity Researcher & AI Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqas Ali — Cybersecurity Researcher & AI Specialist",
    description: "Portfolio of Waqas Ali — Computer Engineer specializing in AI, Cybersecurity, Wireless Sensor Networks, Federated Learning, and Explainable AI.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: 'https://waqasali.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${nastaliq.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Waqas Ali",
              "url": "https://waqasali.dev",
              "image": "https://waqasali.dev/og-image.png",
              "jobTitle": "Cybersecurity Researcher & AI Specialist",
              "sameAs": [
                "https://github.com/waqasali2121"
              ]
            })
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var resolved = theme;
                  if (theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('dark', 'light');
                  document.documentElement.classList.add(resolved);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-on-background antialiased overflow-x-hidden rtl:font-nastaleeq">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
