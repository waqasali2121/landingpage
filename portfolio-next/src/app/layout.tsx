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
