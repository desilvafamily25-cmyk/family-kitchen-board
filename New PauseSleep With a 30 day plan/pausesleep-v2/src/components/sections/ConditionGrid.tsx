import Link from "next/link"
import { Flame, Heart, Moon, Activity, Sparkles, Calendar } from "lucide-react"
import { conditions } from "@/data/conditions"

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Heart,
  Moon,
  Activity,
  Sparkles,
  Calendar,
}

export function ConditionGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {conditions.map((c) => {
        const Icon = iconMap[c.icon]
        return (
          <Link
            key={c.slug}
            href={c.href}
            className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-sage/30 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-warm-rose flex items-center justify-center mb-4">
              {Icon && <Icon className="w-5 h-5 text-sage" />}
            </div>
            <h3 className="font-semibold text-near-black mb-1 group-hover:text-sage transition-colors">
              {c.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
            <span className="mt-3 inline-block text-sage text-sm font-medium group-hover:underline">
              Learn more →
            </span>
          </Link>
        )
      })}
    </div>
  )
}
