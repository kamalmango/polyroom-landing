import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 pb-16 relative">
      {/* Simple, subtle background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                PolyRoom
              </span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
              <a href="#tech" className="text-white/70 hover:text-white transition-colors">Technology</a>
              <a href="#analytics" className="text-white/70 hover:text-white transition-colors">Analytics</a>
              <a href="#categories" className="text-white/70 hover:text-white transition-colors">Categories</a>
              <a href="mailto:ceo@polyroom.io" className="glass px-4 py-1.5 rounded-full transition-all hover:bg-white/5">
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden glass p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center z-10 mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 md:translate-x-24 mb-8">
          {/* Mobile app screens */}
          <div className="hidden md:block h-[450px] relative perspective-container -ml-32 mt-32">
            {/* App 1: Fitness App */}
            <div className="mobile-app absolute -left-[180px] top-[0%] z-20 rotate-[-6deg]">
              <div className="bezel w-[120px] h-[240px] bg-gray-900 rounded-3xl p-1.5">
                <div className="screen w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl overflow-hidden">
                  <div className="screen-content w-full h-full p-2 flex flex-col">
                    <div className="h-5 flex justify-between items-center mb-3">
                      <div className="w-8 h-1.5 bg-white/20 rounded-full"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    </div>
                    <div className="h-24 rounded-xl bg-white/10 mb-3 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white/40"></div>
                      </div>
                    </div>
                    <div className="h-3 w-3/4 bg-white/20 rounded mb-1"></div>
                    <div className="h-3 w-1/2 bg-white/20 rounded mb-3"></div>
                    <div className="h-12 rounded-lg bg-white/10 mb-2"></div>
                    <div className="h-12 rounded-lg bg-white/10 mb-2"></div>
                    <div className="flex justify-between mt-auto">
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App 2: Social App */}
            <div className="mobile-app absolute -left-[120px] top-[-5%] z-30">
              <div className="bezel w-[120px] h-[240px] bg-gray-900 rounded-3xl p-1.5">
                <div className="screen w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl overflow-hidden">
                  <div className="screen-content w-full h-full p-2 flex flex-col">
                    <div className="h-5 flex justify-between items-center mb-2">
                      <div className="w-6 h-1.5 bg-white/20 rounded-full"></div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                      </div>
                    </div>
                    <div className="h-8 flex items-center px-1 mb-2">
                      <div className="w-6 h-6 rounded-full bg-white/20 mr-1.5"></div>
                      <div>
                        <div className="h-1.5 w-10 bg-white/30 rounded mb-1"></div>
                        <div className="h-1.5 w-6 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="h-24 rounded-lg bg-white/10 mb-2"></div>
                    <div className="flex gap-1 mb-1 h-4">
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                      <div className="ml-auto w-4 h-4 rounded-full bg-white/20"></div>
                    </div>
                    <div className="h-24 rounded-lg bg-white/10 mb-2"></div>
                    <div className="flex-1 flex justify-between mt-auto">
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App 3: Financial App */}
            <div className="mobile-app absolute -left-[60px] top-[2%] z-10 rotate-[8deg]">
              <div className="bezel w-[120px] h-[240px] bg-gray-900 rounded-3xl p-1.5">
                <div className="screen w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl overflow-hidden">
                  <div className="screen-content w-full h-full p-2 flex flex-col">
                    <div className="h-5 flex items-center justify-center mb-3">
                      <div className="w-10 h-1.5 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="h-20 rounded-xl bg-white/10 mb-3 flex flex-col justify-center items-center">
                      <div className="w-14 h-3 bg-white/20 rounded mb-1"></div>
                      <div className="w-10 h-2 bg-white/20 rounded mt-1"></div>
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 mb-2 flex justify-between items-center px-2">
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="w-10 h-4 bg-white/15 rounded"></div>
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 mb-2 flex justify-between items-center px-2">
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="w-10 h-4 bg-white/15 rounded"></div>
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 flex justify-between items-center px-2">
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="w-10 h-4 bg-white/15 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App 4: E-commerce App */}
            <div className="mobile-app absolute left-0 top-[5%] z-25 rotate-[-3deg]">
              <div className="bezel w-[120px] h-[240px] bg-gray-900 rounded-3xl p-1.5">
                <div className="screen w-full h-full bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl overflow-hidden">
                  <div className="screen-content w-full h-full p-2 flex flex-col">
                    <div className="h-6 flex justify-between items-center mb-2">
                      <div className="w-5 h-5 rounded-md bg-white/20"></div>
                      <div className="w-5 h-5 rounded-md bg-white/20 relative">
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="h-6 bg-white/10 rounded-full mb-3 flex items-center justify-between px-2">
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      <div className="w-10 h-2 bg-white/20 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="aspect-square bg-white/10 rounded-lg"></div>
                      <div className="aspect-square bg-white/10 rounded-lg"></div>
                      <div className="aspect-square bg-white/10 rounded-lg"></div>
                      <div className="aspect-square bg-white/10 rounded-lg"></div>
                    </div>
                    <div className="h-6 bg-white/15 rounded-lg mb-2"></div>
                    <div className="h-9 rounded-lg bg-white/30 flex items-center justify-center">
                      <div className="w-14 h-2 bg-white/70 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left ml-0 md:ml-16 mb-16 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">PolyRoom</h1>
            <p className="text-base md:text-lg text-white/80 font-light mb-6">
              Master languages through immersive learning
            </p>
            
            <a 
              href="mailto:ceo@polyroom.io" 
              className="inline-block glass px-6 py-2 rounded-full transition-all hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="w-full max-w-3xl text-center px-6 mb-48 scroll-mt-32">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
            <span className="text-white/60 mb-6 block text-sm tracking-wider uppercase">About Us</span>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              At <span className="font-medium bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">PolyRoom</span>, 
              we revolutionize language learning through cutting-edge technology and immersive experiences. 
              Our mission is to break down language barriers and connect people across cultures worldwide.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="w-full max-w-6xl px-6 mb-48 scroll-mt-32">
          <h2 className="text-4xl font-bold text-center mb-4">Advanced Learning Features</h2>
          <p className="text-lg text-white/80 text-center mb-16">
            We combine AI-powered language processing with immersive learning techniques to create engaging educational experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Lessons</h3>
              <p className="text-white/70 leading-relaxed">
                Engaging, bite-sized lessons that adapt to your learning style and pace for maximum retention.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Speech Recognition</h3>
              <p className="text-white/70 leading-relaxed">
                Advanced AI-powered speech recognition to perfect your pronunciation and speaking skills.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-white/70 leading-relaxed">
                Comprehensive analytics and progress tracking to monitor your learning journey and celebrate achievements.
              </p>
            </div>
          </div>
        </div>

        {/* In-house Tech Section */}
        <div id="tech" className="w-full max-w-6xl px-6 mb-48 scroll-mt-32">
          <h2 className="text-4xl font-bold text-center mb-4">AI-Powered Learning Technology</h2>
          <p className="text-lg text-white/80 text-center mb-16">
            Our advanced AI and machine learning algorithms create personalized learning experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Tech Card 1 */}
            <div className="group">
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all hover:border-white/10">
                <div className="w-16 h-16 mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Adaptive Learning</h3>
                <p className="text-white/70 leading-relaxed">
                  AI algorithms that adapt to your learning patterns, optimizing difficulty and pacing for maximum retention.
                </p>
              </div>
            </div>

            {/* Tech Card 2 */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all hover:border-white/10">
                <div className="w-16 h-16 mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Real-time Feedback</h3>
                <p className="text-white/70 leading-relaxed">
                  Instant corrections and suggestions powered by natural language processing for continuous improvement.
                </p>
              </div>
            </div>

            {/* Tech Card 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all hover:border-white/10">
                <div className="w-16 h-16 mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Smart Analytics</h3>
                <p className="text-white/70 leading-relaxed">
                  Comprehensive learning analytics that track your progress and identify areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Track & Analyze Section with Visual */}
        <div id="analytics" className="w-full max-w-6xl px-6 mb-48 scroll-mt-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Phone Visual */}
            <div className="w-full md:w-1/2">
              <div className="mobile-app">
                <div className="bezel w-[240px] h-[480px] bg-gray-900 rounded-[3rem] p-3 mx-auto">
                  <div className="screen w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.25rem] overflow-hidden">
                    <div className="screen-content w-full h-full p-4 flex flex-col">
                      {/* Analytics UI Elements */}
                      <div className="h-10 flex justify-between items-center mb-4">
                        <div className="w-20 h-3 bg-white/20 rounded-full"></div>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-white/30"></div>
                          <div className="w-3 h-3 rounded-full bg-white/30"></div>
                        </div>
                      </div>
                      <div className="h-40 rounded-2xl bg-white/10 mb-4 p-4">
                        <div className="h-full flex items-end justify-between gap-2">
                          <div className="w-8 h-[30%] bg-white/20 rounded-lg"></div>
                          <div className="w-8 h-[45%] bg-white/20 rounded-lg"></div>
                          <div className="w-8 h-[80%] bg-white/20 rounded-lg"></div>
                          <div className="w-8 h-[60%] bg-white/20 rounded-lg"></div>
                          <div className="w-8 h-[90%] bg-white/20 rounded-lg"></div>
                          <div className="w-8 h-[75%] bg-white/20 rounded-lg"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="h-24 rounded-xl bg-white/10 p-3">
                          <div className="w-8 h-8 rounded-lg bg-white/20 mb-2"></div>
                          <div className="w-12 h-2 bg-white/30 rounded mb-1"></div>
                          <div className="w-16 h-2 bg-white/20 rounded"></div>
                        </div>
                        <div className="h-24 rounded-xl bg-white/10 p-3">
                          <div className="w-8 h-8 rounded-lg bg-white/20 mb-2"></div>
                          <div className="w-12 h-2 bg-white/30 rounded mb-1"></div>
                          <div className="w-16 h-2 bg-white/20 rounded"></div>
                        </div>
                      </div>
                      <div className="h-32 rounded-xl bg-white/10 p-4">
                        <div className="flex justify-between items-center mb-3">
                          <div className="w-20 h-2 bg-white/30 rounded"></div>
                          <div className="w-8 h-2 bg-white/20 rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-white/20 rounded w-full"></div>
                          <div className="h-3 bg-white/15 rounded w-4/5"></div>
                          <div className="h-3 bg-white/10 rounded w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-4xl font-bold mb-6">Learn & Progress</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our intelligent learning platform tracks your progress and adapts to your learning style. Get personalized insights and celebrate your language milestones.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Learning Insights</h3>
                    <p className="text-white/70">Track your vocabulary growth, speaking confidence, and comprehension skills with detailed progress reports.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
                    <p className="text-white/70">AI-powered recommendations that adapt lesson content based on your strengths and areas for improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Categories Section */}
        <div id="categories" className="w-full max-w-6xl px-6 mb-48 scroll-mt-32">
          <h2 className="text-4xl font-bold text-center mb-4">Learning Features</h2>
          <p className="text-lg text-white/80 text-center mb-16">
            Comprehensive language learning tools designed to make your journey engaging and effective
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Graphics & Design */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all hover:border-white/10">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Vocabulary Builder</h3>
                <p className="text-white/70 text-sm">Smart flashcards and spaced repetition</p>
              </div>
            </div>

            {/* Utilities */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all hover:border-white/10">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Grammar Coach</h3>
                <p className="text-white/70 text-sm">Interactive grammar lessons and exercises</p>
              </div>
            </div>

            {/* Health & Fitness */}
            <div className="group">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all hover:border-white/10">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Conversation Practice</h3>
                <p className="text-white/70 text-sm">AI chatbots for realistic conversations</p>
              </div>
            </div>

            {/* Education */}
            <div className="group">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all hover:border-white/10">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cultural Context</h3>
                <p className="text-white/70 text-sm">Learn language through cultural immersion</p>
              </div>
            </div>

            {/* Productivity */}
            <div className="group">
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all hover:border-white/10">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pronunciation Guide</h3>
                <p className="text-white/70 text-sm">Perfect your accent with audio feedback</p>
              </div>
            </div>

            {/* Entertainment */}
            <div className="group">
              <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all hover:border-white/10">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Story Mode</h3>
                <p className="text-white/70 text-sm">Learn through interactive stories</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-xs text-white/30 text-center w-full">
        &copy; {new Date().getFullYear()} PolyRoom. All rights reserved.
      </footer>
    </div>
  )
}

export default App
