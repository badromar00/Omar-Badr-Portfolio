import { BrowserRouter as Router } from 'react-router-dom'
import Profile from './components/Profile'
import Links from './components/Links'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Profile />
          <Links />
        </div>
      </div>
    </Router>
  )
}
