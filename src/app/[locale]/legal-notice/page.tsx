import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Legal Notice | Falak",
  description: "Legal Notice for Falak.",
}

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-white">Legal Notice</h1>
          <p className="text-white/70 mb-8">Last Updated: 16 August 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Company Information</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Company Name:</strong> Falak</p>
              <p><strong className="text-white">Service:</strong> Family task and rewards management application</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property</h2>
            <p className="text-white/80">
              All content, trademarks, service marks, trade names, logos, and icons displayed on this website and within
              the Falak application are the property of Falak or its licensors. Unauthorized use is strictly prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer</h2>
            <p className="text-white/80">
              The information provided on this website is for general informational purposes only. Falak makes no
              representations or warranties of any kind, express or implied, about the completeness, accuracy, or
              reliability of the information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Governing Law</h2>
            <p className="text-white/80">
              These terms and conditions are governed by and construed in accordance with applicable law. Any disputes
              shall be subject to the exclusive jurisdiction of the competent courts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <div className="space-y-2 text-white/80">
              <p>
                <strong className="text-white">Legal Inquiries:</strong>{" "}
                <a href="mailto:legal@falak.app" className="text-blue-400 hover:text-blue-300">legal@falak.app</a>
              </p>
              <p>
                <strong className="text-white">General Support:</strong>{" "}
                <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
