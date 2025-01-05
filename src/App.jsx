// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import Profile from './components/Profile'
import Links from './components/Links'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.3),rgba(15,23,42,0.8))] animate-pulse opacity-50"></div>
        
        {/* Decorative blurred circles */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-blue-800/10 blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-blue-700/10 blur-[100px] animate-float-delayed"></div>
        
        <div className="container relative mx-auto px-4 py-8 max-w-2xl">
          <div className="bg-blue-950/10 backdrop-blur-md rounded-2xl p-8 border border-blue-800/20 shadow-2xl animate-fade-in hover:border-blue-700/30 transition-all duration-300 hover:shadow-3xl">
            <div className="grid gap-8">
              {/* Profile Section */}
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/20 animate-fade-in-up hover:bg-blue-900/30 transition-all duration-300 hover:border-blue-700/30 hover:shadow-lg transform hover:-translate-y-1" 
                   style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                <Profile />
              </div>
              
              {/* Links Section */}
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-800/20 animate-fade-in-up hover:bg-blue-900/30 transition-all duration-300 hover:border-blue-700/30 hover:shadow-lg transform hover:-translate-y-1" 
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