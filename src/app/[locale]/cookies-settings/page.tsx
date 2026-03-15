import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Settings | Falak",
  description: "Cookie Policy for Falak - Learn how we use cookies and similar technologies.",
}

export default function CookieSettingsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">Cookie Settings</h1>
          <p className="text-white/70 mb-8">Last Updated: 16 August 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">What Are Cookies</h2>
            <p className="text-white/80">
              Cookies are small text files that are stored on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and improving our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Cookies</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly</p>
              <p><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our website</p>
              <p><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</p>
              <p><strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant advertisements</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Managing Cookies</h2>
            <p className="text-white/80 mb-4">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies may
              impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Browser Settings:</strong> Most browsers allow you to manage cookie preferences</p>
              <p><strong className="text-white">Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</p>
              <p><strong className="text-white">Website Settings:</strong> Adjust preferences through our cookie banner</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <div className="space-y-2 text-white/80">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:privacy@falak.app" className="text-blue-400 hover:text-blue-300">privacy@falak.app</a>
              </p>
              <p>
                <strong className="text-white">Support:</strong>{" "}
                <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
