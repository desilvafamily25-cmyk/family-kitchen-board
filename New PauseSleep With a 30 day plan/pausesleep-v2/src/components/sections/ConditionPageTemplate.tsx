import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

interface TreatmentOption {
  type: "Hormonal" | "Non-Hormonal" | string
  title: string
  description: string
}

interface ConditionPageTemplateProps {
  headline: string
  subheading: string
  whatIsHappening: string
  treatments: TreatmentOption[]
  consultationCovers: string[]
}

export function ConditionPageTemplate({
  headline,
  subheading,
  whatIsHappening,
  treatments,
  consultationCovers,
}: ConditionPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{subheading}</p>
            <Button href="/book">Book a Consultation</Button>
          </div>
        </div>
      </section>

      {/* What's Happening */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-near-black mb-6">
            What&apos;s happening in your body.
          </h2>
          <p className="text-gray-600 leading-relaxed text-[17px]">{whatIsHappening}</p>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-near-black text-center mb-10">
            Treatment options.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments.map((t) => (
              <div key={t.type} className="bg-white rounded-2xl p-6 border border-gray-100">
                <span className="text-xs font-medium text-sage uppercase tracking-widest mb-3 block">{t.type}</span>
                <h3 className="font-semibold text-near-black text-lg mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{t.description}</p>
                <p className="text-xs text-gray-400 italic">Discussed in detail during your consultation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Covers */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-near-black mb-8">
            What your consultation covers.
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

      {/* Booking CTA */}
      <section className="bg-sage py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            Book a menopause consultation today.
          </h2>
          <p className="text-white/80 mb-1">Telehealth across Australia · $195 · 45 minutes</p>
          <p className="text-white/60 text-sm mb-8">Medicare rebate approximately $42.85</p>
          <Button href="/book" className="bg-white text-sage hover:bg-cream">
            Book Now
          </Button>
        </div>
      </section>
    </>
  )
}
