// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import Profile from './components/Profile'
import Links from './components/Links'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <div className="grid gap-8">
              {/* Profile Section */}
              <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50">
                <Profile />
              </div>
              
              {/* Links Section */}
              <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50">
                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}