import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Pause Sleep",
  description: "Privacy policy for Pause Sleep and Dr. Premila Hewage.",
  alternates: { canonical: "https://www.pausesleep.com.au/privacy" },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl font-bold text-near-black mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-3">1. Introduction</h2>
              <p>Pause Sleep (operated by Dr. Premila Hewage) is committed to protecting your privacy in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles. This policy explains how we collect, use, store, and disclose your personal and health information.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-3">2. Information We Collect</h2>
              <p>We collect information you provide when booking appointments, completing intake forms, or contacting us. This may include: name, contact details, date of birth, health history, current medications, and assessment responses. We collect only what is necessary for the provision of healthcare services.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-3">3. How We Use Your Information</h2>
              <p>Your information is used to provide healthcare services, communicate appointment details, send written treatment plans, and issue prescriptions. We do not use your information for marketing without your explicit consent. We do not sell your data to third parties.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-3">4. Storage & Security</h2>
              <p>Your health information is stored securely in Halaxy, an Australian-based clinical management system that complies with Australian privacy and healthcare standards. Electronic communications are conducted via encrypted channels.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-3">5. Disclosure</h2>
              <p>We may disclose your information to other healthcare providers involved in your care (with your consent), or where required by law. We will not disclose your information to any other parties without your consent.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at info@pausesleep.com.au.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-3">7. Contact</h2>
              <p>For privacy enquiries: <a href="mailto:info@pausesleep.com.au" className="text-sage hover:underline">info@pausesleep.com.au</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
