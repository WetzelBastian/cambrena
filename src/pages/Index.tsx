import { useState, useEffect } from "react";
import TriangleAccent from "@/components/TriangleAccent";
import logo from "@/assets/cambrena-logo.gif";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center bg-background">
      {/* Logo */}
      <div 
        className={`absolute transition-all duration-[1500ms] ease-in-out ${
          animationComplete 
            ? 'top-12 left-16 scale-100' 
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-200'
        }`}
      >
        <img 
          src={logo} 
          alt="Cambrena Logo"
          className="h-24 object-contain"
        />
      </div>

      {/* Main Content */}
      <main 
        className={`relative z-10 max-w-4xl mx-auto px-8 text-center transition-opacity duration-700 ${
          animationComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 tracking-tight leading-none">
          BUILT FOR WHAT'S NEXT
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-wide">
          We invest at the earliest stages of a company's growth, using capital that isn't bound by traditional fund lifecycles
        </p>
      </main>

      {/* Footer Links */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-xs tracking-wider transition-opacity duration-700 ${
          animationComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link to="/imprint" className="hover:opacity-60 transition-opacity">
          Imprint
        </Link>
        <span>|</span>
        <Link to="/privacy-policy" className="hover:opacity-60 transition-opacity">
          Privacy Policy
        </Link>
        <span>|</span>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <span>|</span>
        <a 
          href="mailto:contact@cambrena.net" 
          className="hover:opacity-60 transition-opacity"
        >
          contact@cambrena.net
        </a>
      </div>
    </div>
  );
};

export default Index;
