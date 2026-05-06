import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { articles } from "@/data/articles"
import { ArticleCTA } from "@/components/sections/ArticleCTA"
import { Clock, ArrowLeft } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}

  return {
    title: `${article.title} | Dr. Premila Hewage`,
    description: article.metaDescription,
    alternates: { canonical: `https://www.pausesleep.com.au/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.pausesleep.com.au/articles/${article.slug}`,
      type: "article",
    },
  }
}

function renderBody(body: string) {
  const paragraphs = body.split("\n\n")
  return paragraphs.map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return <h3 key={i} className="font-display text-xl font-semibold text-near-black mt-8 mb-3">{para.slice(2, -2)}</h3>
    }
    if (para.startsWith("- ")) {
      const items = para.split("\n").filter((l) => l.startsWith("- "))
      return (
        <ul key={i} className="list-disc list-inside space-y-1.5 my-4 text-gray-600">
          {items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}
        </ul>
      )
    }
    // Bold inline
    const rendered = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    return (
      <p
        key={i}
        className="text-gray-600 leading-relaxed text-[17px] mb-4"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    )
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) notFound()

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sage text-sm font-medium mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{new Date(article.date).toLocaleDateString("en-AU", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-near-black leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-gray-500 text-lg">{article.summary}</p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
            <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center text-white text-sm font-semibold">
              PH
            </div>
            <div>
              <p className="text-sm font-medium text-near-black">Dr. Premila Hewage</p>
              <p className="text-xs text-gray-400">MBBS (Hons), FRACGP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            {renderBody(article.body)}
          </div>
          <ArticleCTA />
        </div>
      </section>
    </div>
  )
}
