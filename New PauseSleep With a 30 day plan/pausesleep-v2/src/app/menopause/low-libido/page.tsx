import type { Metadata } from "next"
import { ConditionPageTemplate } from "@/components/sections/ConditionPageTemplate"

export const metadata: Metadata = {
  title: "Low Libido in Menopause — GP Telehealth | Dr. Premila Hewage",
  description:
    "Loss of libido affects up to 40% of women in menopause. GP-led assessment including testosterone therapy. Telehealth across Australia with Dr. Premila Hewage FRACGP.",
  alternates: { canonical: "https://www.pausesleep.com.au/menopause/low-libido" },
}

export default function LowLibidoPage() {
  return (
    <ConditionPageTemplate
      headline="Low Libido"
      subheading="Loss of libido in menopause is one of the most common — and least discussed — symptoms. It is hormonal, it is real, and there are evidence-based treatments."
      whatIsHappening="Sexual desire is regulated by a complex interplay of hormones — primarily testosterone and oestrogen — as well as mood, sleep quality, and relationship factors. In perimenopause and menopause, declining oestrogen causes vaginal dryness and discomfort that makes sex unappealing. Declining testosterone (which peaks in a woman's 20s and falls steadily thereafter) directly reduces libido. Up to 40% of postmenopausal women report low sexual desire as a significant concern."
      treatments={[
        {
          type: "Hormonal",
          title: "Testosterone therapy & oestrogen",
          description: "Testosterone therapy is used off-label in Australia for hypoactive sexual desire disorder in women. Evidence shows significant improvement in desire, arousal, and satisfaction. Local vaginal oestrogen addresses dryness and discomfort without significant systemic absorption — it is safe even for women with contraindications to systemic HRT.",
        },
        {
          type: "Non-Hormonal",
          title: "Vaginal moisturisers & therapy",
          description: "Non-hormonal vaginal moisturisers (Replens, hyaluronic acid) can address dryness where hormonal options are not suitable. Couples therapy or sex therapy can address psychological and relational dimensions. Adequate treatment of sleep disorders and mood often improves libido as a secondary effect.",
        },
      ]}
      consultationCovers={[
        "Comprehensive libido and sexual health history",
        "Assessment for testosterone therapy candidacy",
        "Local vaginal oestrogen assessment",
        "Sleep and mood review (both strongly affect libido)",
        "Discussion of non-hormonal options",
        "Written plan — all options outlined clearly",
      ]}
    />
  )
}
