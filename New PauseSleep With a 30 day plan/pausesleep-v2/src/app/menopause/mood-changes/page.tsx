import type { Metadata } from "next"
import { ConditionPageTemplate } from "@/components/sections/ConditionPageTemplate"

export const metadata: Metadata = {
  title: "Mood Changes & Anxiety in Menopause | GP Telehealth",
  description:
    "Anxiety, irritability, and low mood during perimenopause are hormonal — and treatable. GP-led assessment and treatment with Dr. Premila Hewage. Telehealth Australia.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/mood-changes" },
}

export default function MoodChangesPage() {
  return (
    <ConditionPageTemplate
      headline="Mood Changes & Anxiety"
      subheading="Feeling irritable, anxious, or unexpectedly low? During perimenopause, these are often hormonal — not a sign that something is wrong with you."
      whatIsHappening="Oestrogen and progesterone directly affect serotonin, dopamine, and GABA — the neurotransmitters that regulate mood. As these hormones fluctuate erratically during perimenopause, mood instability, anxiety, and low mood are common consequences. Many women in their 40s are misdiagnosed with primary depression when the underlying cause is perimenopause. The key distinction: if your mood symptoms are cyclical or accompanied by other menopause symptoms, the cause is almost certainly hormonal."
      treatments={[
        {
          type: "Hormonal",
          title: "HRT for mood stabilisation",
          description: "For perimenopausal mood symptoms, HRT — particularly oestrogen — can be highly effective. It addresses the hormonal fluctuations that destabilise neurotransmitter levels. Many women notice significant mood improvement within 4–8 weeks of starting HRT.",
        },
        {
          type: "Non-Hormonal",
          title: "SSRIs, therapy & lifestyle",
          description: "Where HRT is not appropriate, SSRIs and SNRIs (particularly venlafaxine and escitalopram) are effective for both mood symptoms and hot flushes. CBT and mindfulness-based approaches also have strong evidence for perimenopausal anxiety. Sleep treatment (CBT-I) frequently improves mood as a secondary effect.",
        },
      ]}
      consultationCovers={[
        "Full mood and anxiety symptom history",
        "Screening for perimenopausal mood disorder vs primary depression",
        "HRT assessment for mood stabilisation",
        "Review of sleep quality and its impact on mood",
        "Discussion of SSRIs, therapy referral, and lifestyle approaches",
        "Written plan with all treatment options",
      ]}
    />
  )
}
