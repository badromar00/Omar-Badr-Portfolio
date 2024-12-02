import { FaLocationArrow } from "react-icons/fa"

export default function Profile() {
  return (
    <div className="text-center mb-8">
      <div className="relative">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-500/30">
          <img
            src="/assets/profile_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-white mb-2">Omar Badr</h1>
      <p className="text-gray-300 mb-1">
        Backend Software Engineer
      </p>
      <p className="text-gray-300 mb-1">
        <FaLocationArrow className="inline-block" /> San Diego/Los Angeles, CA</p>
      <p className="text-gray-300">
        CS @
        <a 
          href="https://www.sdsu.edu/"
          className="text-blue-400 hover:text-purple-300 ml-1" target="_blank"
        >
          San Diego State University
        </a>
      </p>
    </div>
  )
}