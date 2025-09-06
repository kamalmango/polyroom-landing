import { Link } from 'react-router-dom';

function Contact() {
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
      <main className="flex-1 flex items-center justify-center pt-24 px-6 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-16 border border-white/10">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Contact us on{' '}
              <a 
                href="mailto:support@polyroom.com" 
                className="font-medium bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-cyan-300 transition-all"
              >
                support@polyroom.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-xs text-white/30 text-center">
        &copy; {new Date().getFullYear()} PolyRoom. All rights reserved.
      </footer>
    </div>
  );
}

export default Contact;
