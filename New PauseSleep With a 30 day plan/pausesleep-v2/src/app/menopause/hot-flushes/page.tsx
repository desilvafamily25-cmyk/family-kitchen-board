import type { Metadata } from "next"
import { ConditionPageTemplate } from "@/components/sections/ConditionPageTemplate"

export const metadata: Metadata = {
  title: "Hot Flushes Treatment Melbourne | GP Telehealth",
  description:
    "Effective treatment for hot flushes and night sweats during menopause. GP-led telehealth consultations across Australia. HRT and non-hormonal options with Dr. Premila Hewage.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/hot-flushes" },
}

export default function HotFlushesPage() {
  return (
    <ConditionPageTemplate
      headline="Hot Flushes & Night Sweats"
      subheading="Waking at 3am drenched in sweat is not something you just have to accept. There are effective treatments — and you deserve to know your options."
      whatIsHappening="Hot flushes and night sweats are vasomotor symptoms — caused by the declining oestrogen levels of perimenopause and menopause affecting the brain's thermoregulatory centre. The hypothalamus misreads normal body temperature as too high, triggering a heat-dissipation response: flushing, sweating, and a rapid heart rate. These episodes typically last 1–5 minutes and can occur multiple times a day (and night). They affect up to 80% of women during the menopause transition."
      treatments={[
        {
          type: "Hormonal",
          title: "Hormone Replacement Therapy (HRT)",
          description: "HRT is the most effective treatment for vasomotor symptoms, with evidence showing 75–90% reduction in hot flush frequency and severity. Modern body-identical HRT has a well-established safety profile for the majority of women. Formulations include transdermal patches, gels, and oral tablets.",
        },
        {
          type: "Non-Hormonal",
          title: "Non-hormonal medications & lifestyle",
          description: "For women who cannot or prefer not to take HRT, effective alternatives include SSRIs (escitalopram, venlafaxine), clonidine, and fezolinetant. CBT-based approaches reduce the distress associated with hot flushes. Trigger avoidance (caffeine, alcohol, spicy food) and layered clothing strategies can help manage symptoms.",
        },
      ]}
      consultationCovers={[
        "Full vasomotor symptom history — frequency, severity, triggers, timing",
        "HRT candidacy assessment — personal and family history, contraindications",
        "Non-hormonal alternative review",
        "Sleep impact assessment",
        "Written treatment plan with all options outlined",
      ]}
    />
  )
}
