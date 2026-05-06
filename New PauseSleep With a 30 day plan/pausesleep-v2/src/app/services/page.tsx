import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { TrustBar } from "@/components/sections/TrustBar"
import { BookingCTA } from "@/components/sections/BookingCTA"
import { Accordion } from "@/components/ui/Accordion"
import { consultationTypes } from "@/data/services"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services & Pricing | Menopause & Sleep GP Telehealth",
  description:
    "Transparent consultation fees for menopause and sleep GP appointments. New patient consultation $195 (45 min). Medicare rebates available. Telehealth across Australia.",
  alternates: { canonical: "https://www.pausesleep.com.au/services" },
}

const faqItems = [
  {
    question: "Is this Medicare-rebatable?",
    answer:
      "Yes. Telehealth consultations with Dr. Hewage attract a Medicare rebate. For a 45-minute new patient consultation, the rebate is approximately $42.85. For a 30-minute follow-up, the rebate is approximately $30.75. You will receive a Medicare rebate directly to your nominated bank account.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No. You do not need a GP referral to see Dr. Hewage. You can book directly as a new patient. If a specialist referral becomes clinically necessary, Dr. Hewage can provide one during your consultation.",
  },
  {
    question: "Can I get prescriptions via telehealth?",
    answer:
      "Yes. Dr. Hewage can issue prescriptions electronically during a telehealth consultation. These are sent to your nominated pharmacy via eScript. This includes HRT, sleep medications, and other treatments where clinically appropriate.",
  },
  {
    question: "What technology do I need?",
    answer:
      "A smartphone, tablet, or computer with a working camera and microphone. The video call is conducted via a secure, healthcare-grade platform. A link is emailed to you 24 hours before your appointment. No app downloads required.",
  },
  {
    question: "What happens after I book?",
    answer:
      "You will receive a confirmation email immediately. 24 hours before your appointment, you will receive a video call link and a short intake form. Completing the intake form in advance allows Dr. Hewage to review your history before the consultation begins.",
  },
  {
    question: "Can I get a written plan?",
    answer:
      "Yes. A written treatment plan is emailed to you within 24 hours of your appointment. This includes your assessment findings, recommended treatments, any prescriptions issued, and next steps.",
  },
]

const steps = [
  {
    step: "Before",
    title: "Intake form emailed",
    description: "A short health history form is sent to you after booking. This allows Dr. Hewage to review your situation before the consultation — so the full 45 minutes is spent on assessment and planning, not paperwork.",
  },
  {
    step: "During",
    title: "Extended video consultation",
    description: "Join from anywhere in Australia. No waiting room. No clock-watching. A full assessment of your symptoms, history, and treatment options — with time to ask every question.",
  },
  {
    step: "After",
    title: "Written plan within 24 hours",
    description: "A written treatment plan is emailed to you. Prescriptions sent electronically to your pharmacy if needed. Follow-up timing recommended based on your plan.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black mb-4">
            Consultations & Pricing
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Extended appointments. No rushing. Transparent pricing.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Pricing Cards */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultationTypes.map((c) => (
              <div
                key={c.slug}
                className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-sage/40 transition-all duration-200 flex flex-col"
              >
                <h3 className="font-display text-xl font-bold text-near-black mb-1">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{c.duration}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-sage">${c.price}</span>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  Medicare rebate: approx. ${c.rebate.toFixed(2)} · Out-of-pocket: approx. ${c.outOfPocket.toFixed(2)}
                </p>
                <ul className="space-y-2 flex-1 mb-6">
                  {c.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/book" className="w-full justify-center">Book Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-12">
            What happens in a consultation.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100">
                <span className="text-xs font-medium text-sage uppercase tracking-widest mb-3 block">{s.step}</span>
                <h3 className="font-semibold text-near-black text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-12">
            Medicare & common questions.
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      <BookingCTA headline="Ready to book?" subtext="Appointments available today. New patients welcome." />
    </>
  )
}
