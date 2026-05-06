import type { Metadata } from "next"
import { ConditionPageTemplate } from "@/components/sections/ConditionPageTemplate"

export const metadata: Metadata = {
  title: "Menopause Weight Gain — GP-Led Treatment | Telehealth",
  description:
    "Midlife weight changes during menopause are metabolic and hormonal. GP-led assessment and evidence-based treatment with Dr. Premila Hewage. Telehealth Australia.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/weight-changes" },
}

export default function WeightChangesPage() {
  return (
    <ConditionPageTemplate
      headline="Weight Changes in Menopause"
      subheading="Midlife weight gain is not a failure of willpower. It is metabolic — driven by hormonal changes that alter fat distribution, insulin sensitivity, and appetite regulation."
      whatIsHappening="Declining oestrogen shifts fat distribution from the hips and thighs (subcutaneous) to the abdomen (visceral). Visceral fat is metabolically active and associated with insulin resistance, cardiovascular risk, and inflammation. At the same time, falling progesterone can increase cortisol sensitivity, and disrupted sleep amplifies hunger hormones. Calorie restriction alone rarely addresses these mechanisms effectively."
      treatments={[
        {
          type: "Hormonal",
          title: "HRT & metabolic health",
          description: "HRT can attenuate the shift to visceral fat distribution that occurs with oestrogen decline. Some studies show HRT reduces midlife weight gain and improves insulin sensitivity. It is not a weight loss treatment, but it addresses the hormonal substrate that makes weight management more difficult.",
        },
        {
          type: "Evidence-Based",
          title: "GLP-1 therapies & lifestyle",
          description: "GLP-1 receptor agonists (including semaglutide) are now available in Australia for weight management in appropriate candidates. Evidence-based lifestyle modification — including protein-prioritised nutrition, resistance training, and sleep optimisation — has strong evidence for midlife metabolic health.",
        },
      ]}
      consultationCovers={[
        "Metabolic health review — weight history, insulin resistance markers",
        "HRT candidacy and its role in weight management",
        "Assessment for GLP-1 therapy suitability",
        "Sleep review (poor sleep drives hunger hormones)",
        "Nutrition and exercise recommendations tailored to midlife physiology",
        "Written plan with all evidence-based options",
      ]}
    />
  )
}
