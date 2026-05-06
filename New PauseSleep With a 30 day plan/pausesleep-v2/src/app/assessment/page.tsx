"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const questions = [
  {
    id: "sleep",
    question: "How is your sleep?",
    options: ["Sleeping well", "Occasionally disrupted", "Frequently disrupted", "Very poor — waking most nights"],
  },
  {
    id: "hotFlushes",
    question: "Do you experience hot flushes or night sweats?",
    options: ["No", "Mild — occasionally", "Moderate — several times per week", "Severe — multiple times daily"],
  },
  {
    id: "mood",
    question: "How is your mood?",
    options: ["Good — no concerns", "Occasionally irritable or low", "Frequently anxious or low", "Significantly affecting daily life"],
  },
  {
    id: "weight",
    question: "Have you noticed unexplained weight changes?",
    options: ["No changes", "Minor changes", "Moderate changes", "Significant changes I can't explain"],
  },
  {
    id: "libido",
    question: "Have you noticed changes to your libido?",
    options: ["No change", "Slight decrease", "Significant decrease", "Prefer not to answer"],
  },
  {
    id: "periods",
    question: "How are your periods?",
    options: ["Regular", "Slightly irregular", "Very irregular", "No longer having periods"],
  },
  {
    id: "brainFog",
    question: "Do you experience brain fog or memory difficulties?",
    options: ["No", "Occasionally", "Frequently", "Significantly affecting my work or daily life"],
  },
  {
    id: "anxiety",
    question: "Are you experiencing anxiety?",
    options: ["No", "Mild, manageable", "Moderate — affecting daily activities", "Severe — significant impact on life"],
  },
]

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [step, setStep] = useState<"questions" | "capture" | "results">("questions")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const answeredCount = Object.keys(answers).length
  const score = Object.values(answers).reduce((a, b) => a + b, 0)

  const severity = score <= 4 ? "mild" : score <= 12 ? "moderate" : "significant"

  const handleAnswer = (id: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmitAnswers = (e: React.FormEvent) => {
    e.preventDefault()
    if (answeredCount < questions.length) return
    setStep("capture")
  }

  const handleCapture = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setStep("results")
  }

  if (step === "results") {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center">
            <CheckCircle2 className="w-12 h-12 text-sage mx-auto mb-6" />
            <h1 className="font-display text-3xl font-bold text-near-black mb-4">
              Your assessment results
            </h1>
            {submitted && (
              <p className="text-sm text-sage font-medium mb-6">
                A summary has been sent to {email}.
              </p>
            )}
            <div className="bg-warm-rose/30 rounded-2xl p-6 mb-8 text-left">
              <p className="text-near-black font-semibold mb-3">
                {severity === "mild" && "Your symptoms appear mild."}
                {severity === "moderate" && "Your symptoms suggest moderate perimenopause or menopause impact."}
                {severity === "significant" && "Your symptoms are significantly affecting your quality of life."}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {severity === "mild" &&
                  "While your symptoms are currently mild, a consultation with Dr. Hewage can help you understand your hormonal status and plan ahead for the transition."}
                {severity === "moderate" &&
                  "Based on your responses, you may be experiencing perimenopause or menopause. Dr. Hewage recommends a full consultation to review your symptoms and discuss your treatment options — including HRT and non-hormonal alternatives."}
                {severity === "significant" &&
                  "Your responses indicate significant symptom burden. Dr. Hewage recommends an early consultation. Effective treatments are available and a personalised plan can make a substantial difference to your quality of life."}
              </p>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              A telehealth consultation would be suitable for your needs. You can also choose to visit in person if you prefer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/book">Book a Consultation</Button>
              <Button href="/menopause" variant="secondary">Learn about menopause care</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === "capture") {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-near-black mb-2">
              Get your personalised summary
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Enter your name and email to receive your assessment results and a personalised note from Dr. Hewage.
            </p>
            <form onSubmit={handleCapture} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-near-black mb-1">Your name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/40"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-near-black mb-1">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sage/40"
                  placeholder="you@example.com"
                />
              </div>
              <Button type="submit" className="w-full justify-center">
                View my results
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Your information is kept private. We do not share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-sage py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Take the 2-Minute Menopause Health Assessment
          </h1>
          <p className="text-white/80 text-lg">
            Answer 8 quick questions to understand your symptoms and get a personalised summary from Dr. Hewage.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{answeredCount} of {questions.length} answered</span>
              <span>{Math.round((answeredCount / questions.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-sage rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmitAnswers} className="space-y-8">
            {questions.map((q, qi) => (
              <div key={q.id} className="bg-white rounded-2xl p-6 border border-gray-100">
                <p className="font-semibold text-near-black mb-4">
                  {qi + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all ${
                        answers[q.id] === oi
                          ? "border-sage bg-sage/10 text-sage font-medium"
                          : "border-gray-100 hover:border-sage/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={oi}
                        checked={answers[q.id] === oi}
                        onChange={() => handleAnswer(q.id, oi)}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${answers[q.id] === oi ? "border-sage bg-sage" : "border-gray-300"}`} />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <Button
              type="submit"
              disabled={answeredCount < questions.length}
              className="w-full justify-center"
            >
              {answeredCount < questions.length
                ? `Please answer all questions (${questions.length - answeredCount} remaining)`
                : "View my results"}
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}
