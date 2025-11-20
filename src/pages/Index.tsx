import TriangleAccent from "@/components/TriangleAccent";
import logo from "@/assets/cambrena-logo.gif";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center bg-background">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
      
      {/* Logo */}
      <div className="absolute top-12 left-16">
        <img 
          src={logo} 
          alt="Cambrena Logo"
          className="h-24 object-contain"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 tracking-tight leading-none">
          BUILT FOR WHAT'S NEXT
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-wide">
          We invest at the earliest stages of a company's growth, using capital that isn't bound by traditional fund lifecycles
        </p>
      </main>

      {/* Contact Section */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="w-full h-[1px] bg-border" />
        <div className="flex justify-end px-8 py-2">
          <p className="text-xs tracking-wider">Contact: hello@cambena.net</p>
        </div>
        <div className="w-full h-[1px] bg-border" />
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-xs tracking-wider">
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
      </div>
    </div>
  );
};

export default Index;
