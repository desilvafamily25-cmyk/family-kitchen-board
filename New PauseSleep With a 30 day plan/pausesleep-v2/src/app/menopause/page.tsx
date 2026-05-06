import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { TrustBar } from "@/components/sections/TrustBar"
import { ConditionGrid } from "@/components/sections/ConditionGrid"
import { BookingCTA } from "@/components/sections/BookingCTA"

export const metadata: Metadata = {
  title: "Menopause GP Telehealth Australia | HRT & Non-Hormonal Options",
  description:
    "GP-led management of perimenopause and menopause — including HRT, non-hormonal options, and lifestyle support. Telehealth across Australia with Dr. Premila Hewage FRACGP.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause" },
}

export default function MenopausePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
              Menopause Care · Telehealth Australia
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black leading-tight mb-6">
              Menopause care that takes you seriously.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              GP-led management of perimenopause and menopause — including HRT, non-hormonal options, and lifestyle support. Extended telehealth consultations across Australia with Dr. Premila Hewage MBBS FRACGP.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/book">Book a Consultation</Button>
              <Button href="/assessment" variant="secondary">Free Assessment</Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Condition Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-4">
            What are you experiencing?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Select the symptom that is most affecting you to learn more about how Dr. Hewage approaches treatment.
          </p>
          <ConditionGrid />
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-12">
            Treatment approach.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-2xl font-semibold text-sage mb-4">Hormonal Options</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hormone Replacement Therapy (HRT) is the most effective treatment for vasomotor symptoms and is suitable for the majority of women under 60 or within 10 years of menopause. Modern HRT uses body-identical hormones with a well-established safety profile.
              </p>
              <p className="text-gray-500 text-sm">
                Dr. Hewage provides a thorough HRT candidacy assessment covering your personal and family history, contraindications, and formulation options — patches, gels, tablets, and combinations.
              </p>
              <a href="/menopause/hormone-therapy" className="mt-4 inline-block text-sage text-sm font-medium hover:underline">
                Learn about HRT →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-2xl font-semibold text-sage mb-4">Non-Hormonal Options</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For women who cannot or prefer not to take HRT, effective non-hormonal treatments exist. These include specific antidepressants (SSRIs/SNRIs) for vasomotor symptoms, CBT-I for sleep, and evidence-based lifestyle modifications.
              </p>
              <p className="text-gray-500 text-sm">
                Dr. Hewage is experienced in both hormonal and non-hormonal approaches, and will discuss all options based on your specific symptoms and history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-sage py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Book a Menopause Consultation
          </h2>
          <p className="text-white/80 mb-2">45-minute extended appointment · $195</p>
          <p className="text-white/60 text-sm mb-8">Medicare rebate approximately $42.85 · Out-of-pocket approximately $152</p>
          <Button href="/book" className="bg-white text-sage hover:bg-cream">
            Book Now
          </Button>
        </div>
      </section>
    </>
  )
}
