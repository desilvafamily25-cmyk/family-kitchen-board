import { Star } from "lucide-react"
import { testimonials } from "@/data/testimonials"

interface TestimonialsGridProps {
  limit?: number
}

export function TestimonialsGrid({ limit = 3 }: TestimonialsGridProps) {
  const items = testimonials.slice(0, limit)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <div key={i} className="bg-warm-rose/30 rounded-2xl p-6 md:p-8">
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: t.stars }).map((_, s) => (
              <Star key={s} className="w-4 h-4 fill-sage text-sage" />
            ))}
          </div>
          <blockquote className="font-display italic text-near-black text-[15px] leading-relaxed mb-6">
            "{t.quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sage text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
              {t.initials}
            </div>
            <span className="text-sm text-gray-500">{t.location}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
