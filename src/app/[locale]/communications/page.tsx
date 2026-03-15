import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Communication Channels | Falak",
  description: "Communication channels and contact information for Falak.",
}

export default function CommunicationsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">Communication Channels</h1>
          <p className="text-white/70 mb-8">Last Updated: 16 August 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Communicate With You</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Push Notifications:</strong> In-app alerts for quest updates, rewards, and family activity</p>
              <p><strong className="text-white">Email:</strong> Account updates, security alerts, and important service notices</p>
              <p><strong className="text-white">In-App Messages:</strong> Family chat and direct communications within the Falak app</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Managing Your Communication Preferences</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Push Notifications:</strong> Manage through your device settings or the Falak app under Settings → Notifications</p>
              <p><strong className="text-white">Email Preferences:</strong> Update your email preferences through the app under Settings → Account</p>
              <p><strong className="text-white">Marketing Communications:</strong> Opt out at any time via the unsubscribe link in our emails</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">General Support:</strong> For questions and assistance</p>
              <p><strong className="text-white">Privacy Matters:</strong> For data and privacy inquiries</p>
              <p><strong className="text-white">Legal Matters:</strong> For legal and compliance questions</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <div className="space-y-2 text-white/80">
              <p>
                <strong className="text-white">General Support:</strong>{" "}
                <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a>
              </p>
              <p>
                <strong className="text-white">Privacy:</strong>{" "}
                <a href="mailto:privacy@falak.app" className="text-blue-400 hover:text-blue-300">privacy@falak.app</a>
              </p>
              <p>
                <strong className="text-white">Legal:</strong>{" "}
                <a href="mailto:legal@falak.app" className="text-blue-400 hover:text-blue-300">legal@falak.app</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
