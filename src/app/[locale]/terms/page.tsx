import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms and Conditions | Falak",
  description: "Terms and Conditions for Falak - Understand the terms for using our family app.",
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">Terms and Conditions</h1>
          <p className="text-white/70 mb-8">Last Updated: 16 August 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Service Description</h2>
            <p className="text-white/80">
              Falak is a family-oriented mobile application that allows guardians to create quests and rewards for
              children, track their progress, and facilitate family communication through a secure chat feature.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">User Accounts and Registration</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Guardian Accounts:</strong> Must be 18+ years old, provide accurate information, maintain security</p>
              <p><strong className="text-white">Child Accounts:</strong> Must be created by verified guardians, require parental consent for under 13</p>
              <p><strong className="text-white">Account Responsibility:</strong> Users responsible for all activities under their accounts</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Acceptable Use</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-white">Permitted Uses:</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Creating and managing family quests and rewards</li>
                <li>Communicating with family members through chat</li>
                <li>Tracking child progress and achievements</li>
                <li>Managing family settings and preferences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-white">Prohibited Uses:</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Violating laws or regulations</li>
                <li>Harassing or harming other users</li>
                <li>Sharing inappropriate content</li>
                <li>Unauthorized access or reverse engineering</li>
                <li>Commercial use without permission</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Content and User-Generated Content</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Content Ownership:</strong> Users retain ownership of created content</p>
              <p><strong className="text-white">License Grant:</strong> Non-exclusive license to use content for app functionality</p>
              <p><strong className="text-white">Content Guidelines:</strong> Must be appropriate for family use, no harmful content</p>
              <p><strong className="text-white">Responsibility:</strong> Users responsible for their content and communications</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Privacy and Data Protection</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Privacy Policy:</strong> Incorporated by reference into Terms</p>
              <p><strong className="text-white">Data Security:</strong> Appropriate technical and organizational measures</p>
              <p><strong className="text-white">User Rights:</strong> Access, correction, deletion, and export rights</p>
              <p><strong className="text-white">International Transfers:</strong> Appropriate safeguards for data transfers</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Our Rights:</strong> App, content, features, and functionality owned by us</p>
              <p><strong className="text-white">Trademarks:</strong> Our trademarks, service marks, and logos are our property</p>
              <p><strong className="text-white">Your Rights:</strong> Retain ownership of created content</p>
              <p><strong className="text-white">License:</strong> Non-exclusive license for app functionality</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Termination</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">User Termination:</strong> Delete account at any time, data removed within 30 days</p>
              <p><strong className="text-white">Company Termination:</strong> May terminate for Terms violations, fraud, or abuse</p>
              <p><strong className="text-white">Data Retention:</strong> Some data may be retained for legal compliance</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Special Provisions for Children</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">COPPA Compliance:</strong> Comply with Children&apos;s Online Privacy Protection Act</p>
              <p><strong className="text-white">Parental Consent:</strong> Required for children under 13</p>
              <p><strong className="text-white">Parental Control:</strong> Full control over child&apos;s account and data</p>
              <p><strong className="text-white">Enhanced Security:</strong> Children&apos;s data protected with enhanced measures</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Export and Deletion</h2>
            <div className="space-y-4 text-white/80">
              <p><strong className="text-white">Export Rights:</strong> Export data at any time</p>
              <p><strong className="text-white">Deletion Rights:</strong> Delete account and data</p>
              <p><strong className="text-white">Processing Time:</strong> Deletion requests processed within 30 days</p>
              <p><strong className="text-white">Exercise Methods:</strong> Use app features or contact directly</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Account Deletion Process</h2>
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Deletion Methods</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">In-App Deletion:</strong> Use the app&apos;s built-in account deletion feature in Settings → Account → Delete Account</p>
                  <p><strong className="text-white">Email Request:</strong> Send deletion request to <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a></p>
                  <p><strong className="text-white">Required Information:</strong> Full name, email address, username, and explicit deletion request</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Deletion Timeline and Process</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Immediate Actions:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Account marked for deletion upon confirmation</li>
                    <li>Account becomes inactive immediately</li>
                    <li>Confirmation email sent with deletion code</li>
                  </ul>
                  <p><strong className="text-white">30-Day Grace Period:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Data retained for account recovery purposes</li>
                    <li>Users can cancel deletion and restore account</li>
                    <li>Full access to account restoration features</li>
                  </ul>
                  <p><strong className="text-white">Permanent Deletion:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>All personal data permanently removed after 30 days</li>
                    <li>Account recovery no longer possible</li>
                    <li>Legal compliance data may be retained if required</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Data Removal Scope</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Completely Removed:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>User profiles and account information</li>
                    <li>Quest history and progress data</li>
                    <li>Reward systems and achievements</li>
                    <li>Family relationships and connections</li>
                    <li>Chat messages and communications</li>
                    <li>App preferences and settings</li>
                  </ul>
                  <p><strong className="text-white">Potentially Retained:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Transaction records (if applicable)</li>
                    <li>Security audit logs</li>
                    <li>Data required for legal compliance</li>
                    <li>Information needed for ongoing investigations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Account Recovery and Cancellation</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">During Grace Period:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Log in with existing credentials</li>
                    <li>Navigate to Settings → Account</li>
                    <li>Select &quot;Cancel Account Deletion&quot;</li>
                    <li>Confirm cancellation to restore account</li>
                  </ul>
                  <p><strong className="text-white">After Cancellation:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Account fully restored with all data intact</li>
                    <li>Normal app functionality resumes</li>
                    <li>No data loss or corruption</li>
                    <li>Deletion process completely reversed</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-white">User Responsibilities</h3>
                <div className="space-y-3">
                  <p><strong className="text-white">Before Deletion:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Export any important data if needed</li>
                    <li>Inform family members of decision</li>
                    <li>Cancel active subscriptions</li>
                    <li>Coordinate with other guardians if applicable</li>
                  </ul>
                  <p><strong className="text-white">After Deletion:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Uninstall app from all devices</li>
                    <li>Clear cached data and cookies</li>
                    <li>Monitor email for confirmation messages</li>
                    <li>Contact support if questions arise</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <div className="space-y-4 text-white/80">
              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Primary Support</h3>
                <div className="space-y-2">
                  <p>
                    <strong className="text-white">General Support:</strong>{" "}
                    <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a>
                    {" "}(Response within 24 hours)
                  </p>
                  <p>
                    <strong className="text-white">Account Deletion:</strong>{" "}
                    <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a>
                    {" "}(Processing within 30 days)
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Specialized Support</h3>
                <div className="space-y-2">
                  <p>
                    <strong className="text-white">Privacy Concerns:</strong>{" "}
                    <a href="mailto:privacy@falak.app" className="text-blue-400 hover:text-blue-300">privacy@falak.app</a>
                    {" "}(Response within 48 hours)
                  </p>
                  <p>
                    <strong className="text-white">Legal Inquiries:</strong>{" "}
                    <a href="mailto:legal@falak.app" className="text-blue-400 hover:text-blue-300">legal@falak.app</a>
                    {" "}(Response within 72 hours)
                  </p>
                  <p>
                    <strong className="text-white">Technical Issues:</strong>{" "}
                    <a href="mailto:support@falak.app" className="text-blue-400 hover:text-blue-300">support@falak.app</a>
                    {" "}(Response within 24 hours)
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-white">Support Hours and Response Times</h3>
                <div className="space-y-2">
                  <p><strong className="text-white">Standard Support:</strong> Available 24/7 for urgent issues</p>
                  <p><strong className="text-white">Account Deletion:</strong> Processed within 30 days of request</p>
                  <p><strong className="text-white">Data Export:</strong> Completed within 7-10 business days</p>
                  <p><strong className="text-white">Emergency Issues:</strong> Critical security or safety issues addressed immediately</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
