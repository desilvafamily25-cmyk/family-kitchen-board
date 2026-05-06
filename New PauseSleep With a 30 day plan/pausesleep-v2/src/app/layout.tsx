import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Dr. Premila Hewage | Menopause & Sleep Specialist Melbourne",
    template: "%s | Dr. Premila Hewage",
  },
  description:
    "Expert, evidence-based menopause and sleep care with Dr. Premila Hewage MBBS FRACGP. Extended telehealth consultations available across Australia. HRT, CBT-I, and personalised treatment plans.",
  metadataBase: new URL("https://www.pausesleep.com.au"),
  openGraph: {
    siteName: "Pause Sleep — Dr. Premila Hewage",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Premila Hewage",
  description: "Melbourne GP specialising in menopause management and sleep disorders",
  medicalSpecialty: ["Menopause Management", "Sleep Medicine", "Women's Health"],
  url: "https://www.pausesleep.com.au",
  email: "info@pausesleep.com.au",
  address: [
    { "@type": "PostalAddress", addressLocality: "Hawthorn", addressRegion: "VIC", addressCountry: "AU" },
    { "@type": "PostalAddress", addressLocality: "Balwyn", addressRegion: "VIC", addressCountry: "AU" },
    { "@type": "PostalAddress", addressLocality: "Fitzroy North", addressRegion: "VIC", addressCountry: "AU" },
  ],
  availableService: [
    { "@type": "MedicalTherapy", name: "Menopause Consultation" },
    { "@type": "MedicalTherapy", name: "Sleep Health Consultation" },
    { "@type": "MedicalTherapy", name: "Hormone Therapy Assessment" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
