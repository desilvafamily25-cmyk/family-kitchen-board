import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { Accordion } from "@/components/ui/Accordion"
import { TrustBar } from "@/components/sections/TrustBar"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "HRT Online Australia 2025 | Hormone Therapy GP Telehealth",
  description:
    "Evidence-based HRT consultation via telehealth. Dr. Premila Hewage FRACGP provides thorough, personalised HRT assessment across Australia. Modern evidence, individualised care.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/hormone-therapy" },
}

const hrtTypes = [
  { type: "Transdermal (patches, gels)", note: "Preferred for women with migraine, high triglycerides, or elevated clotting risk. Bypasses liver metabolism." },
  { type: "Oral tablets", note: "Convenient and well-studied. Slightly higher clotting risk due to liver first-pass metabolism." },
  { type: "Oestrogen-only", note: "For women who have had a hysterectomy. Does not require progestogen." },
  { type: "Combined (oestrogen + progestogen)", note: "For women with an intact uterus. Body-identical progesterone (Prometrium) preferred." },
  { type: "Testosterone", note: "Used off-label for low libido, fatigue, and mood in menopause. Applied as a gel." },
]

const faqItems = [
  {
    question: "Is HRT safe?",
    answer:
      "For the majority of women under 60, or within 10 years of menopause, HRT is safe and effective. The previously overstated risks from the 2002 WHI study have been substantially revised. Modern body-identical HRT, particularly transdermal oestrogen with oral progesterone, carries a favourable risk profile. The decision is always individualised based on your personal history.",
  },
  {
    question: "Can I get HRT via telehealth in Australia?",
    answer:
      "Yes. A qualified GP can assess your suitability for HRT and prescribe it via a telehealth consultation. Prescriptions are sent electronically to your pharmacy. No specialist referral is required.",
  },
  {
    question: "How long does HRT take to work?",
    answer:
      "Most women notice improvement in hot flushes and night sweats within 4–6 weeks. Mood and sleep improvements may take 8–12 weeks. Full benefit is typically achieved at 3 months.",
  },
  {
    question: "What if I can't take HRT?",
    answer:
      "Effective non-hormonal alternatives exist. SSRIs and SNRIs (venlafaxine, escitalopram) reduce hot flush frequency and improve mood. Fezolinetant is a newer non-hormonal option specifically for vasomotor symptoms. CBT-I addresses sleep. Dr. Hewage will discuss all options if HRT is not suitable for you.",
  },
  {
    question: "Does HRT cause breast cancer?",
    answer:
      "The breast cancer risk associated with HRT is small, varies by formulation, and has been significantly overstated in older literature. Oestrogen-only HRT (for women without a uterus) does not appear to increase breast cancer risk. Combined HRT carries a small increased risk, roughly equivalent to drinking one glass of wine daily. This risk must be weighed against the significant benefits of symptom relief, bone protection, and cardiovascular benefit when started early.",
  },
]

export default function HormoneTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sage font-medium text-sm uppercase tracking-widest mb-4">
              Hormone Therapy · Telehealth Australia
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black leading-tight mb-6">
              HRT — What You Need to Know in 2025.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The evidence on hormone replacement therapy has changed significantly. Dr. Hewage provides a thorough, personalised HRT assessment via telehealth — based on current evidence, not 20-year-old caution.
            </p>
            <Button href="/book">Book an HRT Assessment</Button>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What HRT Is */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-near-black mb-6">What is HRT?</h2>
          <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
            Hormone Replacement Therapy (HRT) — also called Menopausal Hormone Therapy (MHT) — replaces the oestrogen and progesterone that the ovaries produce less of during perimenopause and menopause.
          </p>
          <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
            The current consensus from the Australasian Menopause Society and major international bodies is that HRT is safe and effective for the majority of perimenopausal and menopausal women under 60, or within 10 years of menopause. It is the most effective treatment available for vasomotor symptoms (hot flushes, night sweats) and also protects bone density and — when started early — may protect cardiovascular health.
          </p>
          <p className="text-gray-600 leading-relaxed text-[17px]">
            The risks from older studies (particularly the 2002 Women&apos;s Health Initiative) were substantially overstated and applied to a specific formulation used in an older population. Modern body-identical HRT carries a substantially different risk profile.
          </p>
        </div>
      </section>

      {/* Is HRT right for you */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-2xl font-semibold text-sage mb-4">HRT may be suitable if you:</h3>
              <ul className="space-y-2">
                {[
                  "Are under 60 or within 10 years of menopause",
                  "Have bothersome hot flushes or night sweats",
                  "Have sleep disruption related to vasomotor symptoms",
                  "Have mood changes, brain fog, or joint aches",
                  "Are concerned about bone density",
                  "Have no significant contraindications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-2xl font-semibold text-near-black mb-4">A careful assessment is needed if you have:</h3>
              <ul className="space-y-2">
                {[
                  "A history of hormone receptor-positive breast cancer",
                  "Active liver disease",
                  "Unexplained vaginal bleeding",
                  "A personal history of DVT or pulmonary embolism",
                  "Uncontrolled cardiovascular disease",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4">This is not an exhaustive list. Only way to know: a thorough consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of HRT */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-near-black mb-8">Types of HRT available in Australia.</h2>
          <div className="space-y-3">
            {hrtTypes.map((h) => (
              <div key={h.type} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-near-black text-sm mb-1">{h.type}</p>
                <p className="text-gray-500 text-sm">{h.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-near-black text-center mb-10">Common questions.</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-sage py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Book an HRT Assessment
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Telehealth across Australia. A thorough 45-minute consultation — not a rushed prescription.
          </p>
          <Button href="/book" className="bg-white text-sage hover:bg-cream">Book Now</Button>
        </div>
      </section>
    </>
  )
}
