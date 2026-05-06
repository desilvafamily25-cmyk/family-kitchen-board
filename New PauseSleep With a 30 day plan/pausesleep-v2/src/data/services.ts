export const consultationTypes = [
  {
    title: "New Patient — Menopause Consultation",
    duration: "45 minutes",
    price: 195,
    rebate: 42.85,
    outOfPocket: 152.15,
    includes: [
      "Full symptom and medical history review",
      "HRT candidacy assessment",
      "Personalised treatment plan",
      "Non-hormonal alternatives discussed",
      "Referrals if needed",
      "Written plan emailed within 24 hours",
    ],
    slug: "menopause",
  },
  {
    title: "New Patient — Sleep Consultation",
    duration: "45 minutes",
    price: 195,
    rebate: 42.85,
    outOfPocket: 152.15,
    includes: [
      "Comprehensive sleep history",
      "CBT-I framework introduction",
      "Contributing factors assessed (hormones, anxiety, habits)",
      "Medication review if relevant",
      "Supplement guidance",
      "Written sleep plan emailed within 24 hours",
    ],
    slug: "sleep",
  },
  {
    title: "Follow-up Consultation",
    duration: "30 minutes",
    price: 130,
    rebate: 30.75,
    outOfPocket: 99.25,
    includes: [
      "Review of treatment progress",
      "Medication adjustments if needed",
      "Plan refinement",
      "Prescription renewal",
    ],
    slug: "followup",
  },
]

export const services = [
  {
    title: "Menopause Management",
    description: "Assessment and management of perimenopause and menopause symptoms including HRT evaluation, hormonal health review, and individualised treatment planning.",
    icon: "Flower2",
    href: "/menopause",
  },
  {
    title: "Sleep Health",
    description: "Structured review of sleep quality, sleep patterns, and insomnia type. Covers CBT-I principles, sleep hygiene, and supplement guidance.",
    icon: "Moon",
    href: "/sleep",
  },
  {
    title: "Weight & Metabolic Health",
    description: "Metabolic health review for midlife women. Discussion of GLP-1 therapies and evidence-based approaches to midlife weight management where appropriate.",
    icon: "Activity",
    href: "/services",
  },
]
