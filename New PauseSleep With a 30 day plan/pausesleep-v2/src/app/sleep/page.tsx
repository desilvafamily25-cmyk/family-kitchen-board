import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { TrustBar } from "@/components/sections/TrustBar"
import { BookingCTA } from "@/components/sections/BookingCTA"
import { Check, Moon, Brain, Heart, Pill } from "lucide-react"

export const metadata: Metadata = {
  title: "Sleep Health & Insomnia GP Telehealth Australia | Dr. Premila Hewage",
  description:
    "GP-led sleep assessment and evidence-based treatment. CBT-I, medication management, and menopause-related sleep care. Telehealth across Australia with Dr. Premila Hewage FRACGP.",
  alternates: { canonical: "https://www.pausesleep.com.au/sleep" },
}

const conditions = [
  {
    icon: Moon,
    title: "Insomnia",
    description: "Chronic difficulty falling asleep, staying asleep, or waking too early. CBT-I is first-line treatment — more effective than sleeping tablets long-term.",
  },
  {
    icon: Heart,
    title: "Menopause-Related Sleep Disruption",
    description: "Night sweats, hormonal changes, and perimenopausal anxiety all contribute to sleep disruption. HRT and CBT-I used in combination where appropriate.",
  },
  {
    icon: Brain,
    title: "Sleep Anxiety",
    description: "Fear of sleeplessness that creates a hyperarousal cycle. CBT-I specifically addresses the cognitive and behavioural patterns that maintain sleep anxiety.",
  },
  {
    icon: Pill,
    title: "Medication Review for Sleep",
    description: "Review of current sleep medications — efficacy, safety, dependency risk, and evidence-based alternatives including melatonin and sedative antihistamines.",
  },
]

const consultationCovers = [
  "Full sleep history — onset, maintenance, waking, duration, daytime function",
  "Contributing factors — hormones, anxiety, habits, environment",
  "CBT-I framework introduction — sleep restriction, stimulus control, cognitive restructuring",
  "Medication review — current sleep aids, safety, alternatives",
  "Vasomotor symptom assessment and its contribution to sleep disruption",
  "Written sleep plan emailed within 24 hours",
]

export default function SleepPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
              Sleep Health · Telehealth Australia
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black leading-tight mb-6">
              Can&apos;t sleep? There&apos;s more help available than you think.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dr. Hewage offers GP-led sleep assessments and evidence-based treatment including Cognitive Behavioural Therapy for Insomnia (CBT-I) and medication management. Telehealth across Australia.
            </p>
            <Button href="/book">Book a Sleep Consultation</Button>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Conditions Treated */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-12">
            Sleep conditions we treat.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {conditions.map((c) => (
              <div key={c.title} className="bg-warm-grey rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-semibold text-near-black text-lg mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBT-I */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-near-black mb-6">
            The CBT-I approach.
          </h2>
          <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
            Cognitive Behavioural Therapy for Insomnia (CBT-I) is recommended by sleep medicine guidelines globally as the first-line treatment for chronic insomnia — ahead of sleeping tablets.
          </p>
          <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
            Unlike medications, which sedate the brain without addressing why you are not sleeping, CBT-I targets the specific thoughts and behaviours that maintain insomnia: conditioned arousal, sleep restriction, stimulus control, and cognitive restructuring. Studies consistently show that CBT-I produces improvements that last years after treatment ends.
          </p>
          <p className="text-gray-600 leading-relaxed text-[17px]">
            A GP-led approach is important because menopausal insomnia typically has multiple causes — hormonal, psychological, and behavioural — that need to be addressed together. Dr. Hewage integrates CBT-I principles with hormonal assessment (HRT where appropriate) and medication review.
          </p>
        </div>
      </section>

      {/* Consultation Covers */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-near-black mb-8">
            What your sleep consultation covers.
          </h2>
          <ul className="space-y-3">
            {consultationCovers.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingCTA
        headline="Book a Sleep Consultation"
        subtext="45 minutes · $195 · Medicare rebate available. Telehealth across Australia."
      />
    </>
  )
}
