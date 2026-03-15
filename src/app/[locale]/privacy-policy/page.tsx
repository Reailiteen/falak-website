import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Falak",
  description: "Privacy Policy for Falak - Learn how we protect your family's data and privacy.",
}

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          <p className="text-white/70 mb-8">Last Updated: 16 August 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Account Information:</strong> Username, email address, and password for guardians</p>
              <p><strong className="text-white">Child Profiles:</strong> Username, age, and profile information for children</p>
              <p><strong className="text-white">Family Relationships:</strong> Guardian-child relationships and family structure</p>
              <p><strong className="text-white">Quest and Reward Data:</strong> Quests created, completed, rewards earned, and progress tracking</p>
              <p><strong className="text-white">Chat Messages:</strong> Messages exchanged between family members within the app</p>
              <p><strong className="text-white">Settings Preferences:</strong> Notification preferences and app settings</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">For Guardians:</strong> Create and manage child accounts, set up quests and rewards, monitor progress</p>
              <p><strong className="text-white">For Children:</strong> Access personalized quests and rewards, track progress and achievements</p>
              <p><strong className="text-white">General Purposes:</strong> Provide app functionality, improve user experience, ensure security</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Encryption:</strong> All data encrypted in transit and at rest</p>
              <p><strong className="text-white">Access Controls:</strong> Strict access controls and authentication</p>
              <p><strong className="text-white">Regular Security Audits:</strong> Ongoing security assessments</p>
              <p><strong className="text-white">Secure Infrastructure:</strong> Cloud-based security with industry standards</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Children&apos;s Privacy (COPPA Compliance)</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Parental Consent:</strong> Verifiable parental consent required for children under 13</p>
              <p><strong className="text-white">Child Data Protection:</strong> Children&apos;s data stored securely and separately</p>
              <p><strong className="text-white">Limited Collection:</strong> Minimal personal information collected from children</p>
              <p><strong className="text-white">Parental Control:</strong> Full control over child&apos;s account and data</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Access and Control:</strong> Access, correct, delete, and export your data</p>
              <p><strong className="text-white">Account Management:</strong> Update profile, change preferences, manage child accounts</p>
              <p><strong className="text-white">Data Deletion:</strong> Delete account and data within 30 days</p>
              <p><strong className="text-white">Opt-out Options:</strong> Control communications and data collection</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Account Deletion and Data Removal</h2>
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-xl font-medium mb-3 text-white">How to Delete Your Account</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Option 1: Through the App (Recommended)</strong></p>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Open the Falak App on your device</li>
                    <li>Go to Settings → Profile icon or menu button</li>
                    <li>Select &quot;Settings&quot; from the menu</li>
                    <li>Navigate to Account section</li>
                    <li>Select &quot;Delete Account&quot; option</li>
                    <li>Read deletion information carefully</li>
                    <li>Enter confirmation code if prompted</li>
                    <li>Tap &quot;Delete Account&quot; to confirm</li>
                  </ol>
                  <p className="mt-3"><strong className="text-white">Option 2: Email Request</strong></p>
                  <p>Send an email to <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a> with:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Your full name</li>
                    <li>Email address associated with your account</li>
                    <li>Username (if different from email)</li>
                    <li>Reason for account deletion (optional)</li>
                    <li>Request for account deletion</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">What Happens When You Delete Your Account</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Immediate Effects:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Your account will be marked for deletion</li>
                    <li>You&apos;ll receive a confirmation email with a deletion code</li>
                    <li>Your account becomes inactive immediately</li>
                  </ul>
                  <p><strong className="text-white">Data Deletion Timeline:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>30-day grace period:</strong> Your data is retained for 30 days</li>
                    <li><strong>After 30 days:</strong> All personal data is permanently deleted</li>
                    <li><strong>Legal retention:</strong> Some data may be retained if required by law</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">What Gets Deleted</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Personal Information:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Profile details and preferences</li>
                    <li>Quest history and progress</li>
                    <li>Reward earnings and achievements</li>
                    <li>Chat messages and communications</li>
                    <li>Settings and configurations</li>
                  </ul>
                  <p><strong className="text-white">Family Data:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Child profiles (if you&apos;re a guardian)</li>
                    <li>Family relationships and connections</li>
                    <li>Shared quests and rewards</li>
                    <li>Family chat history</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Account Recovery During Grace Period</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Can I Cancel the Deletion?</strong></p>
                  <p><strong className="text-white">Yes!</strong> During the 30-day grace period, you can:</p>
                  <ol className="list-decimal list-inside ml-4 space-y-1">
                    <li>Log back into the app using your credentials</li>
                    <li>Go to Settings → Account</li>
                    <li>Look for &quot;Cancel Account Deletion&quot; option</li>
                    <li>Confirm cancellation to restore your account</li>
                  </ol>
                  <p><strong className="text-white">What Happens After Cancellation?</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Your account is fully restored</li>
                    <li>All data remains intact</li>
                    <li>You can continue using the app normally</li>
                    <li>No data loss occurs</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Important Considerations</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Before Deleting Your Account:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Export Your Data (Optional):</strong> Request a data export before deletion</li>
                    <li><strong>Inform Family Members:</strong> Let family members know about your decision</li>
                    <li><strong>Cancel Subscriptions:</strong> Cancel any active subscriptions</li>
                  </ul>
                  <p><strong className="text-white">After Account Deletion:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Uninstall the app from your devices</li>
                    <li>Clear any cached data</li>
                    <li>Monitor your email for confirmation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Service Provision:</strong> Retain data as long as necessary for services</p>
              <p><strong className="text-white">Legal Compliance:</strong> Retain data required by law</p>
              <p><strong className="text-white">Account Deletion:</strong> Delete personal information within 30 days</p>
              <p><strong className="text-white">Exception:</strong> Some data may be retained for legal compliance</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Frequently Asked Questions</h2>
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Account Deletion</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white">Q: How long does account deletion take?</p>
                    <p>A: Your account is marked for deletion immediately, but data is permanently removed after 30 days.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: Can I recover my account after 30 days?</p>
                    <p>A: No, after the 30-day grace period, account recovery is not possible.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: What happens to my child&apos;s account if I&apos;m a guardian?</p>
                    <p>A: Child accounts are also deleted when the guardian account is deleted. Consider transferring guardianship if needed.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: Can I delete just my child&apos;s account?</p>
                    <p>A: Yes, you can delete individual child accounts through the app settings without deleting your own account.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Data and Privacy</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white">Q: How is my data protected during deletion?</p>
                    <p>A: All deletion requests are processed securely with encryption, limited staff access, and comprehensive audit trails.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: Can I export my data before deletion?</p>
                    <p>A: Yes, you can request a data export during the grace period to keep a copy of your information.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: What data might be retained for legal reasons?</p>
                    <p>A: Transaction records, security audit logs, and data required for legal compliance or ongoing investigations may be retained.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: Is my data shared with third parties during deletion?</p>
                    <p>A: No, your data is not shared with third parties during the deletion process. All handling is internal and secure.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Support and Assistance</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white">Q: What if I forgot my password but want to delete my account?</p>
                    <p>A: Contact support@falak.app and they can help verify your identity and process the deletion.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: How quickly will I receive a response to my deletion request?</p>
                    <p>A: Support typically responds within 24 hours, and account deletion is processed within 30 days.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Q: Can I get help with the deletion process?</p>
                    <p>A: Yes, our support team is available to guide you through the deletion process and answer any questions.</p>
                  </div>
                </div>
              </div>
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
