import { Button } from "@/components/ui/Button"

interface BookingCTAProps {
  headline?: string
  subtext?: string
  dark?: boolean
}

export function BookingCTA({
  headline = "Ready to take control of your health?",
  subtext = "Telehealth appointments available today. New patients welcome.",
  dark = true,
}: BookingCTAProps) {
  return (
    <section className={dark ? "bg-near-black text-white" : "bg-sage text-white"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
        <Button href="/book" className={dark ? "bg-sage hover:bg-sage-light text-white" : "bg-white hover:bg-cream text-sage"}>
          Book Your Consultation
        </Button>
      </div>
    </section>
  )
}
