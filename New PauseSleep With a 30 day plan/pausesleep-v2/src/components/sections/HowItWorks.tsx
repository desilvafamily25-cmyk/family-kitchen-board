const steps = [
  {
    number: "1",
    title: "Book online in 2 minutes",
    description: "Choose your appointment type, select a time that suits you, and book securely. No referral required.",
  },
  {
    number: "2",
    title: "Attend your secure video consultation",
    description: "Join from anywhere in Australia. Extended appointments — no rushing. A video call link is emailed 24 hours before.",
  },
  {
    number: "3",
    title: "Receive your personalised plan",
    description: "A written plan is emailed within 24 hours. Prescriptions sent electronically if needed.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-near-black text-center mb-4">
          Simple. Straightforward. No waiting room.
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Everything done from home, with the care of an extended appointment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-sage text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-near-black text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
