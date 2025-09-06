import { Link } from 'react-router-dom';

function Terms() {
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
              Terms of Use
            </h1>
            
            <div className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6">
              <p className="text-lg">
                Welcome to PolyRoom! These Terms of Use ("Terms") govern your access to and use of the PolyRoom language learning application and related services.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using the PolyRoom application ("App"), you agree to be bound by these Terms. 
                  If you do not agree to these Terms, please do not use our App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. License to Use</h2>
                <p>
                  PolyRoom grants you a limited, non-exclusive, non-transferable license to use the App for your personal, 
                  non-commercial language learning purposes. You may not:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Copy, modify, or distribute the App</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Use the App for any commercial purposes without our written consent</li>
                  <li>Share your account credentials with others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts and Conduct</h2>
                <p>
                  To access certain features, you may need to create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and current information</li>
                  <li>Using the App in compliance with applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Content and Learning Materials</h2>
                <p>
                  PolyRoom provides language learning content, including lessons, exercises, and assessments. All content is protected by intellectual property laws. You may not:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Reproduce, distribute, or publicly display our content</li>
                  <li>Create derivative works based on our materials</li>
                  <li>Use our content for competing language learning services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Privacy and Data</h2>
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our 
                  <Link to="/privacy" className="text-indigo-400 hover:text-indigo-300 underline">Privacy Policy</Link>, 
                  which is incorporated into these Terms by reference.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Subscription and Payments</h2>
                <p>
                  PolyRoom may offer premium features through subscription plans. By purchasing a subscription:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>You authorize us to charge your chosen payment method</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Refunds are subject to our refund policy and applicable law</li>
                  <li>We may change subscription prices with advance notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
                <p>
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. 
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                  AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE APP WILL BE ERROR-FREE OR UNINTERRUPTED.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLYROOM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                  SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY SHALL NOT EXCEED 
                  THE AMOUNT YOU PAID FOR THE APP IN THE TWELVE MONTHS PRECEDING THE CLAIM.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
                <p>
                  We may terminate or suspend your access to the App at any time, with or without notice, 
                  for violation of these Terms or other reasons. Upon termination, your right to use the App ceases immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of material changes 
                  through the App or other means. Continued use of the App after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
                <p>
                  If you have questions about these Terms, please contact us at:
                </p>
                <p className="ml-4">
                  Email: <a href="mailto:legal@polyroom.io" className="text-indigo-400 hover:text-indigo-300">legal@polyroom.io</a><br/>
                  Address: PolyRoom Language Learning, Inc.
                </p>
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

export default Terms;
