import GeometricAccent from "@/components/GeometricAccent";
import logo from "@/assets/cambrena-logo.svg";
import backgroundImage from "@/assets/background.jpg";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Imprint = () => {
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
        <h1 className="text-2xl font-bold mb-6">Imprint</h1>
        <div className="space-y-2 text-sm">
          <p>Cambrena AG</p>
          <p>Haldenstrasse 1</p>
          <p>6340 Baar</p>
          <p>Switzerland</p>
          <p className="mt-4">UID: CHE-307.299.793</p>
          <p className="mt-4">
            <a href="mailto:hello@cambrena.net" className="hover:opacity-60 transition-opacity">
              hello@cambrena.net
            </a>
          </p>
        </div>
        <div className="mt-8 text-xs max-w-2xl mx-auto">
          <p>
            This website is for general information purposes only. It does not constitute investment advice or a recommendation or a solicitation to buy or sell any investment and should not be used in the evaluation of the merits of making any investment decision. It should not be relied upon for accounting, legal, tax advice, or investment recommendations.
          </p>
        </div>
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

export default Imprint;
