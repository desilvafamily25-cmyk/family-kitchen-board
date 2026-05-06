import { Button } from "@/components/ui/Button"

export function ArticleCTA() {
  return (
    <div className="bg-sage/10 border border-sage/20 rounded-2xl p-6 md:p-8 my-12">
      <h3 className="font-display text-xl font-bold text-near-black mb-2">
        Speak with Dr. Hewage
      </h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        If this article resonates with what you're experiencing, a 45-minute telehealth consultation will give you a personalised assessment and a clear plan.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/book" variant="primary">Book a Consultation</Button>
        <Button href="/assessment" variant="secondary">Take the Free Assessment</Button>
      </div>
    </div>
  )
}
