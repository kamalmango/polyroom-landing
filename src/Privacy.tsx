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
                This Privacy Policy describes how PolyRoom, Inc. ("PolyRoom," "we," "us," or "our") collects, uses, discloses, 
                transfers, stores, and processes your personal information when you access or use PolyRoom's language learning 
                platform, website, mobile applications, and related services (collectively, the "Services"). 
              </p>
              
              <p>
                By using our Services, you consent to the practices described in this Privacy Policy. "Personal Information" 
                means information that identifies you as an individual or relates to an identifiable individual. Please read this 
                document carefully to understand how we handle your data.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <p>We collect various categories of Personal Information depending on how you interact with our Services:</p>
                
                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Account Registration Data</h3>
                <p className="mb-2">When you create a PolyRoom account, we collect:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Full name, email address, and password</li>
                  <li>Phone number (optional)</li>
                  <li>Profile picture and bio (if provided)</li>
                  <li>Language learning preferences and proficiency levels</li>
                  <li>Native language and target languages</li>
                  <li>Account credentials and authentication information</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Learning and Usage Data</h3>
                <p className="mb-2">As you use our Services, we automatically collect:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Lesson completion rates and quiz scores</li>
                  <li>Learning progress, streaks, and achievements</li>
                  <li>Vocabulary mastery and grammar proficiency metrics</li>
                  <li>Study session duration and frequency</li>
                  <li>Interaction patterns with learning features</li>
                  <li>Course selections and learning path preferences</li>
                  <li>Practice exercise results and response times</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Audio and Voice Recordings</h3>
                <p className="mb-2">With your explicit consent, we may collect:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Voice recordings during pronunciation practice exercises</li>
                  <li>Audio samples for speech recognition and accent analysis</li>
                  <li>Conversation practice recordings for AI-powered feedback</li>
                </ul>
                <p className="mt-2 text-sm">
                  You control when recordings are made and can disable this feature at any time in your settings. 
                  Voice data is used solely to provide pronunciation feedback and improve our speech recognition technology.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Payment and Billing Information</h3>
                <p className="mb-2">If you purchase a premium subscription:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Payment card information (processed by secure third-party payment processors)</li>
                  <li>Billing address and contact information</li>
                  <li>Transaction history and purchase records</li>
                  <li>Subscription plan details and renewal preferences</li>
                </ul>
                <p className="mt-2 text-sm">
                  Note: PolyRoom does not directly store complete credit card numbers. Payment data is handled by 
                  PCI-compliant payment processors.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Device and Technical Information</h3>
                <p className="mb-2">We automatically collect technical data about your device and usage:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Device identifiers (IP address, device ID, advertising ID)</li>
                  <li>Device type, model, operating system, and version</li>
                  <li>Browser type, version, and language settings</li>
                  <li>App version and configuration settings</li>
                  <li>Time zone, country, and general geographic location</li>
                  <li>Network connection type and mobile carrier</li>
                  <li>Crash reports, error logs, and diagnostic data</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Third-Party Integration Data</h3>
                <p className="mb-2">If you connect third-party services to PolyRoom:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Basic profile information from social media accounts (if you use social login)</li>
                  <li>Calendar integration data for scheduling study sessions</li>
                  <li>Information from productivity apps you choose to connect</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Communications and Support Data</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Messages you send to our support team</li>
                  <li>Feedback, ratings, and reviews you provide</li>
                  <li>Survey responses and research participation data</li>
                  <li>Community forum posts and interactions</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Aggregated and Anonymized Data</h3>
                <p>
                  We may create anonymized and aggregated data from your usage that cannot identify you personally. 
                  This non-personal information may be used for analytics, research, and improving our Services without restriction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Collect Your Information</h2>
                <p>We obtain information through various methods:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Directly from you:</strong> When you register, update your profile, use features, or contact us</li>
                  <li><strong>Automatically:</strong> Through cookies, analytics tools, and app functionality as you use our Services</li>
                  <li><strong>From third parties:</strong> Social media platforms (if you use social login), payment processors, and analytics providers</li>
                  <li><strong>From your device:</strong> Technical information transmitted by your device when accessing our Services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p>PolyRoom uses your Personal Information for the following purposes:</p>
                
                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Providing and Improving Services</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Create and maintain your account</li>
                  <li>Deliver personalized language learning experiences</li>
                  <li>Provide AI-powered pronunciation analysis and feedback</li>
                  <li>Track your learning progress and adapt lesson difficulty</li>
                  <li>Generate personalized learning recommendations</li>
                  <li>Analyze learning patterns to optimize our curriculum</li>
                  <li>Develop and improve our AI and machine learning algorithms</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Communication and Support</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Send you account notifications and service updates</li>
                  <li>Provide learning reminders and motivational messages</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send subscription renewal notices and billing information</li>
                  <li>Communicate important changes to our Services or policies</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Business Operations</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Process payments and manage subscriptions</li>
                  <li>Prevent fraud, abuse, and security incidents</li>
                  <li>Enforce our Terms of Service and other policies</li>
                  <li>Comply with legal obligations and respond to lawful requests</li>
                  <li>Conduct internal research and analytics</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Marketing (With Your Consent)</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Send promotional materials about new features or courses</li>
                  <li>Provide personalized recommendations for premium content</li>
                  <li>Share educational content and language learning tips</li>
                </ul>
                <p className="mt-2 text-sm">You can opt out of marketing communications at any time.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. How We Share Your Information</h2>
                <p className="font-medium">We do not sell your Personal Information to third parties.</p>
                <p className="mt-2">We may share your information in the following limited circumstances:</p>
                
                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Service Providers and Business Partners</h3>
                <p>We engage trusted third-party companies to perform services on our behalf, including:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Cloud hosting and data storage providers</li>
                  <li>Payment processors and billing services</li>
                  <li>Analytics and performance monitoring tools</li>
                  <li>Customer support platforms</li>
                  <li>Email and communication services</li>
                  <li>Marketing and advertising partners</li>
                </ul>
                <p className="mt-2">
                  These providers are contractually obligated to use your information only for the services they provide 
                  and to maintain appropriate security measures.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Corporate Affiliates</h3>
                <p>
                  We may share information with our subsidiaries, parent company, or affiliated entities for purposes 
                  consistent with this Privacy Policy.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Legal Compliance and Protection</h3>
                <p>We may disclose your information when required by law or to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Comply with legal obligations, court orders, or government requests</li>
                  <li>Enforce our Terms of Service and protect our legal rights</li>
                  <li>Investigate and prevent fraud, security breaches, or illegal activities</li>
                  <li>Protect the safety and security of our users and the public</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Business Transfers</h3>
                <p>
                  If PolyRoom is involved in a merger, acquisition, asset sale, or bankruptcy, your Personal Information 
                  may be transferred as part of that transaction. We will notify you of any such change in ownership or 
                  control of your information.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">With Your Consent</h3>
                <p>
                  We may share information for any other purpose disclosed to you and with your consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage, 
                  and personalize content. Here's what you should know:
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Types of Cookies We Use</h3>
                
                <p className="mt-3"><strong>Essential Cookies:</strong> Required for basic functionality like authentication and session management. 
                These cannot be disabled without affecting core Services.</p>

                <p className="mt-3"><strong>Analytics Cookies:</strong> Help us understand how users interact with our Services by collecting 
                usage statistics and performance data. These cookies enable us to identify areas for improvement.</p>

                <p className="mt-3"><strong>Preference Cookies:</strong> Remember your settings, language choices, and other preferences 
                to provide a customized experience.</p>

                <p className="mt-3"><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness. 
                These may be set by third-party advertising partners.</p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Third-Party Analytics and Advertising</h3>
                <p>We use services like Google Analytics to analyze traffic and usage patterns. These services may use cookies 
                and similar technologies to collect data about your interactions with our Services and other websites.</p>
                
                <p className="mt-2">
                  To learn about Google's privacy practices, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">Google's Privacy Policy</a>. 
                  You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">Google Analytics Opt-out Browser Add-on</a>.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Managing Cookies</h3>
                <p>Most browsers allow you to control cookies through their settings. You can:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>View and delete cookies stored on your device</li>
                  <li>Block third-party cookies</li>
                  <li>Block all cookies (though this may impair functionality)</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
                <p className="mt-2">
                  Note: Disabling certain cookies may limit your ability to use some features of our Services.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-4 mb-2">Do Not Track Signals</h3>
                <p>
                  Our Services do not currently respond to "Do Not Track" browser signals. However, you can use the 
                  cookie management options described above to control tracking.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security and Protection</h2>
                <p>
                  We take the security of your Personal Information seriously and implement comprehensive technical 
                  and organizational measures, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Encryption of data in transit using TLS/SSL protocols</li>
                  <li>Encryption of sensitive data at rest</li>
                  <li>Regular security assessments, vulnerability scans, and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure development practices and code reviews</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information using industry best practices, no system is completely secure. 
                  We cannot guarantee absolute security of data transmitted over the internet. We encourage you to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Use a strong, unique password for your PolyRoom account</li>
                  <li>Enable two-factor authentication if available</li>
                  <li>Keep your login credentials confidential</li>
                  <li>Log out after using shared devices</li>
                  <li>Report suspicious activity immediately</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
                <p>
                  We retain your Personal Information for as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods vary 
                  depending on the type of information:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period thereafter</li>
                  <li><strong>Learning Progress:</strong> Stored to maintain continuity of your learning experience</li>
                  <li><strong>Voice Recordings:</strong> Retained only as long as necessary for analysis and feedback, then deleted</li>
                  <li><strong>Transaction Records:</strong> Kept for accounting and legal compliance purposes (typically 7 years)</li>
                  <li><strong>Technical Logs:</strong> Retained for security and operational purposes (typically 90 days)</li>
                </ul>
                <p className="mt-4">
                  When you delete your account, we will delete or anonymize your Personal Information, except where we 
                  must retain it for legal compliance, dispute resolution, or enforcement of our agreements. Some information 
                  may persist in backup systems for a limited time before permanent deletion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                <p>
                  PolyRoom is based in the United States. If you access our Services from outside the U.S., your information 
                  will be transferred to, stored, and processed in the United States and other countries where our service 
                  providers operate. These jurisdictions may have different data protection laws than your country of residence.
                </p>
                <p className="mt-3">
                  When we transfer Personal Information internationally, we implement appropriate safeguards, such as:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Standard Contractual Clauses approved by the European Commission</li>
                  <li>Data processing agreements with third-party service providers</li>
                  <li>Participation in recognized privacy frameworks where applicable</li>
                </ul>
                <p className="mt-3">
                  By using our Services, you consent to the transfer of your information to countries outside your country 
                  of residence, which may have different data protection rules.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p>
                  PolyRoom Services are intended for users aged 13 and older. We do not knowingly collect Personal Information 
                  from children under 13 years of age. If you believe a child under 13 has provided us with Personal Information, 
                  please contact us immediately at <a href="mailto:support@polyroom.com" className="text-indigo-400 hover:text-indigo-300">support@polyroom.com</a>.
                </p>
                <p className="mt-3">
                  If we become aware that we have collected information from a child under 13 without parental consent, 
                  we will take steps to delete that information as quickly as possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Your Privacy Rights</h2>
                <p>Depending on your location and applicable law, you may have certain rights regarding your Personal Information:</p>
                
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong>Right to Access:</strong> Request a copy of the Personal Information we hold about you</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Right to Deletion:</strong> Request deletion of your Personal Information (subject to legal exceptions)</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your information</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
                  <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
                </ul>

                <p className="mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:support@polyroom.com" className="text-indigo-400 hover:text-indigo-300">support@polyroom.com</a>. 
                  We will respond to your request within the timeframe required by applicable law (typically 30 days).
                </p>

                <p className="mt-3">
                  We may need to verify your identity before processing your request. We will not discriminate against you 
                  for exercising your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Third-Party Links and Services</h2>
                <p>
                  Our Services may contain links to third-party websites, apps, or services that are not operated by PolyRoom. 
                  This Privacy Policy does not apply to those external services. We are not responsible for the privacy 
                  practices of third parties.
                </p>
                <p className="mt-3">
                  We encourage you to review the privacy policies of any third-party services before providing them with 
                  your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal 
                  requirements, or other factors. When we make material changes, we will notify you by:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                  <li>Sending an email notification to your registered email address</li>
                  <li>Displaying a prominent notice within our Services</li>
                </ul>
                <p className="mt-3">
                  Your continued use of our Services after the effective date of any changes constitutes acceptance of the 
                  updated Privacy Policy. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="ml-4 space-y-2 mt-3">
                  <p><strong>Email:</strong> <a href="mailto:support@polyroom.com" className="text-indigo-400 hover:text-indigo-300">support@polyroom.com</a></p>
                  <p><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@polyroom.io" className="text-indigo-400 hover:text-indigo-300">privacy@polyroom.io</a></p>
                  <p><strong>Mailing Address:</strong><br/>
                  PolyRoom, Inc.<br/>
                  Attn: Privacy Department<br/>
                  [Your Address]</p>
                </div>
              </section>

              <section className="border-t border-white/10 pt-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Additional Notices for Specific Jurisdictions</h2>
                
                <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">GDPR Notice for European Economic Area (EEA) and UK Residents</h3>
                
                <p className="font-medium">Legal Bases for Processing</p>
                <p className="mt-2">If you are located in the EEA or UK, we process your Personal Information under the following legal bases:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong>Contractual Necessity:</strong> To perform our contract with you (providing Services)</li>
                  <li><strong>Consent:</strong> Where you have given explicit consent (e.g., voice recordings, marketing)</li>
                  <li><strong>Legitimate Interests:</strong> For our business operations, fraud prevention, and service improvement</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                </ul>

                <p className="font-medium mt-4">Your GDPR Rights</p>
                <p className="mt-2">In addition to the rights listed in Section 10, EEA and UK residents have enhanced rights under GDPR:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>Right to obtain information about automated decision-making, including profiling</li>
                  <li>Right to object to processing based on legitimate interests</li>
                  <li>Right to lodge a complaint with your local supervisory authority</li>
                </ul>

                <p className="font-medium mt-4">International Transfers</p>
                <p className="mt-2">
                  When we transfer your Personal Information outside the EEA or UK, we use European Commission-approved 
                  Standard Contractual Clauses and other appropriate safeguards. You may request a copy of these safeguards 
                  by contacting us.
                </p>

                <p className="font-medium mt-4">Data Protection Officer</p>
                <p className="mt-2">
                  For data protection inquiries, you may contact our Data Protection Officer at 
                  <a href="mailto:dpo@polyroom.io" className="text-indigo-400 hover:text-indigo-300"> dpo@polyroom.io</a>.
                </p>

                <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">California Consumer Privacy Act (CCPA) Notice</h3>
                
                <p className="mt-2">
                  If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA).
                </p>

                <p className="font-medium mt-4">Categories of Personal Information Collected</p>
                <p className="mt-2">In the past 12 months, we have collected the following categories:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong>Identifiers:</strong> Name, email, phone number, IP address, device ID</li>
                  <li><strong>Commercial Information:</strong> Purchase history, subscription details</li>
                  <li><strong>Internet Activity:</strong> Browsing history, app usage, interactions with our Services</li>
                  <li><strong>Geolocation Data:</strong> General location based on IP address</li>
                  <li><strong>Audio Data:</strong> Voice recordings for pronunciation practice (with consent)</li>
                  <li><strong>Professional Information:</strong> Language proficiency, learning goals</li>
                  <li><strong>Inferences:</strong> Learning patterns, preferences, and recommendations</li>
                </ul>

                <p className="font-medium mt-4">Your California Privacy Rights</p>
                <p className="mt-2">California residents have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li><strong>Right to Know:</strong> Request information about Personal Information collected, used, and shared</li>
                  <li><strong>Right to Access:</strong> Obtain a copy of your Personal Information</li>
                  <li><strong>Right to Delete:</strong> Request deletion of your Personal Information (subject to exceptions)</li>
                  <li><strong>Right to Opt-Out of Sale:</strong> We do not sell Personal Information</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate for exercising your rights</li>
                </ul>

                <p className="font-medium mt-4">How to Exercise Your Rights</p>
                <p className="mt-2">
                  To submit a request, contact us at <a href="mailto:support@polyroom.com" className="text-indigo-400 hover:text-indigo-300">support@polyroom.com</a> or 
                  use the privacy settings in your account. We will verify your identity before processing requests and respond 
                  within 45 days.
                </p>

                <p className="font-medium mt-4">Authorized Agents</p>
                <p className="mt-2">
                  You may designate an authorized agent to submit requests on your behalf. We will require verification of 
                  both your identity and the agent's authority to act on your behalf.
                </p>

                <p className="font-medium mt-4">No Sale of Personal Information</p>
                <p className="mt-2">
                  PolyRoom does not sell Personal Information as defined by the CCPA. We do not and will not sell your data 
                  to third parties.
                </p>

                <p className="font-medium mt-4">California "Shine the Light" Law</p>
                <p className="mt-2">
                  California residents may request information about Personal Information shared with affiliates for 
                  marketing purposes. Contact us at <a href="mailto:privacy@polyroom.io" className="text-indigo-400 hover:text-indigo-300">privacy@polyroom.io</a> to 
                  make such a request.
                </p>
              </section>

              <p className="text-sm text-white/60 mt-8 pt-6 border-t border-white/10">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
