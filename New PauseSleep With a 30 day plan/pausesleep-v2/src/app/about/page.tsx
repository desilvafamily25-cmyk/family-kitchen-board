import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { TrustBar } from "@/components/sections/TrustBar"
import { BookingCTA } from "@/components/sections/BookingCTA"
import { Award, BookOpen, GraduationCap, Clock, MapPin, Wifi } from "lucide-react"

export const metadata: Metadata = {
  title: "About Dr. Premila Hewage | Menopause Specialist Melbourne",
  description:
    "Dr. Premila Hewage MBBS FRACGP — Melbourne GP with 15+ years experience specialising in menopause management and sleep health. Author. Telehealth across Australia.",
  alternates: { canonical: "https://www.pausesleep.com.au/about" },
}

const credentials = [
  { icon: GraduationCap, title: "MBBS (Hons)", description: "Bachelor of Medicine, Bachelor of Surgery — with Honours" },
  { icon: Award, title: "FRACGP", description: "Fellow of the Royal Australian College of General Practitioners" },
  { icon: Clock, title: "15+ Years Experience", description: "Primary care experience across Melbourne and telehealth" },
  { icon: BookOpen, title: "Published Author", description: "Two books in the Modern Menopause Care from Your GP series" },
  { icon: MapPin, title: "In-Person Clinics", description: "Hawthorn · Balwyn · Fitzroy North, Melbourne VIC" },
  { icon: Wifi, title: "Telehealth Australia-wide", description: "Video consultations available across all states and territories" },
]

const principles = [
  {
    title: "I listen for the full picture.",
    description: "Most menopause symptoms have multiple contributing factors. A rushed appointment misses them. Every consultation is 45 minutes for a reason.",
  },
  {
    title: "I combine evidence with individuality.",
    description: "The research matters — but so does your history, your preferences, and your life. Treatment plans are personalised, not templated.",
  },
  {
    title: "No rushed appointments.",
    description: "You will not be watching the clock. You will leave with a clear understanding of your options and a written plan.",
  },
  {
    title: "Transparency on all options.",
    description: "HRT is not for everyone. Neither is avoiding it. I will give you an honest assessment of what is suitable for your specific situation.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
                Melbourne GP · Menopause & Sleep Specialist
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black leading-tight mb-4">
                Dr. Premila Hewage<br />MBBS (Hons), FRACGP
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Melbourne GP with 15+ years experience, specialising in menopause management and sleep health. Telehealth available across Australia.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["FRACGP", "15+ Years", "Telehealth AUS", "Published Author"].map((b) => (
                  <span key={b} className="bg-warm-rose text-near-black text-sm font-medium px-3 py-1 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
              <Button href="/book">Book a Consultation</Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-[420px] md:w-80 md:h-[480px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dr-hewage-hero.png"
                  alt="Dr. Premila Hewage"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* My Story */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black mb-8">
            Why I specialise in this.
          </h2>
          <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
            <p>
              After 15 years in primary care, I saw a clear and consistent pattern: women in their 40s and 50s were arriving at appointments exhausted, frustrated, and frequently dismissed. Their symptoms — disrupted sleep, hot flushes, mood changes, weight shifts — were often attributed to stress or ageing, when the underlying cause was hormonal and eminently treatable.
            </p>
            <p>
              I chose to focus on menopause and sleep because this is where I can make the most meaningful difference. Not with a 15-minute prescription and a vague referral, but with extended appointments, evidence-based assessment, and a written plan that actually makes sense to the patient in front of me.
            </p>
            <p>
              The evidence on HRT has changed significantly in the last decade. The approach to sleep health — particularly CBT-I — has advanced dramatically. My goal is to make that evidence accessible and actionable for women across Australia, wherever they live.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-12">
            Credentials & practice details.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-warm-rose flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-semibold text-near-black mb-1">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Book */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-48 h-64 md:w-56 md:h-80 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/book-cover.png"
                  alt="Menopause & Sleep: A GP's Guide"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">Published Work</p>
              <h2 className="font-display text-3xl font-bold text-near-black mb-4">
                Menopause & Sleep: A GP&apos;s Guide
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A systematic, evidence-based 6-step framework for addressing menopausal sleep disturbance. Covers sleep types, night sweats, CBT-I, bedroom engineering, supplements, and hormonal assessment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Part of the <em>Modern Menopause Care from Your GP</em> series — bringing 15 years of primary care experience together with contemporary research, written for the patient who wants to understand their condition, not just manage it.
              </p>
              <Button href="https://www.sleepmenopause.com.au" variant="secondary" showArrow={false}>
                View on Amazon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-12">
            My approach.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display text-xl font-semibold text-sage mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA subtext="Consultations available across Australia via telehealth." />
    </>
  )
}
