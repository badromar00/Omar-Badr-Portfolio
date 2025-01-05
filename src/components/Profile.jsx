import { FaLocationArrow } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function Profile() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Backend Software Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center mb-8">
      <div className="relative group">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-500/30 group-hover:ring-blue-400/50 transition-all duration-300 transform group-hover:scale-105">
          <img
            src="/assets/profile_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300"></div>
      </div>
      <h1 className="text-4xl font-bold text-white mb-2 hover:text-blue-300 transition-colors duration-300">Omar Badr</h1>
      <p className="text-gray-300 mb-1 h-6">
        <span className="typing-cursor">{displayText}</span>
      </p>
      <p className="text-gray-300 mb-1 hover:text-blue-300 transition-colors duration-300">
        <FaLocationArrow className="inline-block animate-bounce" /> San Diego/Los Angeles, CA
      </p>
      <p className="text-gray-300">
        CS @
        <a 
          href="https://www.sdsu.edu/"
          className="text-blue-400 hover:text-purple-300 transition-colors duration-300 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          San Diego State University
        </a>
      </p>
    </div>
  )
}