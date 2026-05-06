import type { Metadata } from "next"
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid"
import { Accordion } from "@/components/ui/Accordion"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Premila Hewage",
  description:
    "Book a telehealth consultation with Dr. Premila Hewage. New patient menopause and sleep consultations available. No referral required. Medicare rebates apply.",
  alternates: { canonical: "https://www.pausesleep.com.au/book" },
}

const faqItems = [
  {
    question: "Can I get a prescription?",
    answer:
      "Yes. Dr. Hewage can issue prescriptions electronically during a telehealth consultation. These are sent as eScripts to your nominated pharmacy.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No. You can book directly as a new patient. No GP referral is required.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "Please cancel or reschedule at least 24 hours before your appointment. This can be done via the link in your confirmation email or by emailing info@pausesleep.com.au.",
  },
]

const postBookingSteps = [
  {
    number: "1",
    title: "Complete a short intake form",
    description: "Emailed to you after booking. Takes 5 minutes to complete. Allows Dr. Hewage to review your history before the appointment.",
  },
  {
    number: "2",
    title: "Join your video call",
    description: "A secure video link is emailed 24 hours before your appointment. No app download needed — just click and join.",
  },
  {
    number: "3",
    title: "Receive your written plan",
    description: "A personalised treatment plan is emailed within 24 hours. Includes prescriptions if needed, sent electronically to your pharmacy.",
  },
]

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black mb-4">
            Book Your Consultation
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            New patients welcome. No GP referral required. Telehealth available across Australia.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["FRACGP Qualified", "Medicare Rebates Available", "Secure Video Consultation"].map((b) => (
              <span key={b} className="bg-warm-rose text-near-black text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sage" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">
            You are booking a secure telehealth appointment. You will receive a video call link by email 24 hours before your appointment.
          </p>
          {/* Halaxy booking widget embed */}
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-cream min-h-[400px] flex items-center justify-center">
            <iframe
              src="https://halaxy.com/profile/dr-premila-mudugamuwa-hewage/gp-general-practitioner/1731269"
              className="w-full min-h-[600px] border-0"
              title="Book an appointment with Dr. Premila Hewage"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-near-black text-center mb-10">
            What to expect.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postBookingSteps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="w-10 h-10 rounded-full bg-sage text-white text-lg font-bold flex items-center justify-center mx-auto mb-3">
                  {s.number}
                </div>
                <h3 className="font-semibold text-near-black mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-near-black text-center mb-10">
            What patients say.
          </h2>
          <TestimonialsGrid limit={3} />
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-near-black text-center mb-8">
            Quick answers.
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  )
}
