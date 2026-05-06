import type { Metadata } from "next"
import { ConditionPageTemplate } from "@/components/sections/ConditionPageTemplate"

export const metadata: Metadata = {
  title: "Sleep Problems in Menopause | GP Telehealth",
  description:
    "Sleep disruption affects 40–60% of perimenopausal women. GP-led treatment including CBT-I and HRT with Dr. Premila Hewage FRACGP. Telehealth across Australia.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/sleep-problems" },
}

export default function SleepProblemsPage() {
  return (
    <ConditionPageTemplate
      headline="Sleep Problems in Menopause"
      subheading="Sleep complaints are highly prevalent — 40–60% of women report sleep disruption during perimenopause and early postmenopause. You do not have to manage this alone."
      whatIsHappening="Menopausal sleep disruption typically has multiple causes. Vasomotor symptoms (night sweats) wake women from sleep, triggering a hyperarousal response that makes returning to sleep difficult. Declining progesterone — which has sedative and GABA-modulating properties — directly reduces sleep quality. Anxiety and mood changes (common in perimenopause) drive hyperarousal. Once insomnia becomes established, conditioned arousal (learned association of bed with wakefulness) perpetuates it even after the original cause is treated."
      treatments={[
        {
          type: "Hormonal",
          title: "HRT for hormonal sleep disruption",
          description: "Where night sweats are the primary sleep disruptor, HRT is highly effective — reducing vasomotor symptoms by 75–90% and improving sleep quality significantly. Progesterone (particularly oral micronised progesterone, Prometrium) has direct sedative effects and often improves sleep onset in addition to its hormonal role.",
        },
        {
          type: "Non-Hormonal",
          title: "CBT-I — First-line for chronic insomnia",
          description: "Cognitive Behavioural Therapy for Insomnia (CBT-I) is the evidence-based first-line treatment for chronic insomnia and outperforms sleeping tablets for long-term outcomes. Dr. Hewage provides a CBT-I framework within the consultation alongside appropriate medication review.",
        },
      ]}
      consultationCovers={[
        "Full sleep history — onset, maintenance, early waking, duration",
        "Vasomotor symptom assessment and its contribution to sleep disruption",
        "HRT assessment where night sweats are driving insomnia",
        "CBT-I framework — sleep restriction, stimulus control, cognitive restructuring",
        "Medication review — current sleep aids, safety, alternatives",
        "Written sleep plan with all treatment components",
      ]}
    />
  )
}
