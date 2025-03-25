// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import Profile from './components/Profile'
import Links from './components/Links'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.08),rgba(15,23,42,0.7))] animate-pulse opacity-50"></div>
        
        {/* Decorative blurred circles */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-yellow-500/5 blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px] animate-float-delayed"></div>
        
        <div className="container relative mx-auto px-4 py-8 max-w-2xl">
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-yellow-900/20 shadow-2xl animate-fade-in hover:border-yellow-700/20 transition-all duration-300 hover:shadow-3xl">
            <div className="grid gap-8">
              {/* Profile Section */}
              <div className="bg-slate-800/40 rounded-xl p-6 border border-yellow-900/10 animate-fade-in-up hover:bg-slate-700/40 transition-all duration-300 hover:border-yellow-700/20 hover:shadow-lg transform hover:-translate-y-1" 
                   style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                <Profile />
              </div>
              
              {/* Links Section */}
              <div className="bg-slate-800/40 rounded-xl p-6 border border-yellow-900/10 animate-fade-in-up hover:bg-slate-700/40 transition-all duration-300 hover:border-yellow-700/20 hover:shadow-lg transform hover:-translate-y-1" 
                   style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}