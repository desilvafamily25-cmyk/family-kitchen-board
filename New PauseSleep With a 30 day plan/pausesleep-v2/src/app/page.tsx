import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { TrustBar } from "@/components/sections/TrustBar"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid"
import { BookingCTA } from "@/components/sections/BookingCTA"
import { articles } from "@/data/articles"
import { Flower2, Moon, Activity, BookOpen, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Menopause & Sleep GP Telehealth Australia | Dr. Premila Hewage",
  description:
    "Finally, a GP who takes your menopause seriously. Extended telehealth consultations with Dr. Premila Hewage MBBS FRACGP — available across Australia. HRT, non-hormonal options, and personalised care.",
  alternates: { canonical: "https://www.pausesleep.com.au" },
  openGraph: {
    title: "Dr. Premila Hewage | Menopause & Sleep Specialist",
    description: "Expert GP-led menopause and sleep care. Telehealth across Australia.",
    url: "https://www.pausesleep.com.au",
  },
}

const problems = [
  {
    before: "Rushed 15-minute GP appointments with no time to explain your symptoms",
    after: "45-minute extended consultations where you have time to share the full picture",
  },
  {
    before: "Symptoms dismissed as stress or just part of getting older",
    after: "A GP who understands the hormonal complexity behind what you are experiencing",
  },
  {
    before: "Leaving the appointment without a clear plan or understanding of your options",
    after: "A written treatment plan emailed within 24 hours — including prescriptions if needed",
  },
]

const services = [
  {
    icon: Flower2,
    title: "Menopause Management",
    description: "Assessment and management of perimenopause and menopause. HRT evaluation, hormonal health review, and an individualised treatment plan.",
    href: "/menopause",
  },
  {
    icon: Moon,
    title: "Sleep Health",
    description: "Structured sleep assessment covering insomnia type, contributing factors, CBT-I principles, sleep hygiene, and supplement guidance.",
    href: "/sleep",
  },
  {
    icon: Activity,
    title: "Weight & Metabolic Health",
    description: "Evidence-based metabolic health review for midlife women. Discussion of GLP-1 therapies and lifestyle approaches where appropriate.",
    href: "/services",
  },
]

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
                Menopause & Sleep GP · Telehealth Australia
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-near-black leading-tight mb-6">
                Finally, a GP who takes your menopause seriously.
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Extended telehealth consultations with Dr. Premila Hewage MBBS FRACGP — available across Australia. HRT, non-hormonal options, and personalised care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/book">Book a Consultation</Button>
                <Button href="/assessment" variant="secondary">Take the Free Assessment</Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dr-hewage-hero.png"
                  alt="Dr. Premila Hewage — Menopause & Sleep GP"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* The Problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-4">
            You deserve more than a 15-minute appointment.
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Most women with menopause symptoms have had the same experience. Here is what Dr. Hewage does differently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="space-y-4">
                <div className="bg-warm-grey rounded-2xl p-5">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">What women often experience</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.before}</p>
                </div>
                <div className="bg-sage/10 border border-sage/20 rounded-2xl p-5">
                  <p className="text-xs font-medium text-sage uppercase tracking-wide mb-2">With Dr. Hewage</p>
                  <p className="text-near-black text-sm leading-relaxed font-medium">{p.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-12">
            How I can help you.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-warm-rose flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-semibold text-near-black text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{s.description}</p>
                <Link href={s.href} className="text-sage text-sm font-medium hover:underline inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <section className="bg-warm-rose/20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-4">
            What patients say.
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Dr. Hewage has helped patients across Melbourne, Sydney, Brisbane, and regional Australia.
          </p>
          <TestimonialsGrid limit={3} />
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/dr-hewage-about.png"
                  alt="Dr. Premila Hewage"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">Meet Dr. Hewage</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black mb-6">
                Dr. Premila Hewage<br />MBBS (Hons), FRACGP
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Melbourne GP with 15+ years of primary care experience, specialising in menopause management and sleep health. Dr. Hewage provides evidence-based treatment that combines clinical rigour with genuine listening.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                She is the author of two books in the <em>Modern Menopause Care from Your GP</em> series — evidence-based guides bringing 15 years of clinical experience together with contemporary research.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-4 h-4 text-sage" />
                <span className="text-sm text-gray-500 font-medium">Author: <em>Menopause & Sleep: A GP&apos;s Guide</em></span>
              </div>
              <Button href="/about" variant="secondary">Meet Dr. Hewage</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Assessment CTA */}
      <section className="bg-sage py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Take the free 2-minute menopause health assessment and get a personalised summary from Dr. Hewage.
          </p>
          <Button href="/assessment" className="bg-white text-sage hover:bg-cream">
            Start the Assessment
          </Button>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl font-bold text-near-black">From the clinic.</h2>
            <Link href="/articles" className="text-sage text-sm font-medium hover:underline hidden sm:block">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <Card className="h-full flex flex-col">
                  <p className="text-xs text-gray-400 mb-2">{article.readTime}</p>
                  <h3 className="font-semibold text-near-black group-hover:text-sage transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{article.summary}</p>
                  <span className="mt-4 text-sage text-sm font-medium group-hover:underline">Read →</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Booking CTA */}
      <BookingCTA />
    </>
  )
}
