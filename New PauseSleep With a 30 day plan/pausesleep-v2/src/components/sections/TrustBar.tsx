import { Award, Clock, BookOpen, Wifi, CreditCard } from "lucide-react"

const badges = [
  { icon: Award, label: "FRACGP Qualified" },
  { icon: Clock, label: "15+ Years Clinical Experience" },
  { icon: BookOpen, label: "Published Author" },
  { icon: Wifi, label: "Telehealth Across Australia" },
  { icon: CreditCard, label: "Medicare Rebates Available" },
]

export function TrustBar() {
  return (
    <section className="bg-warm-grey border-y border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm font-medium text-near-black">
              <badge.icon className="w-4 h-4 text-sage flex-shrink-0" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
