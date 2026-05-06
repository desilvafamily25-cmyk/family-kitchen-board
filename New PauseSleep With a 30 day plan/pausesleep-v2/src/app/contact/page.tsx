import type { Metadata } from "next"
import { Mail, MapPin, Wifi, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Dr. Premila Hewage — Pause Sleep",
  description:
    "Contact Dr. Premila Hewage at Pause Sleep. Email, clinic locations, and telehealth booking information.",
  alternates: { canonical: "https://www.pausesleep.com.au/contact" },
}

const locations = [
  { name: "Hawthorn", detail: "Melbourne, VIC" },
  { name: "Balwyn", detail: "Melbourne, VIC" },
  { name: "Fitzroy North", detail: "Melbourne, VIC" },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black mb-4">
              Contact Pause Sleep
            </h1>
            <p className="text-gray-600 text-lg">
              For appointment bookings, please use the online booking system. For general enquiries, email us below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-warm-rose flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-sage" />
              </div>
              <h3 className="font-semibold text-near-black mb-1">Email</h3>
              <a href="mailto:info@pausesleep.com.au" className="text-sage hover:underline">
                info@pausesleep.com.au
              </a>
              <p className="text-gray-500 text-sm mt-2">We aim to respond within 1 business day.</p>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-warm-rose flex items-center justify-center mb-4">
                <Wifi className="w-5 h-5 text-sage" />
              </div>
              <h3 className="font-semibold text-near-black mb-1">Telehealth</h3>
              <p className="text-gray-600 text-sm">Available across all Australian states and territories.</p>
              <a href="/book" className="mt-2 inline-block text-sage text-sm font-medium hover:underline">
                Book online →
              </a>
            </div>

            <div className="bg-cream rounded-2xl p-6 md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-warm-rose flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-sage" />
              </div>
              <h3 className="font-semibold text-near-black mb-3">In-Person Clinics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {locations.map((loc) => (
                  <div key={loc.name} className="bg-white rounded-xl p-3 text-center">
                    <p className="font-medium text-near-black">{loc.name}</p>
                    <p className="text-sm text-gray-500">{loc.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-3">
                In-person appointments available via the online booking system. Select your preferred location when booking.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-sage/10 border border-sage/20 rounded-2xl">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-near-black">Booking enquiries:</strong> For appointment bookings, please use the{" "}
              <a href="/book" className="text-sage hover:underline font-medium">online booking system</a>. This is the fastest way to secure an appointment.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              <strong className="text-near-black">Clinical emergencies:</strong> If you are experiencing a medical emergency, please call 000 or attend your nearest emergency department.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
