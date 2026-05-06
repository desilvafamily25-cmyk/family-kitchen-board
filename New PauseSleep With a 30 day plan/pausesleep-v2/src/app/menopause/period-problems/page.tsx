import type { Metadata } from "next"
import { ConditionPageTemplate } from "@/components/sections/ConditionPageTemplate"

export const metadata: Metadata = {
  title: "Irregular Periods — Perimenopause | GP Telehealth",
  description:
    "Irregular, heavy, or unpredictable periods are a key sign of perimenopause. GP assessment and management with Dr. Premila Hewage FRACGP. Telehealth across Australia.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/period-problems" },
}

export default function PeriodProblemsPage() {
  return (
    <ConditionPageTemplate
      headline="Irregular Periods & Perimenopause"
      subheading="Unpredictable, heavy, or infrequent periods are often the first sign that perimenopause has begun — sometimes years before your last period."
      whatIsHappening="In perimenopause, follicle-stimulating hormone (FSH) rises as the ovaries respond less reliably. This leads to erratic ovulation — some cycles where ovulation occurs normally, others where it does not. Without ovulation, progesterone is not produced, leading to oestrogen dominance and often heavier, longer, or more frequent periods. As perimenopause progresses, cycles may become shorter, then longer, then increasingly sparse — until menopause (12 months without a period) is reached."
      treatments={[
        {
          type: "Assessment First",
          title: "Ruling out other causes",
          description: "Heavy or irregular bleeding always warrants proper assessment to exclude fibroids, polyps, or endometrial pathology. Dr. Hewage will determine whether investigations (blood tests, ultrasound, gynaecology referral) are indicated before attributing changes to perimenopause.",
        },
        {
          type: "Management Options",
          title: "Hormonal regulation",
          description: "For confirmed perimenopausal irregular bleeding, options include progestogen to regulate cycles, the Mirena IUD (which also provides the progestogen component of HRT), or combined HRT where vasomotor symptoms are also present. Each approach is tailored to your symptom pattern.",
        },
      ]}
      consultationCovers={[
        "Full menstrual history — cycle length, flow, recent changes",
        "Assessment for conditions requiring investigation (fibroids, polyps)",
        "Perimenopause staging",
        "Hormonal management options — progestogen, Mirena, HRT",
        "Contraception discussion if still potentially fertile",
        "Written plan — next steps and follow-up",
      ]}
    />
  )
}
