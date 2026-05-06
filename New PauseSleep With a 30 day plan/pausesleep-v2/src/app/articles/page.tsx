import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { articles } from "@/data/articles"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Articles | Evidence-Based Menopause & Sleep | Dr. Premila Hewage",
  description:
    "Evidence-based insights on menopause and sleep from Dr. Premila Hewage FRACGP. HRT, CBT-I, perimenopause, and melatonin — written for Australian women.",
  alternates: { canonical: "https://www.pausesleep.com.au/articles" },
}

export default function ArticlesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-near-black mb-4">
            From the clinic.
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Evidence-based insights on menopause and sleep from Dr. Premila Hewage.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{new Date(article.date).toLocaleDateString("en-AU", { month: "long", year: "numeric" })}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-near-black group-hover:text-sage transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{article.summary}</p>
                  <span className="mt-4 text-sage text-sm font-medium group-hover:underline">Read →</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
