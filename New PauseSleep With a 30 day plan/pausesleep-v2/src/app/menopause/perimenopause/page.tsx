import type { Metadata } from "next"
import { ConditionPageTemplate } from "@/components/sections/ConditionPageTemplate"

export const metadata: Metadata = {
  title: "Perimenopause — Symptoms, Diagnosis & Treatment | GP Telehealth",
  description:
    "Perimenopause can begin 10 years before your last period. GP assessment and management with Dr. Premila Hewage FRACGP. Telehealth across Australia.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/perimenopause" },
}

export default function PerimenopausePage() {
  return (
    <ConditionPageTemplate
      headline="Perimenopause — The Transition Phase"
      subheading="Perimenopause can start a decade before your last period. If you are in your 40s and your sleep, mood, or cycles have changed, this may be why."
      whatIsHappening="Perimenopause is the transition phase during which ovarian function gradually declines. Oestrogen levels fluctuate erratically — sometimes spiking, sometimes dropping — before eventually falling to the consistently low level of menopause. Menopause itself is defined as 12 consecutive months without a period; the average age in Australian women is 51. Perimenopause typically begins 4–10 years before that — and it is during this phase that symptoms are often at their most disruptive. There is no single blood test for perimenopause; diagnosis is primarily clinical, based on your symptoms, cycle changes, and age."
      treatments={[
        {
          type: "Hormonal",
          title: "HRT to smooth the transition",
          description: "HRT can smooth the hormonal fluctuations of perimenopause and significantly reduce symptom burden. Low-dose combined HRT (oestrogen plus progestogen) is typically used in perimenopause where periods are still occurring. The contraceptive pill is sometimes used as an alternative in early perimenopause to regulate cycles and manage symptoms.",
        },
        {
          type: "Non-Hormonal",
          title: "Symptom-specific management",
          description: "CBT-I for sleep disruption, SSRIs for mood and vasomotor symptoms, and evidence-based lifestyle approaches (resistance training, nutrition, stress management) all have strong evidence in perimenopause. Non-hormonal options are appropriate for women who cannot or prefer not to use HRT.",
        },
      ]}
      consultationCovers={[
        "Full symptom history — all dimensions of perimenopause",
        "Perimenopause staging and likely timeline",
        "HRT options appropriate to your stage of the transition",
        "Non-hormonal alternatives",
        "Contraception assessment if still potentially fertile",
        "Written plan — personalised to your symptom pattern",
      ]}
    />
  )
}
