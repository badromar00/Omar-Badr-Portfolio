import { FaLocationArrow } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function Profile() {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Backend Software Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > fullText.length) {
          setIsTypingComplete(true);
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center mb-8">
      <div className="relative group cursor-pointer">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-yellow-500/20 group-hover:ring-yellow-400/30 transition-all duration-300 transform group-hover:scale-105">
          <img
            src="/assets/profile_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-all duration-300"></div>
      </div>
      <h1 className="text-4xl font-bold text-white mb-2 hover:text-yellow-200 transition-colors duration-300 cursor-default">Omar Badr</h1>
      <div className="relative">
        <p className="text-gray-300 mb-1 h-6 cursor-default">
          <span className={`typing-cursor ${isTypingComplete ? 'typing-complete' : ''}`}>{displayText}</span>
        </p>
        {isTypingComplete && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-500/50 animate-underline"></div>
        )}
      </div>
      <p className="text-gray-300 mb-1 hover:text-yellow-200 transition-colors duration-300 flex items-center justify-center gap-2 cursor-default group">
        <FaLocationArrow className="inline-block transform group-hover:rotate-45 transition-transform duration-300" />
        <span>San Diego/Los Angeles, CA</span>
      </p>
      <p className="text-gray-300">
        CS @
        <a 
          href="https://www.sdsu.edu/"
          className="text-yellow-400 hover:text-amber-300 transition-colors duration-300 ml-1 relative inline-block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          San Diego State University
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
        </a>
      </p>
    </div>
  )
}