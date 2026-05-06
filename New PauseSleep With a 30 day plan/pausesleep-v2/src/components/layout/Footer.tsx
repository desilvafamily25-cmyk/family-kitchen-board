import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "About Dr. Hewage", href: "/about" },
  { label: "Menopause Care", href: "/menopause" },
  { label: "Sleep Health", href: "/sleep" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Book Appointment", href: "/book" },
  { label: "Free Assessment", href: "/assessment" },
  { label: "Articles", href: "/articles" },
]

const conditionLinks = [
  { label: "Hot Flushes", href: "/menopause/hot-flushes" },
  { label: "Mood & Anxiety", href: "/menopause/mood-changes" },
  { label: "Sleep Problems", href: "/menopause/sleep-problems" },
  { label: "Weight Changes", href: "/menopause/weight-changes" },
  { label: "Hormone Therapy (HRT)", href: "/menopause/hormone-therapy" },
  { label: "Perimenopause", href: "/menopause/perimenopause" },
]

export function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Pause Sleep"
              width={130}
              height={38}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Expert, evidence-based menopause and sleep care across Australia. GP-led telehealth with Dr. Premila Hewage MBBS FRACGP.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Mail className="w-4 h-4 text-sage-light" />
              <a href="mailto:info@pausesleep.com.au" className="hover:text-white transition-colors">
                info@pausesleep.com.au
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-sage-light flex-shrink-0 mt-0.5" />
              <span>Hawthorn · Balwyn · Fitzroy North<br />Telehealth Australia-wide</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Conditions We Treat</h3>
            <ul className="space-y-2">
              {conditionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Pause Sleep · Dr. Premila Hewage MBBS (Hons) FRACGP
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-gray-600 text-center md:text-right max-w-sm">
            This website contains general health information only. It does not constitute medical advice. Always consult a qualified medical practitioner.
          </p>
        </div>
      </div>
    </footer>
  )
}
