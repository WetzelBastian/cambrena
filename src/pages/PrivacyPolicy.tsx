import GeometricAccent from "@/components/GeometricAccent";
import logo from "@/assets/cambrena-logo.svg";
import backgroundImage from "@/assets/background.jpg";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Geometric Accents */}
      <GeometricAccent />
      
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
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      </main>

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

export default PrivacyPolicy;
