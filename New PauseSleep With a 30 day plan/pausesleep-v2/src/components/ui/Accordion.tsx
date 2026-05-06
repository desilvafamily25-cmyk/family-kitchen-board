"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-near-black hover:bg-warm-grey transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.question}</span>
            <ChevronDown className={cn("w-5 h-5 text-sage flex-shrink-0 transition-transform duration-200", open === i && "rotate-180")} />
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
