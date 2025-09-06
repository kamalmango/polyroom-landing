import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                PolyRoom
              </span>
            </Link>

            {/* Back to Home */}
            <Link to="/" className="glass px-4 py-1.5 rounded-full transition-all hover:bg-white/5 text-white/70 hover:text-white">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6">
              <p className="text-lg">
                At PolyRoom, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our language learning application.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                
                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Name and email address when you create an account</li>
                  <li>Profile information you choose to provide</li>
                  <li>Payment information for premium subscriptions</li>
                  <li>Communication preferences and settings</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Learning Data</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Your progress through lessons and exercises</li>
                  <li>Quiz results and assessment scores</li>
                  <li>Language preferences and learning goals</li>
                  <li>Voice recordings for pronunciation practice (with your consent)</li>
                  <li>Study time and usage patterns</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Device type, operating system, and app version</li>
                  <li>IP address and general location information</li>
                  <li>App usage analytics and performance data</li>
                  <li>Crash reports and error logs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide personalized language learning experiences</li>
                  <li>Track your progress and adapt lesson difficulty</li>
                  <li>Improve our AI-powered learning algorithms</li>
                  <li>Send you relevant learning reminders and updates</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Analyze app usage to improve our services</li>
                  <li>Ensure app security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information only in these limited circumstances:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third parties who help us operate our app (payment processors, analytics providers, cloud storage)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with user notification)</li>
                  <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated data for research and improvement purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience, remember your preferences, 
                  and analyze app performance. You can manage cookie preferences through your device settings, 
                  though disabling cookies may affect app functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your information, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data centers and cloud infrastructure</li>
                </ul>
                <p className="mt-4">
                  However, no internet-based service can guarantee absolute security. We encourage you to use strong passwords and keep your account information secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Children's Privacy</h2>
                <p>
                  PolyRoom is designed for users aged 13 and older. We do not knowingly collect personal information from children under 13. 
                  If we learn that we have collected information from a child under 13, we will delete it promptly. 
                  Parents who believe their child has provided us with personal information should contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Your Privacy Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Correct or update your information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your learning data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:support@polyroom.com" className="text-indigo-400 hover:text-indigo-300">support@polyroom.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                <p>
                  Your information may be processed and stored in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy 
                  and applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Data Retention</h2>
                <p>
                  We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. 
                  When you delete your account, we will delete or anonymize your personal information, except where we need to retain it for legal compliance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Third-Party Services</h2>
                <p>
                  Our app may contain links to third-party websites or integrate with third-party services. 
                  This Privacy Policy does not apply to those external services. We encourage you to review their privacy policies before providing any information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of material changes through the app or email. The updated policy will be effective when posted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="ml-4 space-y-1">
                  <p>Email: <a href="mailto:support@polyroom.com" className="text-indigo-400 hover:text-indigo-300">support@polyroom.com</a></p>
                  <p>Address: PolyRoom Language Learning, Inc.</p>
                </div>
              </section>

              <p className="text-sm text-white/60 mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-xs text-white/30 text-center">
        &copy; {new Date().getFullYear()} PolyRoom. All rights reserved.
      </footer>
    </div>
  );
}

export default Privacy;
