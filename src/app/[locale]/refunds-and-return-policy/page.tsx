import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Refunds and Return Policy | Falak",
  description: "Refunds and Return Policy for Falak subscriptions and purchases.",
}

export default function RefundsAndReturnPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">Refunds and Return Policy</h1>
          <p className="text-white/70 mb-8">Last Updated: 16 August 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Subscription Refunds</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Free Trial:</strong> Falak offers a free trial period — no charges apply during this period</p>
              <p><strong className="text-white">Paid Subscriptions:</strong> Subscriptions are billed in advance and are generally non-refundable</p>
              <p><strong className="text-white">Exceptions:</strong> Refunds may be considered in cases of technical issues preventing service use</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">App Store Purchases</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">iOS (App Store):</strong> Refund requests are handled by Apple. Contact Apple Support or visit reportaproblem.apple.com</p>
              <p><strong className="text-white">Android (Google Play):</strong> Refund requests are handled by Google. Visit play.google.com/store/account for refund options</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Cancellation Policy</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Cancel Anytime:</strong> You may cancel your subscription at any time through your device&apos;s app store settings</p>
              <p><strong className="text-white">Access After Cancellation:</strong> You retain access to premium features until the end of your current billing period</p>
              <p><strong className="text-white">No Partial Refunds:</strong> Unused portions of a subscription period are not refunded upon cancellation</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Requesting a Refund</h2>
            <div className="space-y-4 text-white/80">
              <p>To request a refund directly from Falak, please contact our support team with:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Your account email address</li>
                <li>Date of purchase</li>
                <li>Reason for the refund request</li>
                <li>Any relevant screenshots or details</li>
              </ul>
              <p>We will review your request and respond within 5 business days.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <div className="space-y-2 text-white/80">
              <p>
                <strong className="text-white">Billing Support:</strong>{" "}
                <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a>
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
