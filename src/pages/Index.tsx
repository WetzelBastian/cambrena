import GeometricAccent from "@/components/GeometricAccent";
import TriangleAccent from "@/components/TriangleAccent";
import logo from "@/assets/cambrena-logo.svg";

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative flex items-center justify-center">
      {/* Geometric Accents */}
      <GeometricAccent />
      <TriangleAccent className="bottom-12 left-12 text-foreground opacity-40" />
      
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <img 
          src={logo} 
          alt="Cambrena Logo" 
          className="h-40 object-contain"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 tracking-tight leading-none">
          PROJECT<br />BRIEF DECK
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-wide">
          Add a subtitle or the company tagline here
        </p>
      </main>

      {/* Footer Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-xs tracking-wider">
        <a href="#" className="hover:opacity-60 transition-opacity">
          Imprint
        </a>
        <span>|</span>
        <a href="#" className="hover:opacity-60 transition-opacity">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Index;
